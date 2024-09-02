import { Telewriter } from "./Telewriter";
import { helloWorld } from "/src/assets/data/intros";
import { useState,useContext, useEffect } from "react";
import { CountContext } from "/src/context/CountContext";


export const TvScreen=()=>{
const {counter} = useContext(CountContext);
    useEffect(()=>{
        if(counter>0)
        helloWorld.unshift(`WELCOME VISITOR NUMBER ${counter}! \n PLEASE PRESS ANY KEY OR CLICK THE SCREEN k`);
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