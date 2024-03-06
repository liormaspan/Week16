// import logo from './logo.svg';
import Hello from './Hello';
import Love from './Love';
import './App.css';
import Sum from './Sum';
import UserFavoriteAnimals from './UserFavoriteAnimals';
import Exercise3 from "./Exercise3"
import Exercise from './Exercise.css'

function App() {
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
  };
  return (
    <div className="App">
      <Hello/>
      <Love/>
      <Sum/>
      <UserFavoriteAnimals favAnimals={user.favAnimals}/>
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <Exercise3/>
  
    

 
      
    </div>
  );
}

export default App;
