



import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";

import { Plastering } from "./pages/services/Plastering.jsx";
import { Decorating } from "./pages/services/Decorating.jsx";
import { Joinery } from "./pages/services/Joinery.jsx";
import { Plumbing } from "./pages/services/Plumbing.jsx";
import { Tiling } from "./pages/services/Tiling.jsx";
import { Maintenance } from "./pages/services/Maintenance.jsx";
import { Kitchens } from "./pages/Kitchens.jsx";
import { Bathrooms } from "./pages/Bathrooms.jsx";
import { MiscInternal } from "./pages/MiscInternal.jsx";
import { AboutMe } from "./pages/AboutMe.jsx";
import { WebDev } from "./pages/WebDev.jsx";
import { HomeAutomation } from "./pages/HomeAutomation.jsx";
import { Glossary } from "./pages/Glossary.jsx";
import { ExternalJoinery } from "./pages/ExternalJoinery.jsx";
import { ExternalMasonary } from "./pages/ExternalMasonary.jsx";
import { MiscExternal } from "./pages/MiscExternal.jsx";
import { Glazing } from "./pages/services/Glazing.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Navigation } from "./components/Navigation.jsx";
import { Footer } from "./components/Footer.jsx";

import {ManageGalleries} from "./components/ManageGalleries.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import { ModalProvider } from "./context/ModalContext.jsx";
import {Modal} from "./components/Modal.jsx";
import "./css_files/App.css";
import { SignIn } from "./pages/SignIn.jsx";
import { SignOut } from "./pages/SignOut.jsx";

function App() {
  return (
    <UserProvider>
    <ModalProvider>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/plastering" element={<Plastering />} />
        <Route path="/joinery" element={<Joinery />} />
        <Route path="/plumbing" element={<Plumbing />} />{" "}
        <Route path="/tiling" element={<Tiling />} />{" "}
        <Route path="/decorating" element={<Decorating />} />{" "}
        <Route path="/maintenance" element={<Maintenance />} />{" "}
        <Route path="/externaljoinery" element={<ExternalJoinery />} />
        <Route path="/externalmasonary" element={<ExternalMasonary />} />
        <Route path="/miscexternal" element={<MiscExternal />} />
        <Route path ="/kitchens" element={<Kitchens/>} />
        <Route path ="/bathrooms" element={<Bathrooms/>} />
        <Route path ="/miscinternal" element={<MiscInternal/>} />
        <Route path="/glazing" element={<Glazing />} />
        <Route path="/webdev" element={<WebDev />} />
        <Route path="/ha" element={<HomeAutomation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/glossary' element={<Glossary/>}/>
        <Route path='/manage' element={<ManageGalleries/>}/>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signOut" element={<SignOut />} />
      </Routes>
      <Footer/>
      <Modal />
    </ModalProvider>
    </UserProvider>
  );
}

export default App;
