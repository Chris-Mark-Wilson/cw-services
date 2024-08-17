import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { auth } from '../db/firebase_config';

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
    try{
    const credentials = await createUserWithEmailAndPassword(auth, email, password,);
    await updateProfile(credentials.user, {
        displayName: email,
    }
    )
    return credentials;
    } catch (error) {
    // console.log(error);
    return Promise.reject(error);
    }
}
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