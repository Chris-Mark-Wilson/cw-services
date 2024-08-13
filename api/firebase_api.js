import {   get, set,ref as baseRef,child,remove } from 'firebase/database';
import {  ref as storeRef, listAll,uploadBytesResumable, getBlob,deleteObject,getBytes } from 'firebase/storage';
import {db,storage} from '../db/firebase_config';




//get a list of all image names in Storage
export const  getAllImagesByCategory = async (category) => {
// console.log(category)

    try {
     
        const imageData=[];
        const ref=baseRef(db, `categories/${category.id}`);
        const dbSnapShot = await get(ref);;
        // console.log('here')
        //return an object with image names as keys
        if(dbSnapShot.exists()){
             console.log('Images found');
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
   
        console.log("Document updated in database successfully");
        }

  catch (error) {
        console.log("Error updating image name ", error);
        return Promise.reject(error);
    }

}


// Adds a document to the "categories" collection
const storeImage = async (image) => {
    // console.log(image.file, image.name);
    try{
        const storageRef = storeRef(storage, `images/${image.name}`);
        const snapshot=await uploadBytesResumable(storageRef, image.file)
        // console.log("Snapshot: ", snapshot);
        // console.log("Reference: ", storageRef);
        console.log("Document successfully written!");
        return image.name;
    }
    catch(err){
        console.log(err);
        return Promise.reject('Error uploading image to storage');
    }
}


//uploads an image to storage and adds an image document to the database
export const uploadImage = async (categoryId,categoryName, file, imageObject) => { //Checks if category exists
  //Checks if the image name already exists 
  //If the image name does not exist, upload the image to storage and add a document to the database
  
  //define upload function
  const upload=async (categoryId, file, imageObject)=>{
  console.log('image does not exist, uploading image');
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
    console.log("Image uploaded to storage, document written to db");
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
        console.log("Document successfully written!");
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
        console.log('category exists');
        const snapShot=await get(child(baseRef(db), `categories/${categoryId}/${imageObject.name}`));
        if(snapShot.exists()){
            console.log('image exists');
            return Promise.reject('Image already exists');
        } else{
            upload(categoryId, file, imageObject);
        }
    }
    //if category doesnt exist
        else{
        console.log('category does not exist');
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
    // console.log("here");
    try {
        const snapshot = await get(baseRef(db, '/categoryList'));
        
        if (snapshot.exists()) {
        // console.log("Category data available");
        // console.log('Category snapshot: ',(snapshot.val()));
        const array=[];
        for(const  key in snapshot.val()){
            array.push({name:key, id:snapshot.val()[key]});
        }
            return array;
        
     } else {
            console.log("No Category data available");
            return [];
        }
       
    } catch (error) {
        console.log("Error getting categories ", error);
        return Promise.reject(error);
    }
};
export const deleteImage = async (category, imageName) => {
    try {
        let imageRef = storeRef(storage, `images/${category}/${imageName}`);
        await deleteObject(imageRef);
        console.log("Image deleted from storage successfully");
        imageRef=baseRef(db, `categories/${category}/${imageName}`);
        await remove(imageRef);
        console.log("Document deleted from database successfully");
       
    } catch (error) {
        console.log("Error deleting image ", error);
        return Promise.reject(error);
    }
};



export const updateCategoryName = async (oldName, newName) => {
    console.log('old name: ',oldName),'new name: ',newName;
    try {
        const oldRef = baseRef(db, `categoryList/${oldName}`);
        const newRef = baseRef(db, `categoryList/${newName}`);
        const docSnap = await get(oldRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.val());
            const data = docSnap.val();
            await set(newRef, data);
            await remove(oldRef);
            console.log('newName:',newName)
            return {name:newName,id:data};
        }
    } catch (error) {
        console.log("Error updating category name ", error);
        return Promise.reject(error);
    }
}