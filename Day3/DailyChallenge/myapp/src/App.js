import './App.css';
import React,{useState} from 'react';

function App() {
  const [languages,setLanguages] = useState([
    {name: "Php", votes: 0},
    {name: "Python", votes: 0},
    {name: "JavaSript", votes: 0},
    {name: "Java", votes: 0},
    ])

    const upVote=(index)=>{
      setLanguages((lastLanguages)=>{
        const newLanguages=[...lastLanguages]
        newLanguages[index]={
          ...newLanguages[index],
          votes:newLanguages[index].votes+1,
        }
        return newLanguages
      })
    }


  return (
    <div>
      {
        languages.map((languages,index)=>(
        <div key={index}>
          <p>
            {languages.name}:{languages.votes} votes
          </p>
          <button onClick={()=>upVote(index)}>Vote Me!!!</button>
        </div>
        )
      )}
    </div>
  );
}

export default App;
