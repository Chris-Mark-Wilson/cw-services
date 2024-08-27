import { useState,useEffect,useContext } from "react";

import "../css_files/profile.css";
import { UpdateProfile } from "../components/UpdateProfile";
import { ProfileDetails } from "../components/ProfileDetails";
import { useModal } from "../context/ModalContext";
import { deleteMember } from "../../api/firebaseAuth";
import { UserContext } from "../context/UserContext";

import { useNavigate } from "react-router-dom";

export const Profile = () => {

const {showModalDelete,showModalComplete} = useModal();

const {user}=useContext(UserContext);

const navigate=useNavigate();


useEffect(()=>{ 
if(user && !user.emailVerified){
  navigate('/signIn');
}
},[user])

const handleDelete= async()=>{
  showModalDelete('Delete Account','Are you sure you want to delete your account?',deleteAccount);

}

const deleteAccount=async()=>{  
  try{
    // delete account
  await deleteMember(user);
  console.log('account deleted')
  // redirect to home page
  showModalComplete('Account deleted','Your account has been deleted from out servers',()=>navigate('/'));
  }
  catch(error){
    switch (error.code) {
      case "auth/requires-recent-login":
        showModalComplete('Recent login required','Please sign in again to delete your account',()=>{signOut();navigate('/signIn')});
        break;
        case "auth/last-admin":
          showModalComplete('Error','You are the last admin. You cannot delete your account while other users who are not admins exist. Visit the admin page to delete other users or change their admin status');
          break;
      default:
        showModalComplete('Error',`An error occurred. ${error.code}, ${error.message}`);
        break;
    }
  }
 
}







  return (
    <div className="profile-page">
      <ProfileDetails />
      <details>
        <summary>Update Profile / Delete account</summary>
      <UpdateProfile />

      <button id="delete-account" onClick={handleDelete}>Delete Account</button>
    </details>
    </div>
  );
};
