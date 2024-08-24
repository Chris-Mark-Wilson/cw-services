import { createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
    updateProfile,
    reauthenticateWithCredential,
     updatePassword,
     EmailAuthProvider,
     deleteUser,
     sendEmailVerification
 } from 'firebase/auth';
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { auth } from '../db/firebase_config';
import { storage } from '../db/firebase_config';
import { getDownloadURL } from 'firebase/storage';

import { getFunctions,httpsCallable } from 'firebase/functions';

import {ref as storeRef,uploadBytesResumable,deleteObject} from 'firebase/storage';

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
    ,credentials
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

export const deleteMember = async (user) => {

  //this function needs to iterate through all the user's data and delete it
  // before deleting the user account
  //Do not allow admin to delete if there are no other users
    try {
      if(user.isAdmin){
        const users=await listAllUsers();
        if(users.length>1){
          const adminCount=users.filter((registeredUser)=>registeredUser.customClaims && registeredUser.customClaims.admin).length;
          if(adminCount===1){
            return Promise.reject({code:'auth/last-admin'});
        }  
      }
    }
      console.log(user);
      if(user.photoURL!=='/images/user.png' && user.photoURL.startsWith('profile-pics/')){
        const storageRef=storeRef(storage,(user.photoURL));
        await deleteObject(storageRef);
        console.log('profile pic deleted');
      }
        await deleteUser(user);

        return true;
    } catch (error) {
        console.log(error);
        return Promise.reject(error);
    }
}
export const sendVerificationEmail=async (user)=>{
  try{
    await sendEmailVerification(user);
    return true;
  }
  catch(error){
    console.error(error);
    return Promise.reject(error);
  }
}




export const reAuthenticate=async (user)=>{
  try{
    const credential = EmailAuthProvider.credential(user.email, user.password);
    console.log('and the created credential from credential.user is... ',credential);
    await reauthenticateWithCredential(user, credential);
    return true;
  }
  catch(error){
    console.error(error);
    return Promise.reject(error);
  }
}