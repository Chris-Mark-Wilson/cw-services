import { useState, useEffect,useRef } from "react";
import { Accordion } from "react-bootstrap";
import { getAllImagesByCategory } from "../../../api/firebase_api";

import { uploadImage } from "../../../api/firebase_api";
import { deleteImage } from "../../../api/firebase_api";
import { LoadingSpinner } from "./LoadingSpinner";
import { useModal } from "../../context/ModalContext";

import {updateImageName} from "../../../api/firebase_api";
import CustomSelect from "../CustomSelect";


export const EditImages = ({ selectedCategory,setSelectedCategory,reload,setReload }) => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedImageUrl, setSelectedImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [editedImageName, setEditedImageName] = useState("");
  const [isEdited, setIsEdited] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [spinnerMessage, setSpinnerMessage] = useState("");
  const [dimensions, setDimensions] = useState({ naturalWidth: 0, naturalHeight: 0 });
  const imgRef = useRef(null);
  const [largeImage, setLargeImage] = useState(false);

  const {showModalDelete,showModalComplete} = useModal();

  useEffect(() => {
    if (imgRef.current) {
     // gets the natural width and height of the image in the viewer
     // for scaling the image to its natural aspect ration
       setDimensions({
        naturalWidth: imgRef.current.naturalWidth,
        naturalHeight: imgRef.current.naturalHeight,
      });
    }
  }, [imgRef,largeImage]);

  const { naturalWidth, naturalHeight } = dimensions;



useEffect(()=>{
  if(editedImageName!==''){
    setIsEdited(true);
  } else {
    setIsEdited(false);
  }
},[editedImageName]);

  useEffect(() => {

    if (selectedCategory && selectedCategory.id !== 0) {

      // get the images from the selected category
      setSpinnerMessage('Loading Categories...');
      setIsLoading(true);
      getAllImagesByCategory(selectedCategory)
      //returns an array of image objects
      // {name:(string),caption:(string),title:(string), url:(imageurl)}
        .then((images) => {
          if (images.length > 0){
            //deep copy the array of image objects
            // console.log(images)
          setImages(JSON.parse(JSON.stringify(images)));
       
          // setSelectedImage(images[0].name);
           setSelectedImage(images[0]);
          // console.log('selected image url:',images[0].url);
          setSelectedImageUrl(images[0].url);
          } else {
            setSelectedImage('');
            setSelectedImageUrl('');
            setTitle('');
            setCaption('');
          }
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
      }
      },[selectedCategory,reload]);

  useEffect(() => {
     
    if (selectedCategory !== "" && selectedImage !== "") {
          // console.log('in use effect2');
     
        // console.log('selected image : ',selectedImage);
        // console.log('images:',images)
        // const image=images.find((image)=>image.name===selectedImage);
        // console.log('found image: ',image)
        const url=selectedImage.url;
        // console.log('image.url:',url)
        setSelectedImageUrl(selectedImage.url)
        setTitle(selectedImage.title);
        setCaption(selectedImage.caption);
      }
  }, [selectedImage,reload]);

  

  const deleteSelectedImage = () => {

deleteImage(selectedCategory.id,selectedCategory.name,selectedImage)
.then((response)=>{
setSelectedImage('');
setSelectedCategory('');
setTitle('');
setCaption('');
setSelectedImageUrl('');

setTimeout(()=>{
  setReload((prev)=>!prev);
  showModalComplete('Image Deleted','The image has been deleted.');

},2000);
  }).catch((error)=>{
    console.error(error);
  });
}

  const saveSelectedImage = async (e) => {
    e.preventDefault();
    try {
      setSpinnerMessage("Saving Image...");
      setIsLoading(true);
      if (editedImageName !== "") {
        setSpinnerMessage("Updating Image Name...");
  
        await updateImageName(selectedCategory.id, selectedImage.name, editedImageName);
  
      } else{
      await uploadImage(selectedCategory.id,selectedCategory.name, selectedImageUrl, {
        title: title,
        caption: caption,
        name: selectedImage,
      });
    }



      
      setEditedImageName('');
      setSelectedImage(editedImageName===''?selectedImage:editedImageName);
      setIsEdited(false);
      setIsLoading(false);
      setTimeout(() => {
      setReload((prev) => !prev);
      showModalComplete('Image Saved',`Image saved as ${editedImageName===''?selectedImage:editedImageName}`);
      }, 2000);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };



  return (
    <>
      <Accordion className="accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Edit Images</Accordion.Header>
          <Accordion.Body>
            <section className="upload-images">
              <h5>Edit Images</h5>
              <div className="images-container">
                <label>
                  Select Image:
                  <CustomSelect
                    images={images}
                    setSelectedImage={setSelectedImage}
                    selectedImage={selectedImage}
                  />
                </label>

                <div className="image-display">
                  {selectedImage.url !== "" && (
                    <img
                      ref={imgRef}
                      src={selectedImage.url}
                      alt="selected image"
                      className={`file-image ${
                        largeImage ? "large-image" : ""
                      }`}
                      onClick={() => setLargeImage(!largeImage)}
                      style={{
                        transform: ` scale(${
                          largeImage ? (naturalWidth / naturalHeight) * 2 : 1
                        },${largeImage ? 2 : 1})`,
                      }}
                    />
                  )}
                </div>

                {selectedImage != "" && (
                  <div className="edit-buttons">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div>Selected Category: {selectedCategory.name}</div>
                      <div>Selected Image: {selectedImage.name}</div>
                    </div>
                    <div className="edit-input-group">
                      <label htmlFor="editImageName">Edit Image Name</label>
                      <input
                        type="text"
                        name="editImageName"
                        placeholder="enter new image name"
                        value={editedImageName}
                        onChange={(e) => {
                          setIsEdited(true);
                          setEditedImageName(e.target.value);
                        }}
                      />
                    </div>
                    {isEdited && (
                      <form>
                        <button type="submit" onClick={saveSelectedImage}>
                          Save Image
                        </button>
                      </form>
                    )}
                    <button
                      onClick={() =>
                        showModalDelete(
                          "Confirm Delete Image",
                          "Are you sure you want to delete this image? This cannot be undone.",
                          deleteSelectedImage
                        )
                      }
                    >
                      Delete Image
                    </button>
                  </div>
                )}
              </div>

              <section className="upload-title">
                <label htmlFor="title">Edit Title / Alt</label>
                <textarea
                  type="text"
                  id="title"
                  placeholder="Enter a title that will also be the alt text"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                    setIsEdited(true);
                  }}
                />
              </section>

              <section className="upload-caption">
                <label htmlFor="caption">Edit Caption</label>
                <textarea
                  type="text"
                  id="caption"
                  placeholder="Enter a caption for the image"
                  value={caption}
                  onChange={(e) => {
                    setCaption(e.target.value);
                    setIsEdited(true);
                  }}
                />
              </section>
            </section>

            {isLoading && <LoadingSpinner message={spinnerMessage} />}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};
