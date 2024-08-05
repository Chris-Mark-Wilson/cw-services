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

    const uploadSelectedImage=()=>{

    }
    
    return (
        <section className='upload-images'>
            <h5>Edit Images</h5>
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
           {selectedImage&& <img src={selectedImage} alt='selected image'/>}
            </div>
        <button onClick={deleteSelectedImage}>Delete Image</button>
        <button onClick={uploadSelectedImage}>Save</button>
        </div>

        <section className="upload-title">
            <label htmlFor="title">Title / Alt</label>
            <textarea
              type="text"
              id="title"
              placeholder="Enter a title that will also be the alt text"
            />
          </section>

          <section className="upload-caption">
          <label htmlFor="caption">Caption</label>
          <textarea
            type="text"
            id="caption"
            placeholder="Enter a caption for the image"
            />
        </section>
        </section>
    )
}