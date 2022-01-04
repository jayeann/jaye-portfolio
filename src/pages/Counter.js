import React, { useState } from "react";
import Button from '@mui/material/Button';



const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounter =()=>{
    setCounter(counter+1);
  }
  const decreaseCounter=()=>{
    setCounter(counter-1);
  }
  const reset=()=>{
    setCounter(0);
  }
  return (
    <div className="Home-Container">
{/* 
      Hello there folks!
      <Navigation /> */}
      <p>{counter}</p>
      <Button id="decCounter" onClick={increaseCounter}>Increase counter</Button>
      <Button id="incCounter" onClick={decreaseCounter}>Decrease counter</Button>
      <Button id="reset" onClick={reset}>Reset</Button>
    </div>
  )
}
export default Counter;