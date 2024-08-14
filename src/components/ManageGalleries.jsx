import {useState} from "react";
import {Categories} from './manage_galleries_components/Categories';
import {UploadImage} from './manage_galleries_components/UploadImage';
import { EditImages } from "./manage_galleries_components/EditImages";

import '../css_files/manage_galleries.css'

export const ManageGalleries = () => {




const [selectedCategory,setSelectedCategory]=useState('');
const [reload,setReload]=useState(false);











return (
  <section className="upload-page">
    <h5>Manage Galleries</h5>
    <Categories
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      reload={reload}
      setReload={setReload}
    />
    <EditImages selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} reload={reload} setReload={setReload}/>

    <UploadImage
     
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
   
      setReload={setReload}
    />

    
  </section>
);
    
}
