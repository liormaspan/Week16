import{useState} from "react"

const Counter=(props)=>{
    let count=0
    const[number,setNumber]=useState(0)
    const[minus,setMinus]=useState(10)
    const[words,setWord]=useState('')
    const word=(e)=>{

        setWord(e.target.value)
    }
    const pahot=()=>{
        const count=0
        setMinus(minus-1)
        console.log("minus",count);
    }
    const add=()=>{
        count++
        setNumber(number+1)
        console.log("NUMBER",count);
    }
    return (
        <div>
            <h2>this is minus,{count} {minus}</h2>
            <button onClick={pahot}>-</button>
            <h2>Hello Counter {count} {number}</h2>
            <button onClick={add}>+</button>
            <div>
                <input onChange={word}/>
                <h2>{words}</h2>
            </div>
        </div>
    )
}
export default Counter;