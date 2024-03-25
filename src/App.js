// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

// import Text from ""

function App() {
  const [vl, setVal] = useState("");
  const p_remover = () => {
    console.log(vl);
    const ar = Array.from(vl);
    console.log(ar);
    const arr = [];
    let fval = ""
    for (let i = 0; i < ar.length; i++) {
      if (!isNaN(ar[i]) === true) {
        arr.push(ar[i]);
      }
    }
    console.log("final arr is",arr)
    for (let i = 0;i<arr.length;i++){
       fval+=arr[i]
    }
     
    console.log("final  no is",fval)
    setVal(fval);
    console.log(vl)
  };

  return (
    <div className="App">
      <div>
        <text>Please input the Value</text>
      </div>
      <br />
      <div className="input-group mb-3">
        <input
          type="textarea"
          className="form-control"
          placeholder="Enter the number"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={vl}
          onChange={(v) => setVal(v.target.value)}
          // value={(val) => setVal(val)}
        />
      </div>
      <div>
        <button className="primary" onClick={p_remover}>
          Remove Punctuations
        </button>
      </div>
    </div>
  );
}

export default App;

{
  /* <header className="App-header">
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
      </header> */
}
