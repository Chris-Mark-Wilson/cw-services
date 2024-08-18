
import {useEffect, useContext,useState } from "react";
import { UserContext } from "../context/UserContext";
import { GoogleSignIn } from "../components/GoogleSignIn";
import { EmailSignIn } from "../components/EmailSignIn";
import { useNavigate } from "react-router-dom";
import '../css_files/sign_in.css'
export const SignIn =() => {
    const navigate = useNavigate();

    const {user} = useContext(UserContext);
    const [isSignedIn,setIsSignedIn]=useState(false);

    useEffect(()=>{
        if(user){
 setIsSignedIn(true);
    }
},[user]);


return (
    <div className="sign-in-page">
       {!isSignedIn ? <div className='sign-in-container'>
    <div className="sign-in">
       <EmailSignIn/>
       
        <GoogleSignIn/>
    </div>
    </div>
    :
    <div className="sign-in">
        <h3>You are signed in as {user.displayName}</h3>
        <button onClick={()=>navigate('/')} className="btn btn-primary">Go to Home</button>
    </div>
}
</div>
)


}