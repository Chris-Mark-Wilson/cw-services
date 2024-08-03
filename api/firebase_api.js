import {db,storage} from './firebase.js';
import { collection, getDocs } from "firebase/firestore";
import {ref, getDownloadURL ,listAll} from 'firebase/storage';

//usage for storage bucket

//takes a reference to an image in the storage bucket and returns the download url
export const getUrl =(ref) =>{

    return (getPictureDownloadURL(ref))
}

const getPictureDownloadURL= async(ref)=>{
    try{
    
    const url=await getDownloadURL(ref);
   
   return(url)
    }
    catch(error){
        console.log(error)
    }
    }


//takes a folder in the storage bucket and returns an array of references to the images in that folder
    //refs.items is an array of references
    export const getUrlList=async(folder)=>{
        try{
        const listRef=ref(storage,`${folder}`)
               
   const refs=await listAll(listRef)
       
          
       return     (refs.items) //array
      
    }
    catch(error){
        console.log(error)
    }
    }

// example usage for db

//
//
export const getAllUsers=async()=>{
    try{
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
} catch (error) {
    console.log("Error getting documents: ", error);
}
}

export const addUser=async(user)=>{
    try{
    const docRef = await addDoc(collection(db, "users"), user);
    console.log("Document successfully written!");
    return docRef.id
} catch (error) {
    console.error("Error adding document: ", error);
}
}