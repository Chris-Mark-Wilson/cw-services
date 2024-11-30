import { Telewriter } from "./Telewriter";
import { helloWorld } from "/src/assets/data/intros";
import { useState,useContext, useEffect } from "react";
import { CountContext } from "/src/context/CountContext";


export const TvScreen=()=>{
const {counter} = useContext(CountContext);
    useEffect(()=>{
        if(counter>0)
        helloWorld.unshift(`HELLO AND WELCOME, I'M CHRIS AND YOU ARE VISITOR NUMBER ${counter}! \n IF YOU SEE A WHITE ON BLACK K IT MEANS CLICK THE SCREEN OR PRESS A KEY TO CONTINUE k`);
    },[counter]);

    return(
        <div className='tv-screen-container'>
        <div id="tv-screen">
            <div id="top"></div>
            <div id="left"></div>
            <div id="right"></div>
            <div id="bottom"></div>
         
            {counter>0 && <Telewriter txt={helloWorld} startPos={{top:"354px",left:"0%"}}/>}
            
        </div>
       </div>
           )
}