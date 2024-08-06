import { useState } from "react";
import { uploadImage } from "../../../api/firebase_api";
export const SelectFile=({file,setFile,title,setTitle,caption,setCaption,selectedCategory})=>{

  const [progress,setProgress]=useState(0);
  
  const handleFileChange=(event)=>{
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      
      // setFile(URL.createObjectURL(selectedFile));
      setFile(selectedFile)
    }
    
  }


  const handleUpload=(e)=>{
    e.preventDefault();
    if(selectedCategory==='None Selected'){
      alert('Please select a category or create a new one');
      return;
    }
    if(title===''||caption===''){
      alert('Please enter a title and caption');
      return}
    if(file===null){
      alert('Please select an image file');
      return;
    }
    alert('Uploading the file');
    uploadImage(selectedCategory,file,{title:title,caption:caption,name:'placeholdername'});
  }
    return (
    
        <section className="upload-new-file">
          <h5>Upload a new image</h5>
          <p>Selected category:{selectedCategory}</p>
          <section className="upload-select-file">
            <div className='upload-file-select'>
            <label htmlFor="file">Choose an image</label>
            <input
              type="file"
              id="file"
              className="inputfile"
              onChange={handleFileChange}
              accept={'image/*'}
            />
            </div>
     
            {file && <img src={file} alt='selected file' className='file-image' />}
          
          </section>

          
        <section className="upload-title">
            <label htmlFor="title">Title / Alt</label>
            <textarea
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter a title that will also be the alt text"
            />
          </section>

          <section className="upload-caption">
          <label htmlFor="caption">Caption</label>
          <textarea
            type="text"
            id="caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Enter a caption for the image"
            />
        </section>
        <button type='submit' id='upload-button' onClick={handleUpload}>Upload</button>

  

   
            </section>
     
    );
}