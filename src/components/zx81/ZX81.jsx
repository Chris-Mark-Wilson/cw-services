import { useState,useContext, useEffect } from "react";
import { WrittenContext } from "./contexts/WrittenContext";


import "./cssFiles/LandingPage.css";
import "./cssFiles/tvscreen.css";

import { TvScreen } from "./components/TvScreen";

export const ZX81=()=> {

  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const {linkTriggerArray}=useContext(WrittenContext);
  const [triggers,setTriggers]=useState([]);

  useEffect(()=>{
    if(linkTriggerArray.length>0){
      setTriggers((prev)=>{
        return [...prev,true]
    });
    }
  },[linkTriggerArray])


  return (
    <>
      <div id="zx81-image-container">
        <img src={'/zx81/zx81desk.png'} id="zx81-image" />
        {/*  screen/container adjustments done in tvscreen css*/}
        <TvScreen />
        {/* text is in src/assets/data/intro.js */}
      </div>
    
    </>
  );
}

