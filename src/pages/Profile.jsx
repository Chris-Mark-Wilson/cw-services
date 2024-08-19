import "../css_files/profile.css";
import { UpdateProfile } from "../components/UpdateProfile";
import { ProfileDetails } from "../components/ProfileDetails";

export const Profile = () => {
  return (
    <div className="profile-page">
      <ProfileDetails />
      <UpdateProfile />

      <button id="delete-account">Delete Account</button>
    </div>
  );
};
