import { Telewriter } from "./Telewriter";
import { helloWorld } from "/src/assets/data/intros";


export const TvScreen=()=>{
    return(
        <div className='zx81-container'>
        <div id="tv-screen">
            <div id="top"></div>
            <div id="left"></div>
            <div id="right"></div>
            <div id="bottom"></div>
         
            <Telewriter txt={helloWorld} startPos={{top:"354px",left:"0%"}}/>
            
        </div>
       </div>
           )
}