import { useParams , useLocation} from "react-router-dom"
import { getAllImagesByCategory } from "../../api/firebase_api";
import { useEffect,useState } from "react";

export const Gallery=()=>{

const location=useLocation();
const {id,name}=location.state;
const [images,setImages]=useState([]);
const [selectedImage,setSelectedImage]=useState(null);

useEffect(()=>{
    const getImages=async()=>{
        try{
            const images=await getAllImagesByCategory({id:id,name:name});
            console.log(images);
            setImages(images);
            setSelectedImage(null)
        }
        catch(error){
            console.log(error);
        }
    }
    getImages();
},[id,name]);

const capitalise=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
}

const handleSelect=(e)=>{
    setSelectedImage(e.target.src);
}

    return(
        <div >
        
            <h1>{capitalise(name)}</h1>
            <div className="gallery">
                {images.length>0?images.map((image,index)=>(
                    <img key={index}
                     src={image.url}
                     alt={image.caption}
                     onClick={(e)=>handleSelect(e)} />
                )):<p>No images found</p>}
            </div>

            {selectedImage &&
            <> 
            <div  className="image-container">
                <div className="close"
                onClick={()=>setSelectedImage(null)}>
                    <p>X</p>
                </div>
            <div className="title">
                    <p>title{images.find((image)=>image.url===selectedImage).title}</p>
                </div>
                <img  src={selectedImage} alt="selected" />
                <div className="caption">
                    <p>caption{images.find((image)=>image.url===selectedImage).caption}</p>
                </div>
            </div>
              {/* <div className="caption">
              <p>awsdasdasd{images.find((image)=>image.url===selectedImage).caption}</p>
          </div> */}
          </>}


        </div>
    )
}