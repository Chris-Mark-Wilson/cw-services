
import {useEffect, useContext,useState } from "react";
import { UserContext } from "../context/UserContext";
import { GoogleSignIn } from "../components/GoogleSignIn";
import { EmailSignIn } from "../components/EmailSignIn";
import { useNavigate } from "react-router-dom";
import '../css_files/sign_in.css'
import {auth} from '../../db/firebase_config';
import { signInWithEmailAndPassword,sendEmailVerification,deleteUser, reauthenticateWithCredential } from "firebase/auth";
export const SignIn =() => {
    const navigate = useNavigate();

    const {user} = useContext(UserContext);
    const [isSignedIn,setIsSignedIn]=useState(false);

    useEffect(()=>{
        if(user){
            console.log('user:',user);
 setIsSignedIn(true);
 if(user.emailVerified){
     navigate('/');

    }
}
console.log('user: ',user)
},[user]);



return (
    <div className="sign-in-page">
      <div className='sign-in-container'>
    <div className="sign-in">
       <EmailSignIn/>
       
        {!user &&
        <GoogleSignIn/>
}
    </div>
    </div>
  
  

</div>
)


}