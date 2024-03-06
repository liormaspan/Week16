import React,{useState} from "react";

const Phone=()=>{
    const[mobile,setMobile]=useState(
        {brand: "Samsung",
        model: "Galaxy S20",
        color: "black",
        year: 2020}
    )

const changeColor=()=>{
    setMobile((lastColor)=>({
        ...lastColor,
        color:"blue"
    }))
}

    return(
        <div>
            <h1>my phone is {mobile.brand}</h1>
            <h1>the model om my Phone is {mobile.model}</h1>
            <h1>hes color is {mobile.color}</h1>
            <h1>hes is launched {mobile.year}</h1>
            <button onClick={changeColor}>Change Me!!</button>
        </div>
    )
}
export default Phone;