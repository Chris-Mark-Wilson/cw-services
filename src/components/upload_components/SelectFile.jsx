import { useState } from "react";

export const SelectFile=({file,setFile})=>{

    const [progress,setProgress]=useState(0);

    const handleFileChange=(event)=>{
      const selectedFile = event.target.files[0];
      if (selectedFile) {
       
        setFile(URL.createObjectURL(selectedFile));
      }
        
     }
    return (
    
        <section className="upload-new-file">
          <h5>Upload a new image</h5>
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

  

   
            </section>
     
    );
}