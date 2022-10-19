import logo from "./logo.svg";
import "./App.css";

function App() {
  API();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
      </header>
    </div>
  );
}

function API() {
  // https://www.boredapi.com/api/activity
  console.log("API func");
  const actividad = fetch("https://www.boredapi.com/api/activity").then((res) =>
    res.json()
  );
  //.then((data) => data.toString());
  console.log(actividad.toString);
}

export default App;
