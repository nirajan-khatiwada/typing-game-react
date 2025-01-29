import React, { useCallback, useEffect, useState } from "react";
import { useContext, useRef } from "react";
import { dataContext } from "../../store/dataStore";
import CorrectAudio from "./../../assets/correct.mp3";
import IncorrectAudio from "./../../assets/incorrect.mp3";
import {
  englishParagraphs,
  nepaliUnicodeParagraphs,
} from "../../util/paraghaphs";
const Main = () => {
  const containerRef = useRef(null); // Scroll container ref


  
  
  const time = useContext(dataContext);
  const [clocktime, setclocktime] = useState(time.data.time * 60);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [errorIn,setErrorIn]=useState([])
  const data = useRef({
    isInitial: true,
    interval: null,
  });
  const paragraph =
    time.data.language == "English"
      ? englishParagraphs.slice(0, time.data.paragraph).join("")
      : nepaliUnicodeParagraphs.slice(0, time.data.paragraph).join("|");

      
  useEffect(() => {
    if (containerRef.current) {
      // Find the current active character
      const spans = containerRef.current.getElementsByTagName('span');
      const activeSpan = spans[currentPosition];
      
      if (activeSpan) {
        // Calculate the position to scroll to
        const containerHeight = containerRef.current.clientHeight;
        const spanTop = activeSpan.offsetTop;
        const spanHeight = activeSpan.offsetHeight;
        
        // Scroll to keep the active character in the middle of the container
        containerRef.current.scrollTop = spanTop - (containerHeight / 2) + (spanHeight / 2);
      }
    }
  }, [currentPosition]);
  useEffect(() => {
    clearInterval(data.current.interval);
    setclocktime(time.data.time * 60);
    setErrorIn([])
    data.current.isInitial=true
    setCurrentPosition(0)

  }, [time]);
  const caudio = useRef(new Audio(CorrectAudio)); // Use useRef for reusing audio
  const iaudio = useRef(new Audio(IncorrectAudio));

  const handleKeydown = useCallback(
    (event) => {
      const functionalKeys = [
        "Shift",
        "Control",
        "Alt",
        "CapsLock",
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "Tab",
        "Escape",
        "Meta",
        "Enter",
 
      ];

      // If the key is not a valid character or is a functional key, do nothing
      if (functionalKeys.includes(event.key)) {
        return;
      }

      if(event.key==="Backspace"){
        console.log("hi")
        setCurrentPosition((position)=>Math.abs(position-1))
        setErrorIn((prev)=>prev.filter(item=>(item!=currentPosition-1)))
        console.log(errorIn)
        return 
      }

      if (event.key === paragraph[currentPosition]) {
        
        caudio.current.play();
      } else {
        iaudio.current.play();
        setErrorIn((prev)=>[currentPosition,...prev])
        
      }

      setCurrentPosition((prev) => prev + 1);

     
      if (data.current.isInitial) {
        data.current.interval = setInterval(() => {
          setclocktime((prev) => prev - 1);
        }, 1000);
      }
      data.current.isInitial = false;
    },
    [currentPosition]
  );

  


  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [handleKeydown]);
  const accuracy =
    (currentPosition) === 0
      ? 0
      : (
          ((currentPosition-errorIn.length) / (currentPosition)) *
          100
        ).toFixed(2);

  const calcwpm = (currentPosition, clocktime) => {
    const newParagraph = paragraph.replace(".", " ");
    let array = newParagraph.split(" ");
    array = array.map((data) => {
      return data.length;
    });
  
    let word = 0;
    for (let x of array) {
      if (currentPosition >= x) {
        currentPosition = currentPosition - x;
        word++;
      }
    }
    if((time.data.time * 60 - clocktime)==0){
      return 0
    }

    return ((word * 60) / (time.data.time * 60 - clocktime)).toFixed(2)
  };

  const renderParagraph=(postion)=>{
    const par=paragraph.split("")
    return par.map((data,index)=>{
      if(index<postion){
        if(errorIn.includes(index)){
          return <span key={index} className="text-red-400">{data}</span>

        }else{
          return <span key={index} className="text-green-400">{data}</span>
        }
        
        
      }else if(index==postion){
        return <span key={index} className="underline">{data}</span>
      }else{
        return <span key={index}>{data}</span>
      }
    })
  }

  if(clocktime===0 || !paragraph[currentPosition]){
    alert(`Your CPM was ${Math.floor(
      (time.data.time * 60 - clocktime)==0?0:
      (currentPosition * 60) / (time.data.time * 60 - clocktime)
    )} and WPM is ${calcwpm(currentPosition,clocktime)} and accuracy is ${accuracy}` )
    clearInterval(data.current.interval)
    setErrorIn([])
    setclocktime(time.data.time*60)
    setCurrentPosition(0)
  }

  return (
    <div className="h-[70vh] w-2/3 bg-red-200 mx-auto">
      <div className="bg-blue-400 h-9/10 p-4 text-2xl tracking-wide font-semibold text-white font-sans overflow-auto" ref={containerRef}>
        {renderParagraph(currentPosition)}
      </div>
      <div className="h-1/10 bg-slate-500 flex items-center justify-around text-xl text-white">
        <span>Time:{clocktime}</span>
        <span>
          CPM:
          {Math.floor(
            (time.data.time * 60 - clocktime)==0?0:
            (currentPosition * 60) / (time.data.time * 60 - clocktime)
          )}
        </span>
        <span>WPM:{calcwpm(currentPosition, clocktime)}</span>
        <span>Accuracy:{accuracy}</span>
      </div>
    </div>
  );
};

export default Main;

/*
Read this all in depth
useState value in
useMemo,=>Will stale dependency array
useCallback, => Will stale dependency array
useEffect, => Will stale dependency array
useRef => Wont be stale
useContext
useReducer
norma function=>wont be stale
*/
