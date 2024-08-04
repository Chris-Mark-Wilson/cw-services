import { collection, addDoc, getDocs, query } from 'firebase/firestore';
import {  ref, listAll } from 'firebase/storage';
import {db,storage} from '../db/firebase';


// Takes a folder in the storage bucket and returns an array of references to the images in that folder
export const getUrlList = async (folder) => {
    try {
        const listRef = ref(storage, `${folder}`);
        const refs = await listAll(listRef);
        return refs.items; // array
    } catch (error) {
        console.log(error);
    }
};

// Adds a document to the "categories" collection
export const addDocument = async (categoryName, imageObject) => {
    try {
        const docRef = await addDoc(collection(db, "categories"), imageObject);
        console.log("Document successfully written!");
        return docRef.id;
    } catch (error) {
        console.error("Error adding document: ", error);
    }
};



// Retrieves all documents from the "categories" collection
export const getAllCategories = async () => {
    try {
        const q = query(collection(db, 'categories'));
        const querySnapshot = await getDocs(q);
        console.log(Object.keys(querySnapshot));
        console.log("docs => ",querySnapshot.docs);
    
        querySnapshot.forEach((doc) => {
            console.dir(`${doc.id} => ${doc.data()}`);
        });

        return querySnapshot.docs;
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