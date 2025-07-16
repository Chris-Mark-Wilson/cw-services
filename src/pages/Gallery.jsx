import { useLocation} from "react-router-dom"
import { getAllImagesByCategory } from "../../api/firebase_api";
import { useEffect,useState } from "react";
import '../css_files/App.css';
import { ClipLoader } from "react-spinners";
export const Gallery=()=>{

const location=useLocation();
const {id,name}=location.state;
const [images,setImages]=useState([]);
const [selectedImage,setSelectedImage]=useState(null);

useEffect(()=>{
    setImages([]);
    const getImages=async()=>{
        try{
            let images=await getAllImagesByCategory({id:id,name:name});
 
            images=images.sort((a,b)=>a.imageId-b.imageId);
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

    return (
        <div >

            <h1>{capitalise(name)}</h1>
            <div className="gallery">
                {images.length > 0
                    ?
                    images.map((image, index) => (
                        <div key={index} className='gallery-card'>
                            <>
                                <img
                                    src={image.url}
                                    alt={image.caption}
                                    title={'Click on image to expand'}
                                    onClick={(e) => handleSelect(e)} />
                                <p className='gallery-card-title'>
                                    {image.title ? image.title : 'No title'}
                                </p>
                                <div className='gallery-card-caption'>
                                    <p title={image.caption}>
                                        {image.caption}
                                    </p>
                                </div>
                            </>
                        </div>
                    ))
                    :
                    <div className="loader-container">
                        <p>Loading Images</p>
                        <ClipLoader
                            // color={color}
                            // loading={loading}
                            // cssOverride={override}
                            size={150}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div>

                }

            </div>

            {selectedImage &&
            <> 
            <div  className="image-container">
               
            <div className="image-title">
                    <h5>{images.find((image)=>image.url===selectedImage).title}</h5>
                </div>
                <div className="caption">
                    <p>{images.find((image)=>image.url===selectedImage).caption}</p>
                </div>
                <img  onClick={()=>setSelectedImage(null)} src={selectedImage} alt={images.find((image)=>image.url===selectedImage).caption} />
            </div>
          
          </>}


        </div>
    )
}