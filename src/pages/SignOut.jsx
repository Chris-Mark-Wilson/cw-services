import { useEffect,useContext } from "react";
import { auth } from "../../db/firebase_config"
import { signOut } from "firebase/auth"
import { useNavigate} from "react-router-dom";
import { setUserId } from "firebase/analytics";
import { UserContext } from "../context/UserContext";
export const SignOut = () => {
    const {setUser}=useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        const signOutUser = async () => {
        try {
            await signOut(auth);
            setUser(null)
            navigate('/'); 
    
        } catch (error) {
            console.log(error);
            alert('An error occurred. Please try again');
        }
    }
    signOutUser();
    },[])
    
}
