
import { Routes, Route } from "react-router-dom";
import {Home} from './pages/Home.jsx'
import { Plastering } from "./pages/Plastering.jsx";
import { Contact } from "./pages/Contact.jsx";  
import { Navigation } from "./components/Navigation.jsx";
import './App.css'

function App() {
 

  return (
    <>
    <Navigation/>
    <Routes>
      <Route path ="/" element={<Home/>} />
      <Route path ="/plastering" element={<Plastering/>} />
      <Route path ="/contact" element={<Contact/>} />
    </Routes>
    </>
  )
}

export default App
