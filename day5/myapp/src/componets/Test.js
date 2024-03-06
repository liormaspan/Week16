import { useState,useEffect } from "react";

const Test=(props)=>{
    const[count,setCount]=useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            setCount(count+1)
        },8000)
    })

    return(
        <div>
            <h2>function</h2>
            count: {count}
            <button onClick={()=>setCount(count+1)}>+</button>
        </div>
    )
}

export default Test;