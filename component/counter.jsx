import React from "react";
import { useState } from "react";
export const Counter = ()=>{
    const [count,setcount] = useState(0)
    return (
        <div>
        <h1>Counter App:{count} </h1>
        <button onClick = {()=>setcount(count+1)}>Increment</button>
        <button onClick = {()=>{
            if(count>0){
            setcount(count-1)}}}>Decrement</button>  
            <button onClick = {()=>{
              
                setcount(count*2)}}>Double</button>
    </div>
    )
}