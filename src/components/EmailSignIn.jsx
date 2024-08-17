import { useState } from "react";
import "../css_files/sign_in.css";

import { signUpWithEmail, signInWithEmail } from "../../api/firebaseAuth";
import { useNavigate } from "react-router-dom";

import { listAllUsers,setAdminClaim } from "../../api/firebaseAuth";

export const EmailSignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const createAccount = async (e) => {
    setPasswordError("");
    setEmailError("");
    e.preventDefault();
    try {
      const credentials = await signUpWithEmail(email, password);
      const users=await listAllUsers();
      // if no users, set admin claim
      if (users.length===1){
        const response=await setAdminClaim(credentials.user.uid);
        console.log('admin claim response: ',response);
      }

    //   console.log(JSON.stringify(response, null, 1));
      navigate(-1);

    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          setEmailError("Email already in use");
          break;
        case "auth/invalid-email":
          setEmailError("Invalid email");
          break;
        case "auth/weak-password":
          setPasswordError("Password too weak");
          break;
        case "auth/missing-email":
          setEmailError("Email required");
          break;
        case "auth/missing-password":
          setPasswordError("Password required");
          break;
        default:
          setEmailError("An error occurred. Please try again");
          break;
      }
      console.log(JSON.stringify(error, null, 1));
    }
  };

  const signIn = (e) => {
    setPasswordError("");
    setEmailError("");
    e.preventDefault();
    signInWithEmail(email, password)
      .then((response) => {

  
        navigate(-1);
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/user-not-found":
            setEmailError("User not found");
            break;
          case "auth/wrong-password":
            setPasswordError("Incorrect password");
            break;
          case "auth/invalid-email":
            setEmailError("Invalid email");
            break;
          case "auth/missing-email":
            setEmailError("Email required");
            break;
          case "auth/missing-password":
            setPasswordError("Password required");
            break;
          default:
            setEmailError("An error occurred. Please try again");
            break;
        }
        console.log(JSON.stringify(error.code, null, 1));
      });
  };

  return (
    <div className="email-sign-in">
      <div className="sign-in">
        <h4>
          Secure sign in <img src="/sign-in-logo.png" />
        </h4>
        <form>
          <input
            name="email"
            type="email"
            value={email}
            placeholder={"  Email"}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && <p className="signin-error">{emailError}</p>}

          <input
            name="password"
            type="password"
            value={password}
            placeholder={"  Password"}
            autoComplete="new-password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {passwordError && <p className="signin-error">{passwordError}</p>}

          <div className="email-buttons">
            <button onClick={createAccount}>Create Account</button>
            <button onClick={signIn}>Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
};
