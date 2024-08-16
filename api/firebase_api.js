import {   get, set,ref as baseRef,child,remove } from 'firebase/database';
import {  ref as storeRef, listAll,uploadBytesResumable, getBlob,deleteObject,getBytes } from 'firebase/storage';
import {db,storage,auth} from '../db/firebase_config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";

export const signInWithEmail = async (email, password) => {
    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password);
        return credentials;
    } catch (error) {
        console.log(error);
        return Promise.reject(error);
    }
}

export const signUpWithEmail = async (email, password) => {
    try{
    const credentials = await createUserWithEmailAndPassword(auth, email, password,);
    return credentials;
    } catch (error) {
    console.log(error);
    return Promise.reject(error);
    }
}
 export const signInWithGoogle = async () => {  
    try {
        const provider = new GoogleAuthProvider();
        const credentials = await signInWithPopup(auth, provider);
        return credentials;
    } catch (error) {
        console.log(error);
        return Promise.reject(error);
    }
}

//get a list of all image names in Storage
export const  getAllImagesByCategory = async (category) => {
// console.log(category)
// console.log(JSON.stringify(db,null,1))
    try {
     
        const imageData=[];
        const ref=baseRef(db, `categories/${category.id}`);
        const dbSnapShot = await get(ref);;
        // console.log('here')
        //return an object with image names as keys
        if(dbSnapShot.exists()){
           
        const images = Object.keys(dbSnapShot.val());
        const values = Object.values(dbSnapShot.val());
        
        const imageDataPromises = images.map(async (image, index) => {
          const imageId = values[index].imageId;
          const imageRef = storeRef(storage, `images/${imageId}`);
          const imageBlob = await getBlob(imageRef);
        
          return {
            name: image,
            caption: values[index].caption,
            title: values[index].title,
            imageId: imageId,
            url: URL.createObjectURL(imageBlob),
          };
        });
        //wait for all the image objects
        const imageData = await Promise.all(imageDataPromises);
        
        // console.dir('Images:', imageData);
        return imageData;
            
        }
        else{
            console.log('No images found');
            return [];
        }

       
    } catch (error) {
        console.log(error);
        return Promise.reject(error);
    }
}

//update image name in storage and db
export const updateImageName = async (categoryId, oldName, newName) => {
    try {

       let oldRef = baseRef(db, `categories/${categoryId}/${oldName}`);

       const oldSnapShot = await get(oldRef);

        let newRef = baseRef(db, `categories/${categoryId}/${newName}`);
        
   
      
        //change the url in the document
        await set(newRef, {...oldSnapShot.val(), name: newName});
        await remove(oldRef);
   
      
        }

  catch (error) {
        console.log("Error updating image name ", error);
        return Promise.reject(error);
    }

}





//uploads an image to storage and adds an image document to the database
export const uploadImage = async (categoryId,categoryName, file, imageObject) => { //Checks if category exists
  //Checks if the image name already exists 
  //If the image name does not exist, upload the image to storage and add a document to the database
  
  //define upload function
  const upload=async (categoryId, file, imageObject)=>{

  let imageId = await storeImage({
  
      name: new Date().getTime(),
      file: file
    });
    const doc = {
      title: imageObject.title.trim(),
      caption: imageObject.caption.trim(),
      imageId: imageId
    };
    await set(
      baseRef(db, `categories/${categoryId}/${imageObject.name.trim()}`),
      doc
    );

    return true;
  }

  // define storeImage function
  // Adds a document to the "categories" collection
const storeImage = async (image) => {
    // console.log(image.file, image.name);
    try{
        const storageRef = storeRef(storage, `images/${image.name}`);
        const snapshot=await uploadBytesResumable(storageRef, image.file)
        // console.log("Snapshot: ", snapshot);
        // console.log("Reference: ", storageRef);
       
        return image.name;
    }
    catch(err){
        console.log(err);
        return Promise.reject('Error uploading image to storage');
    }
}

//upload image
  try {
    const categoriesArray=await getAllCategories();
    //if category exists
    if(categoriesArray.find(category=>category.name===categoryName)){
 
        const snapShot=await get(child(baseRef(db), `categories/${categoryId}/${imageObject.name}`));
        if(snapShot.exists()){
      
            return Promise.reject('Image already exists');
        } else{
            upload(categoryId, file, imageObject);
        }
    }
    //if category doesnt exist
        else{

        //add category to categoryList in db
        categoryId=Date.now();
        const ref=baseRef(db, `categoryList/${categoryName}`);
        await set(ref, categoryId);
        //upload imgage
        upload(categoryId, file, imageObject);
        }  

return true;

  } catch (error) {
    console.error("Error adding document: ", error);
    return Promise.reject(error);
  }
};



// Retrieves all documents from the "categories" collection
export const getAllCategories = async () => {
  
    try {
        const snapshot = await get(baseRef(db, '/categoryList'));
        
        if (snapshot.exists()) {
     
        const array=[];
        for(const  key in snapshot.val()){
            array.push({name:key, id:snapshot.val()[key]});
        }
            return array;
        
     } else {
    
            return [];
        }
       
    } catch (error) {
        console.log("Error getting categories ", error);
        return Promise.reject(error);
    }
};
export const deleteImage = async (categoryId, categoryName,image) => {
    // console.log('image name, url: ',image.name,image.imageId);
    const imageName = image.name;
    const imageId = image.imageId;
    try {
        //delete from storage
        let imageRef = storeRef(storage, `images/${imageId}`);
        await deleteObject(imageRef);
       

        //delete from database
        imageRef=baseRef(db, `categories/${categoryId}/${imageName}`);
        await remove(imageRef);
      

        //check category length and delete if empty
        const categoryRef=baseRef(db, `categories/${categoryId}`);
        const categorySnapshot=await get(categoryRef);
        
        if(!categorySnapshot.exists()){
        
            const categoryListRef=baseRef(db, `categoryList/${categoryName}`);
            await remove(categoryListRef);
        }
       return true;
    } catch (error) {
        console.log("Error deleting image ", error);
        return Promise.reject(error);
    }
};



export const updateCategoryName = async (oldName, newName) => {
  
    try {
        const oldRef = baseRef(db, `categoryList/${oldName}`);
        const newRef = baseRef(db, `categoryList/${newName}`);
        const docSnap = await get(oldRef);
        if (docSnap.exists()) {
     
            const data = docSnap.val();
            await set(newRef, data);
            await remove(oldRef);
         
            return {name:newName,id:data};
        }
    } catch (error) {
        console.log("Error updating category name ", error);
        return Promise.reject(error);
    }
}

export const deleteCategory = async (category) => {
    try {
        //delete all images in category from storage
        const ref=baseRef(db, `categories/${category.id}`);
        const categorySnapshot=await get(ref);
        if(categorySnapshot.exists()){
            const images=Object.keys(categorySnapshot.val());
            const imageValues=Object.values(categorySnapshot.val());
            const imagePromises=images.map(async (image,index)=>{
                const imageId=imageValues[index].imageId;
                const imageRef=storeRef(storage, `images/${imageId}`);
                await deleteObject(imageRef);
              
            });
            await Promise.all(imagePromises);
        
        }



        //delete category data from db
        const categoryRef=baseRef(db, `categories/${category.id}`);
        await remove(categoryRef);
 

        //delete category from categoryList in db;
        const listRef = baseRef(db, `categoryList/${category.name}`);
        await remove(listRef);
        console.log("Category deleted from categoryList successfully");       return true;
    } catch (error) {
        console.log("Error deleting category ", error);
        return Promise.reject(error);
    }
}