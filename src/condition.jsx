
import { useState } from "react";

function Condition(){
    let [number,setnumber]= useState(10);
    let addValue=()=>{
        if(number<20){
            setnumber(number+1);
        };
    };
    let removeValue=()=>{
        if(number>0){
            setnumber(number-1)
        };
    };
    return(
        <>
        <h1>practice of hooks</h1>
        <h3>here if value is 20 then it will not increase <br /> or if the value is 0 it will not decrease</h3>
        <h2>{number}</h2>
        <button onClick={addValue}>Addvalue</button>
        <button onClick={removeValue}>removeValue</button> 
        
        </>
    )
}

export default Condition;