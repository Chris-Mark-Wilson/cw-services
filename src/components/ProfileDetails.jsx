import { useState,useEffect,useContext } from 'react';

import { UserContext } from '../context/UserContext';



export const ProfileDetails = ({refresh}) => {
    const [profileImageURL,setProfileImageURL]=useState('');
const {user} = useContext(UserContext);


useEffect(()=>{
    if(user && user.photoURL){
        setProfileImageURL(user.photoURL);
        
    }
    if(user){
        console.log(JSON.stringify(user.providerData[0].providerId ,null,1));
        console.log(Object.keys(user));
}
},[user,refresh]);

return user && (

    <>
   
        <section className="profile-details">
          <h5>Profile Details</h5>
          <div className="profile-item">
            <p>Display name:</p>
            <p>
              {user.displayName != null ? user.displayName : "no user"}
            </p>
          </div>
          <div className="profile-item">
            <p>Email:</p>
            <p>
              {user.email}
              {"  "}
              {user.emailVerified ? "(verified) " : "(unverified) "}
            </p>
          </div>
          <div className="profile-item">
            {" "}
            <p>Member since:</p>
            <p>
              {" "}
              {new Date(+user.metadata.createdAt).toLocaleDateString()}
            </p>
          </div>
          <div className="profile-item">
            {" "}
            <p>Logged in since:</p>
            <p>
              {new Date(+user.metadata.lastLoginAt).toLocaleString()}
            </p>
          </div>
          <div className="profile-item">
            <p>Status:</p>
            <p> {user.isAdmin ? "Admin" : "Member"}</p>
          </div>
          <div className="profile-item">
            <p>Profile picture:</p>
            <p>
              <img src={profileImageURL} alt="profile image" />
            </p>
          </div>
        </section>
        </>
        )
    
    
}
