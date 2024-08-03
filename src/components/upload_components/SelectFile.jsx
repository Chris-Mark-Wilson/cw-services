import { useState } from "react";

export const SelectFile=({file,setFile})=>{

    const [progress,setProgress]=useState(0);

    const handleFileChange=(event)=>{
        setFile((prev)=>event.target.files[0]);
        
     }
    return (
      <>
        <section className="upload-file">
          <section className="upload-select-file">
            <label htmlFor="file">Choose a file</label>
            <input
              type="file"
              id="file"
              className="inputfile"
              onChange={handleFileChange}
            />
          </section>

          <section className="upload-title">
            <label htmlFor="title">Title / Alt</label>
            <textarea
              type="text"
              id="title"
              placeholder="Enter a title that will also be the alt text"
            />
          </section>
        </section>

        <section className="upload-caption">
          <label htmlFor="caption">Caption</label>
          <textarea
            type="text"
            id="caption"
            placeholder="Enter a caption for the image"
          />
        </section>
      </>
    );
}