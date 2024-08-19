import { useState,useContext, useEffect } from "react";
import { uploadProfilePic } from '../../api/firebaseAuth';
import { UserContext } from '../context/UserContext';
import { alterPassword } from "../../api/firebaseAuth";
import { alterDisplayName } from "../../api/firebaseAuth";

export const UpdateProfile = () => {


    const {user} = useContext(UserContext);
   


    const [oldPassword,setOldPassword]=useState('');  
    const [oldPasswordError,setOldPasswordError]=useState('');
    const [newPasswordError,setNewPasswordError]=useState('');
    const [newPassword,setNewPassword]=useState('');
    const [newImage,setNewImage]=useState('');
    const [passwordInputType,setPasswordInputType] =useState('password');


    const [newDisplayName,setNewDisplayName]=useState('');  




    const handleUpload= async()=>{
        try{
            const url = await uploadProfilePic(user,newImage);
            console.log('upload response:',url);
       window.location.reload();

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

        const changePassword = async () => {
          try {
            await alterPassword(user, oldPassword, newPassword);
        window.location.reload();
          } catch (error) {
            //set errors here
            switch (error.code) {
              case "auth/weak-password":
                setNewPasswordError("New password too weak");
                break;
              case "auth/wrong-password":
                setOldPasswordError("Old password incorrect");
                break;
              case "auth/requires-recent-login":
                setOldPasswordError("Please reauthenticate");
                break;
              default:
                setOldPasswordError("An error occurred. Please try again");
                break;
            }
          }
        };


        const changeDisplayName = async () => { 
            console.log('changing display name');
            try{
                alterDisplayName(user,newDisplayName);
             window.location.reload();
            }
            catch(error){
                console.log('error changing display name:',error);
            }
        };

    return (
      user && (
        <section id="update-profile">
          <h5>Change Profile Picture</h5>

          <div id="upload-image" className="profile-item">
            <input
              type="file"
              accept="image/*"
            
              name="updateImage"
              onChange={(e) => setNewImage(e.target.files[0])}
            />
          </div>

          <div className="profile-item-upload">
            {newImage && (
              <>
                <img src={URL.createObjectURL(newImage)} />
                <button id='change'onClick={handleUpload}>Upload</button>
              </>
            )}
          </div>

          <h5>Change Display Name</h5>
          <div className="profile-item">
            <div className="change-password">
              <div className="sign-in">
                <div className="password-input-group">
                  <div className="password-input">
                    <input 
                    type="text" 
                    value={newDisplayName}
                    placeholder="New Display Name"
                    onChange={(e)=>setNewDisplayName(e.target.value)} 
                     />
                  </div>
                  <button id="change-name" onClick={changeDisplayName}>
                      Change
                    </button>
                </div>
              </div>
            </div>
          </div>

          {/* email sign in provider is not 'google.com' */}
          {user.providerData[0].providerId == "password" && (
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
                    <button className="password-eye" onClick={showPassword}>
                      <img src="/images/passwordIcon.png" />
                    </button>
                  </div>

                  {oldPasswordError && (
                    <p className="signin-error">{oldPasswordError}</p>
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
                    <button className="password-eye" onClick={showPassword}>
                      <img src="/images/passwordIcon.png" />
                    </button>
                  </div>

                  {newPasswordError && (
                    <p className="signin-error">{newPasswordError}</p>
                  )}

                  <div className="profile-item">
                    <button id="change" onClick={changePassword}>
                      Change
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      )
    );
}