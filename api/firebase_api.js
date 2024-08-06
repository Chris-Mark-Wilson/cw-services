import {   get, set,ref as baseRef,child } from 'firebase/database';
import {  ref as storeRef, listAll,uploadBytesResumable } from 'firebase/storage';
import {db,storage} from '../db/firebase_config';



// Takes a folder in the storage bucket and returns an array of references to the images in that folder
// export const getUrlList = async (folder) => {
//     try {
//         const listRef = ref(storage, `${folder}`);
//         const refs = await listAll(listRef);
//         return refs.items; // array
//     } catch (error) {
//         console.log(error);
//     }
// };

// Adds a document to the "categories" collection
const storeImage = async (image) => {
    console.log(image.file, image.name);
    try{
        const storageRef = storeRef(storage, `images/${image.name}`);
        const snapshot=await uploadBytesResumable(storageRef, image.file)
        console.log("Snapshot: ", snapshot);
        console.log("Reference: ", storageRef);
        console.log("Document successfully written!");
        return storageRef;
    }
    catch(err){
        console.log(err);
    }
}



export const uploadImage = async (categoryName,file, imageObject) => {
    //check if the image name already exists
     
    try {
   let docref='https://test-url';    
   docref=await storeImage({name:imageObject.name,file:file})
console.log(docref)
    const doc={title:imageObject.title,caption:imageObject.caption,url:`images/${imageObject.name}`};
        await set(baseRef(db, `categories/${categoryName}/${imageObject.name}}`), doc);
        console.log("Document successfully written!");
        
    } catch (error) {
        console.error("Error adding document: ", error);
    }
};



// Retrieves all documents from the "categories" collection
export const getAllCategories = async () => {
    console.log("here");
    try {
        const snapshot = await get(baseRef(db, '/categories'));
        
        if (snapshot.exists()) {
            // console.log(Object.keys(snapshot.val())+', '+typeof(snapshot))
            // console.dir(Object.values(snapshot.val())+', '+typeof(snapshot))
            if(snapshot.val().categories!==""){
                // Object.keys(snapshot.val()).forEach((key) => {
                //     console.dir(key);
                // })
                console.log("snapshot.val():", snapshot.val());
            return snapshot.val();
        }
     } else {
            console.log("No data available");
            return [];
        }
       
    } catch (error) {
        console.log("Error getting documents: ", error);
        return Promise.reject(error);
    }
};

// Adds a user document (implementation needed)
export const addUser = async (user) => {
    try {
        // Your addUser implementation
    } catch (error) {
        console.error("Error adding user: ", error);
    }
};