import { useState,useContext } from "react";
import { uploadProfilePic } from '../../api/firebaseAuth';
import { UserContext } from '../context/UserContext';

export const UpdateProfile = () => {


    const {user} = useContext(UserContext);
    const [profileImageURL,setProfileImageURL]=useState('');


    const [oldPassword,setOldPassword]=useState('');  
    const [passwordError,setPasswordError]=useState('');
    const [newPassword,setNewPassword]=useState('');
    const [newImage,setNewImage]=useState('');
    const [passwordInputType,setPasswordInputType] =useState('password');

    const handleUpload= async()=>{
        try{
            const url = await uploadProfilePic(user,newImage);
            console.log('upload response:',url);
            setProfileImageURL(url);
        }catch(error){
            console.log('error uploading profile pic:',error);
        }
        
      
    }

    const showPassword = () => {
        if (passwordInputType === "password") {
          setPasswordInputType("text");
        } else {
          setPasswordInputType("password");
        }
        }

    return(


<section id="update-profile">
<h5>Update Profile Picture</h5>

<div id="upload-image" className="profile-item">
  <p>Change profile picture:</p>
  <input
    type="file"
    accept="image/*"
    name="updateImage"
    onChange={(e) => setNewImage(e.target.files[0])}
  />
</div>


  <div className="profile-item-upload">
    {newImage&&<><img src={URL.createObjectURL(newImage)} />
    <button onClick={handleUpload}>Upload</button></>}
  </div>


<div className="change-password">
  <div className="sign-in">
    <h5>Change Password</h5>
    <div className="password-input-group">
      <div className="password-input">
        <input
          name="password"
          type={passwordInputType}
          value={oldPassword}
          placeholder={"  Old Password"}
          autoComplete="old-password"
          onChange={(e) => setOldPassword(e.target.value)}
          required
        />
        <button
          className="password-eye"
          onClick={showPassword}
        >
          <img src="/images/passwordIcon.png" />
        </button>
      </div>

      {passwordError && (
        <p className="signin-error">{passwordError}</p>
      )}
    </div>

    <div className="password-input-group">
      <div className="password-input">
        <input
          name="password"
          type={passwordInputType}
          value={newPassword}
          placeholder={"  New Password"}
          autoComplete="new-password"
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button
          className="password-eye"
          onClick={showPassword}
        >
          <img src="/images/passwordIcon.png" />
        </button>
      </div>

      {passwordError && (
        <p className="signin-error">{passwordError}</p>
      )}

      <div className="profile-item">
        <button id="change">Change</button>
      </div>
    </div>
  </div>
</div>
</section>
    )
}