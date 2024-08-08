import { useState, useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { getImageNamesByCategory } from "../../../api/firebase_api";
import { getImageByImageName } from "../../../api/firebase_api";
import { getImageDataByImageName } from "../../../api/firebase_api";
import { uploadImage } from "../../../api/firebase_api";
import { deleteImage } from "../../../api/firebase_api";
import { LoadingSpinner } from "./LoadingSpinner";
import { useModal } from "../../context/ModalContext";

import {updateImageName} from "../../../api/firebase_api";

export const EditImages = ({ selectedCategory,reload,setReload }) => {
  const [imageList, setImageList] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedImageUrl, setSelectedImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [editedImageName, setEditedImageName] = useState("");
  const [isEdited, setIsEdited] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [spinnerMessage, setSpinnerMessage] = useState("");

  const {showModal} = useModal();



  useEffect(() => {

    if (selectedCategory !== "None Selected") {
  console.log('in use effect1');
     
      // get the images from the selected category
      setSpinnerMessage('Loading Categories...');
      setIsLoading(true);
      getImageNamesByCategory(selectedCategory)
        .then((names) => {
       
          setImageList(names);
          if (names.length > 0){
            
          console.log('selectedImage:names[0]',names[0]);
          setSelectedImage(names[0]);
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
     
        if (selectedCategory !== "None Selected") {
          console.log('in use effect2');
      if (selectedImage !== "") {
        setSpinnerMessage('Loading Image...');
      setIsLoading(true);
        // console.log("selected image:", selectedImage);
        getImageByImageName(selectedCategory, selectedImage)
          .then((image) => {
            console.log("selectedImage:", selectedImage);
            console.log("selectedImage image:", image);
            setSelectedImageUrl(image);
            setIsLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setIsLoading(false);
          });
       
          getImageDataByImageName(selectedCategory, selectedImage)
          .then((imageData) => {
              console.log('selectedImage imageData :',imageData)
              setTitle(imageData.title);
              setCaption(imageData.caption??'');
          })
          .catch((error) => {
              console.log(error);
          });
      }
    }
  }, [selectedImage,reload]);

  

  const deleteSelectedImage = () => {
console.log('in delete');
deleteImage(selectedCategory,selectedImage)
.then((response)=>{
setSelectedImage('');
setTitle('');
setCaption('');
setSelectedImageUrl('');

setReload((prev)=>!prev);
});
  };

  const saveSelectedImage = async () => {
    // if(selectedCategory==='None Selected'){
    //    alert('Please select a category');
    //    return;
    //   }

    try {
      setSpinnerMessage("Saving Image...");
      setIsLoading(true);
      if (editedImageName !== "") {
        setSpinnerMessage("Updating Image Name...");
  
        await updateImageName(selectedCategory, selectedImage, editedImageName);
  
      } else{
      await uploadImage(selectedCategory, selectedImageUrl, {
        title: title,
        caption: caption,
        name: selectedImage,
      });
    }

      console.log("done to here");

      
      setEditedImageName('');
      setSelectedImage(editedImageName===''?selectedImage:editedImageName);
      setIsEdited(false);
      setIsLoading(false);
      setReload((prev) => !prev);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };



  return (
    <>
    <Accordion className='accordion'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Edit Images</Accordion.Header>
        <Accordion.Body>
          <section className="upload-images">
            <h5>Edit Images</h5>
            <div className="images-container">
              <label>
                Select Image:
                <select
                  name="image-list"
                  onChange={(e)=>setSelectedImage(e.target.value)}
                  value={selectedImage}
                >
                  {/* <option value={selectedImage}>{selectedImage}</option> */}
                  {imageList.map((imageName, index) => {
                  
                    return (
                      <option key={index} >
                        {imageName}
                      </option>
                    );
                  })}
                </select>
              </label>

              <div className="image-display">
                {selectedImageUrl !== "" && (
                  <img
                    src={URL.createObjectURL(selectedImageUrl)}
                    alt="selected image"
                    className="file-image"
                  />
                )}
              </div>

              {selectedImage!= '' && 
              < div className='edit-buttons'>
                <div className='edit-input-group'>
                  <label htmlFor='editImageName'>Edit Image Name</label>
                  <input type='text' name = 'editImageName'  placeholder='enter new image name' value={editedImageName} onChange={(e)=>{setIsEdited(true);setEditedImageName(e.target.value)}}/>
                </div>
              {isEdited && <button onClick={saveSelectedImage}>Save Image</button>}

              <button onClick={()=>showModal('Confirm Delete Image','Are you sure you want to delete this image? This cannot be undone.',deleteSelectedImage)}>
                Delete Image
                </button>
                </div>
              }

            </div>

            <section className="upload-title">
              <label htmlFor="title">Edit Title / Alt</label>
              <textarea
                type="text"
                id="title"
                placeholder="Enter a title that will also be the alt text"
                value={title}
                onChange={(e)=>{setTitle(e.target.value);setIsEdited(true)}}
              />
            </section>

            <section className="upload-caption">
              <label htmlFor="caption">Edit Caption</label>
              <textarea
                type="text"
                id="caption"
                placeholder="Enter a caption for the image"
                value={caption}
                onChange={(e)=>{setCaption(e.target.value);setIsEdited(true)}}
              />
            </section>
          </section>

 
    {isLoading && <LoadingSpinner message={spinnerMessage}/>}
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </>
  );
};
