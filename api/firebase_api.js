import {   get, set,ref as baseRef,child,remove } from 'firebase/database';
import {  ref as storeRef,uploadBytesResumable, getBlob,deleteObject} from 'firebase/storage';
import {db,storage} from '../db/firebase_config';


export const getCounter = async () => {
    try {
        const ref = baseRef(db, 'counter');
        const snapshot=await get(ref);
        if(snapshot.exists()){
            return snapshot.val();
        }
        else{
            return 0;
        }
    }
    catch (error) {
        return Promise.reject(error);
    }
}

export const incCounter = async () => {
    try {
        const ref = baseRef(db, 'counter');
        const snapshot=await get(ref);
        if(snapshot.exists()){
           
        await set(ref, snapshot.val()+1);
        return snapshot.val()+1;
        }else{
            await set(ref, 1);
            return 1;
        }
    } catch (error) {
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
        console.log('here')
        //return an object with image names as keys
        if(dbSnapShot.exists()){
    
        const images = Object.keys(dbSnapShot.val());
        const values = Object.values(dbSnapShot.val());

        const imageDataPromises = images.map(async (image, index) => {
          try {
            const imageId = values[index].imageId;
            console.log('imageId:', imageId);
            const imageRef = storeRef(storage, `images/${imageId}`);
            const imageBlob = await getBlob(imageRef);
            
            return {
              name: image,
              caption: values[index].caption,
              title: values[index].title,
              imageId: imageId,
              url: URL.createObjectURL(imageBlob),
            };
          } catch (error) {
            console.log(`Error retrieving image ${image}:`, error);
            // Return object with default image when an image can't be retrieved
            return {
              name: image,
              caption: values[index].caption || 'No caption available',
              title: values[index].title || 'Image not found',
              imageId: 'default',
              url: '/path/to/default/image.jpg', // Replace with actual path to your default image
              error: true
            };
          }
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
      
        return Promise.reject(error);
    }

}





//uploads an image to storage and adds an image document to the database
export const uploadImage = async (categoryId,categoryName, file, imageObject,overWrite=false) => { //Checks if category exists
  //Checks if the image name already exists 
  //If the image name does not exist, upload the image to storage and add a document to the database
  
  //define upload function
  const upload=async (categoryId, file, imageObject)=>{
    let imageId = '';
    let snapShot;
    //if overWrite is false, create a new imageId
    //this is sharing the upload with edit image
    //if the image already exists and the title or caption has been changed, the imageId will be the same
    //so no need to restore the image
    //just update the document
  if(!overWrite){ 
    imageId= await storeImage({  
      imageId: new Date().getTime(),
      file: file
    })
} else{
      snapShot=await get(child(baseRef(db), `categories/${categoryId}/${imageObject.name}`));
    if(snapShot.exists()){

      imageId=snapShot.val().imageId;
    }

}
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
   
    try{
        const storageRef = storeRef(storage, `images/${image.imageId}`);
        const snapshot=await uploadBytesResumable(storageRef, image.file)
    
       
        return image.imageId;
    }
    catch(err){
 
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
        if(overWrite){ 
        
            upload(categoryId, file, imageObject);
        } else{
            return Promise.reject('Image already exists');
        }
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
 
    return Promise.reject(error);
  }
};



// Retrieves all documents from the "categories" collection
export const getAllCategories = async () => {
//   console.log('getallcaategories fired');
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
        return true;
    } catch (error) {
      
        return Promise.reject(error);
    }
}