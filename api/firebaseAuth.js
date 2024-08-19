import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile,
  reauthenticateWithCredential, updatePassword,EmailAuthProvider
 } from 'firebase/auth';
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { auth } from '../db/firebase_config';
import { storage } from '../db/firebase_config';
import { getDownloadURL } from 'firebase/storage';

import { getFunctions,httpsCallable } from 'firebase/functions';

import {ref as storeRef,uploadBytesResumable} from 'firebase/storage';

export const signInWithEmail = async (email, password) => {
    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password);
        return credentials;
    } catch (error) {
        // console.log(error);
        return Promise.reject(error);
    }
}

export const signUpWithEmail = async (email, password) => {
  try {
    const credentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log('created user:'
    ,credentials.user.uid
    )
    await updateProfile(credentials.user, {
      displayName: email,
    });
    return credentials;
  } catch (error) {
    console.log("error", error);
    return Promise.reject(error);
  }
};

 export const signInWithGoogle = async () => {  
    try {
        const provider = new GoogleAuthProvider();
        const credentials = await signInWithPopup(auth, provider);
        return credentials;
    } catch (error) {
        // console.log(error);
        return Promise.reject(error);
    }
}

export const listAllUsers = async () => {
    const functions=getFunctions();
    const getUsers = httpsCallable(functions,'listUsers');
    try {
        const response = await getUsers();
        console.log(response.data);
        
        return response.data.users;
    } catch (error) {
        // console.log(error);
        return Promise.reject(error);
    }
}

export const setAdminClaim = async (uid) => {
    const functions = getFunctions();
    const setClaim = httpsCallable(functions,'setAdminClaim');
    try {
        const response = await setClaim({uid:uid});
        return response;
    } catch (error) {
        // console.log(error);
        return Promise.reject(error);
    }
}


export const uploadProfilePic=async (user,blob)=>{
    // ENSURE USER OBJECT IS VALID, NOT A SHALLOW COPY
  
    try{
        const imageId= Date.now();
        const storageRef = storeRef(storage, `profile-pics/${imageId}`);
        //store pic in storage
       await uploadBytesResumable(storageRef, blob)
        //get download url
       const url=await getDownloadURL(storageRef);
        //update user profile with photoURL
            await updateProfile(user, { photoURL: url });
            return url;
    
         return url;
  }
  catch(error){
    console.error(error);
    return Promise.reject(error);
  }
}

export const alterPassword = async (user,oldPassword,newPassword) => {
    try {
        const credential = EmailAuthProvider.credential(user.email, oldPassword);
        await reauthenticateWithCredential(user, credential);
        console.log('reauthenticated');
        await updatePassword(user, newPassword);
        console.log('password updated');
        return true;
    } catch (error) {
        console.log(error);
        return Promise.reject(error);
    }
}

export const alterDisplayName = async (user,newDisplayName) => {
    try {
        await updateProfile(user, { displayName: newDisplayName });
        return true;
    } catch (error) {
        console.log(error);
        return Promise.reject(error);
    }
}