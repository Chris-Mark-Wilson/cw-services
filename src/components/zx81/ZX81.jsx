import { useState,useContext } from "react";
import { CountContext } from "../../context/CountContext";

import "./cssFiles/App.css";
import "./cssFiles/LandingPage.css";
import "./cssFiles/tvscreen.css";

import { TvScreen } from "./components/TvScreen";

export const ZX81=()=> {

  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);


  return (
    <>
      <div id="zx81-image-container">
        <img src={'/zx81/zx81desk.png'} id="zx81-image" />
        <TvScreen />
      </div>
    
    </>
  );
}

