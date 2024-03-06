import React,{useState,useEffect} from "react";
const Color=()=>{
const[favoriteColor,setFavoriteColor]=useState("Red")

useEffect(()=>{
setFavoriteColor("Yellow")
alert("useEffect reached")
},[])

const changeColor=()=>{
    setFavoriteColor("Blue")
}

return(
    <div>
        <h1>my Favorite color: {favoriteColor}</h1>
        <button onClick={changeColor}>Change Me!!</button>
    </div>
)
}

export default Color;