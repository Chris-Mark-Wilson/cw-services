import {   get, set,ref as baseRef,child,remove } from 'firebase/database';
import {  ref as storeRef, listAll,uploadBytesResumable, getBlob,deleteObject } from 'firebase/storage';
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

export const getImageByImageName = async (category, imageName) => {
    try {
        const imageRef = storeRef(storage, `images/${category}/${imageName}`);
        const image = await getBlob(imageRef);
        return image;
    } catch (error) {
        console.log(error);
    }
}

export const getImageDataByImageName = async (category, imageName) => {
    try {
       const dbRef=baseRef(db);
        const docSnap = await get(child(dbRef, `categories/${category}/${imageName}`));
        console.log(docSnap)
        if (docSnap) {
            console.log("Document data:", docSnap.val());
            return docSnap.val();
        } else {
            console.log("No such document!");
            return Promise.reject("No such document!");
        }
    } catch (error) {
        console.log("Error getting document:", error);
        return Promise.reject(error);
    }
}

//get a list of all image names in Storage
export const getImageNamesByCategory = async (category) => {
    try {
        const names=[];
        const refs = await getUrlList(`images/${category}`);
        console.log(refs);
        refs.forEach((ref) => {
            names.push(ref.name);
        });
        console.log(names)
        return names;
       
    } catch (error) {
        console.log(error);
        return Promise.reject(error);
    }
}

// Adds a document to the "categories" collection
const storeImage = async (image) => {
    console.log(image.file, image.name);
    try{
        const storageRef = storeRef(storage, `images/${image.categoryName}/${image.name}`);
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



export const uploadImage = async (categoryName, file, imageObject) => {
  //check if the image name already exists

  try {
    let docref = "https://test-url";

    docref = await storeImage({
      categoryName: categoryName,
      name: imageObject.name,
      file: file,
    });

    console.log(docref);
    const doc = {
      title: imageObject.title,
      caption: imageObject.caption,
      url: `images/${categoryName}/${imageObject.name}`,
    };

    await set(
      baseRef(db, `categories/${categoryName}/${imageObject.name}`),
      doc
    );
    console.log("Document successfully written!");
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
        const snapshot = await get(baseRef(db, '/categories'));
        
        if (snapshot.exists()) {
            // console.log(Object.keys(snapshot.val())+', '+typeof(snapshot))
            // console.dir(Object.values(snapshot.val())+', '+typeof(snapshot))
            if(snapshot.val().categories!==""){
                // Object.keys(snapshot.val()).forEach((key) => {
                //     console.dir(key);
                // })
                // console.log("snapshot.val():", snapshot.val());
            return snapshot.val();
        }
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