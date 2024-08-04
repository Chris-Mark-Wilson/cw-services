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
          <section className="upload-select-file">
            <div className='upload-file-select'>
            <label htmlFor="file">Choose a file</label>
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
     
    );
}