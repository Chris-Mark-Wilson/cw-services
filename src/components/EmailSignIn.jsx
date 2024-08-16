import { useState } from "react";
import '../css_files/sign_in.css'

import { signUpWithEmail,signInWithEmail } from "../../api/firebase_api"
import { useNavigate } from "react-router-dom";

export const EmailSignIn=()=>{

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const createAccount = (e) => {
        e.preventDefault();
        signUpWithEmail(email, password)
        .then((response) => {
            console.log(JSON.stringify(response,null,1));
            return redirect ('./');
        })
        .catch((error) => {
            console.log(error);
        });
       
    }
    
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmail(email, password)
        .then((response) => {
            console.log(JSON.stringify(response,null,1));
           Navigate(-1);
        })
        .catch((error) => {
            console.log(error);
        });
       
    }

return (
<div className='email-sign-in'>
    <div className='sign-in'>
        <h4>Secure sign in <img src='/sign-in-logo.png'/></h4>
   <form>
    <input 
    name="email" 
    type="email" 
    value={email} 
    placeholder={'  Email'}
    onChange={(e) => setEmail(e.target.value)}
    required 
    />
 
    <input 
    name="password" 
    type="password" 
    value={password} 
    placeholder={'  Password'}
    autoComplete="on"
    onChange={(e) => setPassword(e.target.value)}
    required 
    />
  
    <div className='email-buttons'>
    <button onClick={createAccount}>Create Account</button>
    <button onClick={signIn}>Sign In</button>
    </div>
</form>
</div>


</div>
)

}