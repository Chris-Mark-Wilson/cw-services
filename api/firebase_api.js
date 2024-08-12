import {   get, set,ref as baseRef,child,remove } from 'firebase/database';
import {  ref as storeRef, listAll,uploadBytesResumable, getBlob,deleteObject,getBytes } from 'firebase/storage';
import {db,storage} from '../db/firebase_config';



// Takes a folder in the storage bucket and returns an array of references to the images in that folder
export const getUrlList = async (folder) => {
    try {
        const listRef = storeRef(storage, `${folder}`);
        const refs = await listAll(listRef);
        return refs.items; // array
    } catch (error) {
        console.log(error);
    }
};

//get image from storage
export const getImageByImageName = async (category, imageName) => {
    try {
        const imageRef = storeRef(storage, `images/${imageName}`);
        const image = await getBlob(imageRef);
        // console.log(image)
        return image;
    } catch (error) {
        console.log(error);
    }
}

//get image data from db
export const getImageDataByImageName = async (category, imageName) => {
    try {
       const dbRef=baseRef(db);
        const docSnap = await get(child(dbRef, `categories/${category}/${imageName}`));
        // console.log(docSnap)
        if (docSnap) {
            // console.log("Document data:", docSnap.val());
            return docSnap.val();
        } else {
            // console.log("No such document!");
            return Promise.reject("No such document!");
        }
    } catch (error) {
        console.log("Error getting document:", error);
        return Promise.reject(error);
    }
}

//get a list of all image names in Storage
export const getAllImagesByCategory = async (category) => {
    console.log('category:',category);
    try {
        const imageData=[];
        const ref=baseRef(db, `categories/${category}`);
        const dbSnapShot = await get(ref);;
        // console.log('here')
        //return an object with image names as keys
        if(dbSnapShot.exists()){
                   console.log('dbSnapShot:', dbSnapShot.val());
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
        
        const imageData = await Promise.all(imageDataPromises);
        
        console.dir('Images:', imageData);
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
export const updateImageName = async (category, oldName, newName) => {
    try {
       let oldRef = storeRef(storage, `images/${category}/${oldName}`);
      
       
        let newRef = storeRef(storage, `images/${category}/${newName}`);
       
        
        const fileBuffer = await getBlob(oldRef);
        await storeImage({file:fileBuffer,category:category, name: newName});
        await deleteObject(oldRef);

       
        console.log("Image name updated in storage successfully");

         oldRef = baseRef(db, `categories/${category}/${oldName}`);
         newRef = baseRef(db, `categories/${category}/${newName}`);
        const docSnap = await get(oldRef);
        if (docSnap.exists()) {
            const newUrl = `images/${category}/${newName}`;
            //change the url in the document
            await set(newRef, {...docSnap.val(), url: newUrl});
            await remove(oldRef);


   
        console.log("Document updated in database successfully");
        }
    } catch (error) {
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
        console.log("Snapshot: ", snapshot);
        console.log("Reference: ", storageRef);
        console.log("Document successfully written!");
        return image.name;
    }
    catch(err){
        console.log(err);
        return Promise.reject('Error uploading image to storage');
    }
}


//uploads an image to storage and adds an image document to the database
export const uploadImage = async (category, file, imageObject) => { //Checks if category exists
  //Checks if the image name already exists 
  //If the image name does not exist, upload the image to storage and add a document to the database
  
  //define upload function
  const upload=async (category, file, imageObject)=>{
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
      baseRef(db, `categories/${category}/${imageObject.name.trim()}`),
      doc
    );
    console.log("Image uploaded to storage, document written to db");
    return true;
  }

  try {
    const categories=await getAllCategories();
    //if category exists
    if(categories.includes(category)){
        console.log('category exists');
        const snapShot=await get(child(baseRef(db), `categories/${category}/${imageObject.name}`));
        if(snapShot.exists()){
            console.log('image exists');
            return Promise.reject('Image already exists');
        } else{
            upload(category, file, imageObject);
        }
    }
    //if category doesnt exist
        else{
        console.log('category does not exist');
        //add category to categoryList in db
        const ref=baseRef(db, `categoryList/${categories.length}`);
        await set(ref, category);
        //upload imgage
        upload(category, file, imageObject);
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
        console.log("Category data available");
            return Array.from(Object.values(snapshot.val()));
        
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

// Adds a user document (implementation needed)
export const addUser = async (user) => {
    try {
        // Your addUser implementation
    } catch (error) {
        console.error("Error adding user: ", error);
    }
};

export const updateCategoryName = async (oldName, newName) => {
    try {
        const oldRef = baseRef(db, `categories/${oldName}`);
        const newRef = baseRef(db, `categories/${newName}`);
        const docSnap = await get(oldRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.val());
            // await set(newRef, docSnap.val());
            // await remove(oldRef);
            console.log("Category updated in database successfully");
        }
        return 'woo!';
    } catch (error) {
        console.log("Error updating category name ", error);
        return Promise.reject(error);
    }
}