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
        const imageRef = storeRef(storage, `images/${category}/${imageName}`);
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
export const getImageNamesByCategory = async (category) => {
    try {
        const names=[];
        const refs = await getUrlList(`images/${category}`);

        refs.forEach((ref) => {
            names.push(ref.name);
        });
    
        return names;
       
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
        const storageRef = storeRef(storage, `images/${image.category}/${image.name}`);
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


//uploads an image to storage and adds an image document to the database
export const uploadImage = async (category, file, imageObject) => {
  //check if the image name already exists *****

  try {
    let docref = "https://test-url";

    docref = await storeImage({
      category: category,
      name: imageObject.name,
      file: file,
    });

    console.log(docref);
    const doc = {
      title: imageObject.title,
      caption: imageObject.caption,
      url: `images/${category}/${imageObject.name}`,
    };

    await set(
      baseRef(db, `categories/${category}/${imageObject.name}`),
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