


import { GoogleSignIn } from "./GoogleSignIn";
import { EmailSignIn } from "./EmailSignIn";
import '../css_files/sign_in.css'
export const SignIn =() => {


return (
    <div className="sign-in-page">
        <div className='sign-in-container'>
    <div className="sign-in">
       <EmailSignIn/>
       
        <GoogleSignIn/>
    </div>
    </div>
    </div>
)


}