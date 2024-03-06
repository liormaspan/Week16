import React, {useState} from "react"
const clickMe=()=>{
        // alert("I was clicked")
}

const Events=()=>{
const handleKey=(e)=>{
    if(e.key==="Enter"){
        alert("your input is:" + e.target.value)
    }
}
const[isToggleOn,setisToggleOn]=useState("")
const ToggleOn=()=>{
    setisToggleOn(!isToggleOn)
}
return(
    <div>
        <button onClick={clickMe}>Click me</button>
        <input type="text" onKeyDown={handleKey} placeholder="Press Enter"></input>
        <button onClick={ToggleOn}>{isToggleOn?"ON":"OFF"}</button>
            <p>{isToggleOn?"ON":"OFF"}</p>
    </div>
)   
}
export default Events;