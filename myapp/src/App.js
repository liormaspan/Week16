import logo from './logo.svg';
import './App.css';
// import Hello from './Hello';
import User from './user';
import UserOne from './UserOne';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <Hello/> */}
        <User/>
        <UserOne/>
      </header>
    </div>
  );
}

export default App;
