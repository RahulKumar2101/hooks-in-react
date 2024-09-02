import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter,setCounter]= useState(15); // this is hooks where 1st value is parameter and second value is a function .
  // let counter = 5;        // useState(15) // this is the value of counter (15)
  let addvalue = ()=>{

    console.log('clicked',counter);
    counter = counter+1
    setCounter(counter) // here we are calling the function
  };
  let removeValue=()=>{
    counter = counter-1;
    setCounter(counter );
  }
  return (
    <>
      <h1>learning hooks</h1>
      <h2>counter value :{counter}</h2>
      <button onClick={addvalue}>Add value + {counter}</button>
      <button onClick={removeValue}>Remove value {counter}</button>
      
    </>
    
  );
}

export default App;
