import { useState } from "react";


import "./cssFiles/App.css";
import "./cssFiles/LandingPage.css";
import "./cssFiles/tvscreen.css";

import { TvScreen } from "./components/TvScreen";

export const ZX81=()=> {
  const [count, setCount] = useState(0);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  return (
    <>
      <section id="zx81-image-container">
        <img src={'/zx81/zx81desk.png'} id="zx81-image" />
        <TvScreen />
      </section>
    
    </>
  );
}

