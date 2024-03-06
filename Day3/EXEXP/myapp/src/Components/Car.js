import React,{useState} from "react"
const Car=({carinfo})=>{
    const[color]=useState("black")
    return(
        <div>
            <h1>this car is {carinfo.model}</h1>
            <h1>this car is {carinfo.model} and hes color its {color}</h1>
        </div>
    )
}

export default Car;