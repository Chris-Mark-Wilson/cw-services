import { useState,useEffect } from "react"
import { signUp } from "../../api/firebase_api";
import { getAuth } from "firebase/auth";
import * as firebaseui from 'firebaseui';
import firebase from "firebase/compat/app";
import { app } from "../../db/firebase_config";
import 'firebaseui/dist/firebaseui.css';
import '../css_files/App.css';
export const SignIn =() => {

useEffect(()=>{
    const ui = new firebaseui.auth.AuthUI(getAuth(app));
    ui.start('#firebaseui-auth-container', {
        signInOptions: [
          {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: true
          },
          {
            provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,client_id:"561552733227-jajrp1r0l2pvb9tt3nftjb24gp7pe6tn.apps.googleusercontent.com",
            scopes: [
              'https://www.googleapis.com/auth/contacts.readonly'
            ],
            customParameters: {
              // Forces account selection even when one account
              // is available.
              prompt: 'select_account'
            }
          }
        ],
        signInSuccessUrl: '/home',
        credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
        // callbacks: {
        //   signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        //     // User successfully signed in.
        //     // Return type determines whether we continue the redirect automatically
        //     // or whether we leave that to developer to handle.
        //     return true;
        //   },
        //   uiShown: function() {
        //     // The widget is rendered.
        //     // Hide the loader.
        //     document.getElementById('loader').style.display = 'none';
        //   }
        // },
        // // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        // signInFlow: 'popup'
      });
},[])


return (
    <div id="firebaseui-auth-container"></div>
)



    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     signUp(email, password)
    //     .then((response) => {
    //         console.log(JSON.stringify(response,null,1));
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
       
    // }

// return (
//     <div className="sign-in">
//         <h2>I already have an account</h2>
//         <span>Sign in with your email and password</span>

//         <form>
//             <input 
//             name="email" 
//             type="email" 
//             value={email} 
//             onChange={(e) => setEmail(e.target.value)}
//             required 
//             />
//             <label>Email</label>
//             <input 
//             name="password" 
//             type="password" 
//             value={password} 
//             onChange={(e) => setPassword(e.target.value)}
//             required 
//             />
//             <label>Password</label>
//             <button type="submit" onClick={handleSubmit}>Submit</button>
//         </form>
//     </div>
// )


}