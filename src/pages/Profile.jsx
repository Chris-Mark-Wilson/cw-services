import {useState,useEffect,useContext} from 'react';
import { UserContext } from '../context/UserContext';
import { uploadProfilePic } from '../../api/firebaseAuth';
import "../css_files/profile.css";

export const Profile = () => {

    const {user} = useContext(UserContext);


    const [profileImageURL,setProfileImageURL]=useState('');
    const [newImage,setNewImage]=useState('');

    useEffect(()=>{
        if(user && user.photoURL){
            setProfileImageURL(user.photoURL);
        }
        if(user){
            console.log(JSON.stringify(user.photoURL ,null,1));
            console.log(Object.keys(user));
    }
},[user]);

const handleUpload= async()=>{
    try{
        const url = await uploadProfilePic(user,newImage);
        console.log('upload response:',url);
        setProfileImageURL(url);
    }catch(error){
        console.log('error uploading profile pic:',error);
    }

  
}


        return (
          user && (
            <>
              {/* {JSON.stringify(user,null,1)} */}
              {/* {JSON.stringify(Object.keys(user),null,1)} */}
              <div className="profile-page">
                <section className="profile-details">
                  <h5>Profile</h5>
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

                <section className='update-profile'>
                <h5>Update Profile</h5>
      
                    <div className='profile-item'>
                <p>Upload profile image:</p>
                <input type='file' accept='image/*' name='updateImage'
               onChange={(e)=>setNewImage(e.target.files[0])}/></div>

                 {newImage && 
                    <div className='profile-item'>
                        <img src={URL.createObjectURL(newImage)}/>
                        <button onClick={handleUpload}>Upload</button>
                    </div>}

             
                    </section>
              </div>
            </>
          )
        );

}