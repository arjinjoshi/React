
import { useEffect, useState } from "react";

type TimerStateType = "Start" | "Stop" | "Reset";
const initialCount: number = 0;

function getInitialCount(){
  const storedData = localStorage.getItem("count");
  if(storedData){
    try{
      const parsetStoredData: number = parseInt(JSON.parse(storedData));
      return parsetStoredData;
    }catch{
      return initialCount;
    }
  }else{
    return initialCount;
  }
}
let hours: number = 0;
let mins: number = 0;

const App = () => {
  const [count,setCount] = useState(getInitialCount);
  const [timerState, setTimerState] = useState<TimerStateType>("Stop");

  useEffect(()=>{
    let timerInterval: number;
    if(timerState === "Start"){
      // only increasing count when state becomes START
     timerInterval = setInterval(()=>{
        setCount(c=>c+1);
      },1000)
    }
    // resetting the count to zero when state becomes RESET
    if(timerState === "Reset"){
      setCount(0);
    } 
    // // this is optional because the count was storing the value and  if we didn't mention stop case then useEffect willnot set that state again with same value so it doesn't make sense 
    // if(timerState === "Stop"){
    //   setCount(count => count);
    // }
    
    // this logic runs everytime when we change the timerInterval 
    return ()=>{
      console.log("timer Cleared");
      clearInterval(timerInterval);
    }
  },[timerState]); // also runs if we didn't gave dependencies array and run useEffect on everytime but that will make number of rerenders so much which gonna cause performance lag 

  useEffect(()=>{
    localStorage.setItem("count", JSON.stringify(count));
  },[count])

  function startTimer(){
    setTimerState("Start");
  }
  function stopTimer(){
    setTimerState("Stop");
  }
  function resetTimer(){
    setTimerState("Reset")
  }
  return (
    <div style={{width:"100vw",height: "100vh",gap:"5rem", display: "flex", flexDirection: "column", justifyContent:"center", alignItems: "center"}}>
      <h1 style={{fontSize:"100px",color:"gray", fontFamily:'-apple-system', fontStyle:"bold", fontWeight: "bold", letterSpacing: "10px",marginTop: "-10rem",marginBottom:"5rem"}}>STOPWATCH</h1>
      
      <div>
        <h1 style= {{ fontStyle:"bold", fontWeight: "bold", letterSpacing: "1px"}}> {Math.floor(count/3600)} : {Math.floor((count%3600)/60)} : {((count%3600)%60)}</h1>
      </div>
      <div style={{display: "flex", gap:"2rem"}}>
        <button style={{padding :"0.25rem  1.5rem", borderRadius:"15px", border:"none", fontSize:"25px", fontStyle:"bold", fontWeight: "bold", letterSpacing: "1px"}} onClick={startTimer}>Start</button>
        <button style={{padding :"0.25rem  1.5rem", borderRadius:"15px", border:"none", fontSize:"25px", fontStyle:"bold", fontWeight: "bold", letterSpacing: "1px"}}  onClick={stopTimer}>Stop</button>
        <button style={{padding :"0.25rem  1.5rem", borderRadius:"15px", border:"none", fontSize:"25px", fontStyle:"bold", fontWeight: "bold", letterSpacing: "1px"}}  onClick={resetTimer}>Reset</button>         
      </div>
     
    </div>

  )
}

export default App