import {useEffect,useState} from "react";
import {Categories} from './upload_components/Categories';
import {SelectFile} from './upload_components/SelectFile';
import { Modal } from "./upload_components/Modal";
import '../css_files/upload.css'

export const UploadImage = () => {
const [file,setFile]=useState('');
const [caption,setCaption]=useState('');
const [progress,setProgress]=useState(0);
const [newCategory,setNewCategory]=useState('');
const [selectedCategory,setSelectedCategory]=useState('None Selected');
const [categoryList,setCategoryList]=useState([{id:0,name:'test0'},{id:1,name:'test1'},{id:2,name:'test2'},{id:3,name:'test3'}]);
const [title,setTitle]=useState('');










return (
  <section className="upload-page">
    <h5>Upload Image</h5>
    <Categories
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      categoryList={categoryList}
      setCategoryList={setCategoryList}
      newCategory={newCategory}
      setNewCategory={setNewCategory}
    />
    <SelectFile
      file={file}
      setFile={setFile}
      title={title}
      setTitle={setTitle}
      caption={caption}
      setCaption={setCaption}
    />
  </section>
);
    
}
