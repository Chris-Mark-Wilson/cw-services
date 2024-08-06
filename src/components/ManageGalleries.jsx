import {useEffect,useState} from "react";
import {Categories} from './manage_galleries_components/Categories';
import {SelectFile} from './manage_galleries_components/SelectFile';
import { EditImages } from "./manage_galleries_components/EditImages";
import { Modal } from "./manage_galleries_components/Modal";
import '../css_files/upload.css'

export const ManageGalleries = () => {




const [selectedCategory,setSelectedCategory]=useState('');
const [reload,setReload]=useState(false);











return (
  <section className="upload-page">
    <h5>Manage Galleries</h5>
    <Categories
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
    />
    <EditImages selectedCategory={selectedCategory} reload={reload} setReload={setReload}/>

    <SelectFile
     
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
   
      setReload={setReload}
    />

    
  </section>
);
    
}
