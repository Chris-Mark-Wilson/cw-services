import {useEffect,useState} from "react";
import {Categories} from './upload_components/Categories';
import {SelectFile} from './upload_components/SelectFile';
import { ImageList } from "./upload_components/ImageList";
import { Modal } from "./upload_components/Modal";
import '../css_files/upload.css'

export const ManageGalleries = () => {
const [file,setFile]=useState(null);
const [caption,setCaption]=useState('');



const [selectedCategory,setSelectedCategory]=useState('None Selected');

const [title,setTitle]=useState('');










return (
  <section className="upload-page">
    <h5>Manage Galleries</h5>
    <Categories
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
  
    />
    <ImageList selectedCategory={selectedCategory} />

    <SelectFile
      file={file}
      setFile={setFile}
      title={title}
      setTitle={setTitle}
      caption={caption}
      setCaption={setCaption}
      selectedCategory={selectedCategory}
    />

    
  </section>
);
    
}
