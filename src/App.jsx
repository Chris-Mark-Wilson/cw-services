import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Outbuildings } from "./pages/Outbuildings.jsx";
import { Plastering } from "./pages/Plastering.jsx";
import { Decorating } from "./pages/Decorating.jsx";
import { Joinery } from "./pages/Joinery.jsx";
import { Plumbing } from "./pages/Plumbing.jsx";
import { Tiling } from "./pages/Tiling.jsx";
import { Maintenance } from "./pages/Maintenance.jsx";
import { Kitchens } from "./pages/Kitchens.jsx";
import { Bathrooms } from "./pages/Bathrooms.jsx";
import { Lettings } from "./pages/Lettings.jsx";
import { AboutMe } from "./pages/AboutMe.jsx";
import { WebDev } from "./pages/WebDev.jsx";

import { Contact } from "./pages/Contact.jsx";
import { Navigation } from "./components/Navigation.jsx";
import "./App.css";

function App() {
  return (
    <>
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
        <Route path="/outbuildings" element={<Outbuildings />} />
        <Route path ="/kitchens" element={<Kitchens/>} />
        <Route path ="/bathrooms" element={<Bathrooms/>} />
        <Route path ="/lettings" element={<Lettings/>} />
        <Route path="/webdev" element={<WebDev />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
