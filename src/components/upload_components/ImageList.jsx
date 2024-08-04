import { useState,useEffect } from "react";

export const ImageList = ({selectedCategory}) => {
    const [imageList,setImageList]=useState([]);
    const [selectedImage,setSelectedImage]=useState('No images to show');
    
    useEffect(()=>{
        if(selectedCategory!=='No categories found'){
            // get the images from the selected category
        }
    },[selectedCategory]);
    
    const deleteSelectedImage=()=>{
        // alert this will delete the image
    }
    
    return (
        <section className='upload-images'>
            <h5>Images</h5>
            <div className='images-container'>
            <label>
          Select Image:
          <select
            name="image-list"
            
            onChange={(e) => setNewCategory(e.target.value)}
            value={selectedCategory}
          >
            <option value={selectedImage}>{selectedImage}</option>
            {imageList.map((image, index) => {
              return (
                <option key={image.id} value={image.url}>
                  {image.url}
                </option>
              );
            })}
          </select>
        </label>
        <div className='image-display'>
            <img src={selectedImage} alt='selected image'/>
            </div>
        <button onClick={deleteSelectedImage}>Delete Image</button>
        </div>
        </section>
    )
}