import React, { useState,useEffect } from 'react'


let initialDate = new Date();
const SimpleTimer = () => {
    const [seconds, setCounts] = useState(initialDate);
        useEffect(() => {
            const interval = setInterval(()=>{
                setCounts( new Date());
            },1000);
            
            return () => {
                clearInterval(interval)
            }
            }, [])
  return (
//     <div style={{width:"100vw",height: "100vh",gap:"5rem", display: "flex", flexDirection: "column", justifyContent:"center", alignItems: "center"}}>
//     <div>
//       <h1>Count: {count}</h1>
//     </div>
//     <div style={{display: "flex", gap:"2rem"}}>
//       <button style={{padding :"0.25rem  1.5rem", borderRadius:"15px", border:"none", fontSize:"25px", fontStyle:"bold", fontWeight: "bold", letterSpacing: "1px"}} onClick={startTimer}>Start</button>
//       <button style={{padding :"0.25rem  1.5rem", borderRadius:"15px", border:"none", fontSize:"25px", fontStyle:"bold", fontWeight: "bold", letterSpacing: "1px"}}  onClick={stopTimer}>Stop</button>
//       <button style={{padding :"0.25rem  1.5rem", borderRadius:"15px", border:"none", fontSize:"25px", fontStyle:"bold", fontWeight: "bold", letterSpacing: "1px"}}  onClick={resetTimer}>Reset</button>         
//     </div>
   
//   </div>
    <div style={{width:"100vw",height: "100vh",gap:"3rem", display: "flex", flexDirection: "column", justifyContent:"center", alignItems: "center"}}>
        <h1>Simple Timer</h1>
        <p>
       {seconds.toLocaleString()}
        </p>
    </div>
  )
}

export default SimpleTimer