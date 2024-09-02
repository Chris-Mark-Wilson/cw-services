import { useState, useEffect, useRef, useContext } from "react";
import { WrittenContext } from "../contexts/WrittenContext";


export const Telewriter = ({ txt, startPos }) => {
  const timerInterval = 6;
  const [feed, setFeed] = useState([]);
  const [timer, setTimer] = useState(0);
  const [index, setIndex] = useState(0);
  const { written, setWritten } = useContext(WrittenContext);
  const [block, setBlock] = useState(0);
  const [para, setPara] = useState(0);
  const [end, setEnd] = useState(false);
  const [ready,setReady]=useState(false);
  const screenRef = useRef(null);
  const width = window.innerWidth;
  





  const [txtArray, setTxtArray] = useState(txt[0].split("\n"));


  useEffect(()=>{
    setTimeout(()=>{
      setReady(true)
    },2000)
  },[]);

  useEffect(() => {
    setFeed(() => {
      return new Array(txtArray.length).fill("\r");
    });

    screenRef.current && screenRef.current.focus();
  }, [txtArray]);

  ///////////////TIMER//////////////
  useEffect(() => {
    setTimeout(() => {
      timer === 1000 && setTimer(() => 0);
      setTimer(timer + 1);
    }, timerInterval);
  }, [timer]);

  //////////TELEWRITER////////////
  useEffect(() => {
    if(ready){
    if (!written) {
      if (index === txtArray[para].length - 1) {
        setPara((para) => para + 1);
        setIndex(() => 0);
      }
      if (txtArray[para][index] === "k") {
        setWritten(true);
      }
      if (txtArray[para][index] === "e") {
        setWritten(true);
        setEnd(true);
      }
      setFeed((oldFeed) => {
        oldFeed[para] += txtArray[para][index];
        setIndex((index) => index + 1);
        return [...oldFeed];
      });

      //scrollHeight increases beyond  clientHeight on overflow so...
      screenRef.current && screenRef.current.scrollTo({
        top: screenRef.current.scrollHeight,
        left: 0,
        behaviour: "smooth",
      });
    }
  }
  }, [timer,ready]);
  
  useEffect(() => {
    setTxtArray(() => txt[block].split("\n"));
  }, [block]);

  useEffect(() => {

    screenRef.current && screenRef.current.focus()

  }, [block, written])

  const handleKeyDown = (e) => {
    // console.log(e)
    //finished screen (came accross a 'k' or 'e')
    if (written) {
      if (txt.length - 1 > block) {
        setBlock(block + 1);
        setPara(0);
        setIndex(0);
        setWritten(false);
      }
    }
    if (e.type!="click" && written && end) {
// console.log('in noclick',e)
      switch (e.nativeEvent.key.toLowerCase()) {
        case "z":
          window.open("https://www.zx81stuff.org.uk/zx81/jtyone.html", "_blank", "noreferrer");
          break;
    
        default:
          window.location.reload();
          break;
      }
    }else if (e.type==="click" && written && end) {
      // console.log(e)
      window.location.reload();
    }
  };

  return ready &&(
    <>
      <div title={txtArray.join().slice(0,-1)}id={!end ? "writing" : "finished"} onClick={handleKeyDown} ref={screenRef} tabIndex={0} onKeyDown={handleKeyDown}>
        {feed.map((paragraph, index) => {
          return (
            <p
              key={index}
              className="paragraph"
              style={{
                position: "relative",
                top: !end ? `${startPos.top}` :  `${startPos.top}`,
                left: `${startPos.left}`,
              }}
              onClick={() => {
               
                screenRef.current.focus();
              }}
              onLoad={() => {
                screenRef.current.focus();
              }}
            >
              {paragraph}
            </p>
          );
        })}
      </div>
      {written && end && width<601 && 
      <>
      <div id="mobile-keyboard">
        
      
        <img src='/zx81/ZX81_keyboard.jpg' onClick={handleKeyDown}/>
        </div>
        <div id="mobile-button" onClick={(e)=>{e.nativeEvent.key='z';e.type='keypress';handleKeyDown(e)}}>
          </div>
        </> 
      }
         </>

  );
};
