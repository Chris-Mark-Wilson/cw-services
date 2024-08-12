import { useState } from "react";
import { uploadImage } from "../../../api/firebase_api";
import { LoadingSpinner } from "./LoadingSpinner";
export const SelectFile=({selectedCategory,setSelectedImage,setReload})=>{

  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");
  const [title, setTitle] = useState("");
  const [fileName, setFileName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [spinnerMessage, setSpinnerMessage] = useState("");
  
  const handleFileChange=(event)=>{
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      
      // setFile(URL.createObjectURL(selectedFile));
      setFile(selectedFile)
    }
    
  }


  const handleUpload=(e)=>{
    e.preventDefault();
    if(selectedCategory===''){
      alert('Please select a category or create a new one');
      return;
    }
    // if(title===''||caption===''){
    //   alert('Please enter a title and caption');
    //   return}//reset the selected image
    if(file===null){
      alert('Please select an image file');
      return;
    }
    if(fileName===''){
      alert('Please enter a file name');
      return
    }
    //set the loading spinner
    setSpinnerMessage('Uploading Image...');
    setIsLoading(true);
    uploadImage(selectedCategory,file,{title:title,caption:caption,name:fileName,comments:[]})
    .then((response)=>{
      console.log('uploaded file:',response);
     document.getElementById('file').value='';
        setFile(null);
        setCaption('');
        setTitle('');
        setFileName('');
        setIsLoading(false);
      //trigger a refresh of the image list
    setReload((prev)=>!prev);

    })
    .catch((error)=>{
      console.log('Upload error: ',error);
      setIsLoading(false);
    })
  }
    return (<>
          {isLoading && <LoadingSpinner message={spinnerMessage} />}
    
        <section className="upload-new-file">
          <h5>Upload a new image</h5>
          <p>Selected category: {selectedCategory}</p>
          <p>File name: {fileName}</p>
          <section className="upload-select-file">
            <div className='upload-file-select'>
            <label htmlFor="file">Choose an image</label>
            <input
              type="file"
              id="file"
              name='file'
              className="inputfile"
              onChange={handleFileChange}
              accept={'image/*'}
            
            />
            </div>
     
            {file && <img src={URL.createObjectURL(file)} alt='selected file' className='file-image' />}
          
          </section>
          <input type='text' placeholder='Enter a file name' onChange={(e)=>setFileName(e.target.value)} value={fileName}/>

          
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
            </>
    
    );
}