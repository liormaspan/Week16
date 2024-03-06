// import logo from './logo.svg';
import './App.css';
import Car from './Components/Car';
import Garage from './Components/Garage';
import Events from './Events'
import Phone from './Phone'
import Color from './Color';


const carinfo = {name: "Ford", model: "Mustang"};
function App() {
  return (
    <div>
      < Car carinfo={carinfo} />
      <Garage size={"big"}/>
      <Events/>
      <Phone />
      <Color/>
    </div>
  );
}

export default App;
