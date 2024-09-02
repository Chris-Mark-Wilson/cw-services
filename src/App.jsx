



import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";


import { AboutMe } from "./pages/AboutMe.jsx";
import { WebDev } from "./pages/WebDev.jsx";
import { HomeAutomation } from "./pages/HomeAutomation.jsx";


import { Contact } from "./pages/Contact.jsx";
import { Navigation } from "./components/Navigation.jsx";
import { Footer } from "./components/Footer.jsx";
import { Services } from "./pages/Services.jsx";
import {ManageGalleries} from "./pages/ManageGalleries.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import { ModalProvider } from "./context/ModalContext.jsx";
import {Modal} from "./components/Modal.jsx";
import "./css_files/App.css";
import { SignIn } from "./pages/SignIn.jsx";
import { SignOut } from "./pages/SignOut.jsx";
import { Profile } from "./pages/Profile.jsx";
import { Gallery } from "./pages/Gallery.jsx";


function App() {




  return (
    <UserProvider>
    <ModalProvider>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
          <Route path='/gallery'>
            <Route path=':id' element={<Gallery/>}/>
          </Route>
        <Route path="/webdev" element={<WebDev />} />
        <Route path="/ha" element={<HomeAutomation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
    
        <Route path='/manage' element={<ManageGalleries/>}/>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signOut" element={<SignOut />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer/>
      <Modal />
    </ModalProvider>
    </UserProvider>
  );
}

export default App;
