import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { auth } from '../db/firebase_config';

import { getFunctions,httpsCallable } from 'firebase/functions';

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