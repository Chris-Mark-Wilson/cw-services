import {useState,useEffect,useContext} from 'react';
import { UserContext } from '../context/UserContext';
import "../css_files/profile.css";

export const Profile = () => {

    const {user} = useContext(UserContext);
    console.log(JSON.stringify(user,null,1));

    const [profileImage,setProfileImage]=useState('');

    useEffect(()=>{
        if(user && user.photoURL){
            setProfileImage(user.photoURL);
        }
        if(user){
            console.log(JSON.stringify(user,null,1));
    }
},[user]);

    return (
        
        <> 
         {/* {JSON.stringify(user,null,1)} */}
         {/* {JSON.stringify(Object.keys(user),null,1)} */}

            <section className="profile-page">
            <h5>Profile</h5>
            <p>{user.displayName!=null?user.displayName:'no user'}</p>
            <p>{user.email}</p>
            <img src={profileImage} alt="profile image"/>
        </section>
        </>

    
 
    )

}