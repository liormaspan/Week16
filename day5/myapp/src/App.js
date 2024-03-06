// import Counter from './componets/Counter.js'
import './App.css';
// import User from './componets/User.js';
import Test from './componets/Test.js'
import Class from './componets/Class.js';
// import {useState} from "react"

function App() {

  // const [usename,setUsername]=useState('alla')
  // const [input,setInput]=useState('')
  // const handleChange=(e)=>{
  //   setInput(e.target.value)
  // }
  // const changeUsername=()=>{
  //   setUsername(input)
  // }
// const[username,setUsers]=useState([])
// const data=()=>{
//   fetch("https://jsonplaceholder.typicode.com/users")
//   .then(res=>res.json())
//   .then(data=>{
//     console.log(data);
//     setUsers(data)
//   }).catch((e)=>{
//     console.log(e);
//   })
// }
  return (
    <>
    {/* <button onClick={data}>Get User</button>
    <h2>User</h2>
    {
      username.map(item=>{
        return(
          <div key={item}>{item.name}</div>
        )
      })
    } */}
    {/* <Counter/>
    <User name={usename}/>
    userName: <input onChange={handleChange}/>
    <button onClick={changeUsername}>Submit</button> */}
    <Test />
    <Class/>
    </>
  );
}

export default App;
