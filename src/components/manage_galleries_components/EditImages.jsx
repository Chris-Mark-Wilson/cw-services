import { useState, useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { getImageNamesByCategory } from "../../../api/firebase_api";
import { getImageByImageName } from "../../../api/firebase_api";
import { getImageDataByImageName } from "../../../api/firebase_api";
import { uploadImage } from "../../../api/firebase_api";
import { deleteImage } from "../../../api/firebase_api";
import { set } from "firebase/database";

export const EditImages = ({ selectedCategory,reload,setReload }) => {
  const [imageList, setImageList] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedImageUrl, setSelectedImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [isEdited, setIsEdited] = useState(false);


  useEffect(() => {

    if (selectedCategory !== "None Selected") {
      // get the images from the selected category
      getImageNamesByCategory(selectedCategory)
        .then((names) => {
          console.log("here");
          setImageList(names);
          if (names.length > 0){
            
          setSelectedImage((prev)=>prev==""?names[0]:selectedImage);
          }
        })
        .catch((error) => {
          console.log(error);
        });

      if (selectedImage !== "") {
        console.log("selected image:", selectedImage);
        getImageByImageName(selectedCategory, selectedImage)
          .then((image) => {
            setSelectedImageUrl(image);
          })
          .catch((error) => {
            console.log(error);
          });
       
          getImageDataByImageName(selectedCategory, selectedImage)
          .then((imageData) => {
              console.log(imageData)
              setTitle(imageData.title);
              setCaption(imageData.caption);
          })
          .catch((error) => {
              console.log(error);
          });
      }
    }
  }, [selectedCategory, selectedImage,reload]);

  

  const deleteSelectedImage = () => {
alert('Are you sure you want to delete this image?');
deleteImage(selectedCategory,selectedImage)
.then((response)=>{
setSelectedImage('');
setTitle('');
setCaption('');
setSelectedImageUrl('');
setReload((prev)=>!prev);
});
  };

  const saveSelectedImage = () => {
    if(selectedCategory==='None Selected'){
       alert('Please select a category'); 
       return;
      }

    if((selectedImage!=="No images to show")){
uploadImage(selectedCategory,selectedImageUrl,{title:title,caption:caption,name:selectedImage})
.then((response)=>{
  console.log('Saved file:',response);
  setSelectedImage('');
  setReload((prev)=>!prev);
  setIsEdited(false);
  });
}else{alert('No image selected')}
};

  return (
    <Accordion>
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
                  onChange={(e) => {setSelectedImage(e.target.value)}}
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
              {selectedImage!= '' && <button onClick={deleteSelectedImage}>Delete Image</button>}
              {isEdited && <button onClick={saveSelectedImage}>Save Image</button>}
            </div>

            <section className="upload-title">
              <label htmlFor="title">Title / Alt</label>
              <textarea
                type="text"
                id="title"
                placeholder="Enter a title that will also be the alt text"
                value={title}
                onChange={(e)=>{setTitle(e.target.value);setIsEdited(true)}}
              />
            </section>

            <section className="upload-caption">
              <label htmlFor="caption">Caption</label>
              <textarea
                type="text"
                id="caption"
                placeholder="Enter a caption for the image"
                value={caption}
                onChange={(e)=>{setCaption(e.target.value);setIsEdited(true)}}
              />
            </section>
          </section>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
