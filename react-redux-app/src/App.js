import React from "react";
import logo from "./logo.svg";
import "./App.css";
import store from "./Store/store.js";
import * as actions from "./Actions/actions.js";
// import actionType from "./Actions/actionTypes.js";

function App() {
  const unsubscribe = store.subscribe(() => {
    console.log("store updated", store.getState());
  });

  var des = "bug2";
  var id = 1;

  store.dispatch(actions.bugAdded(des));

  // unsubscribe();
  store.dispatch(actions.bugRemoved(id));

  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <h1>REdux app</h1>
    </div>
  );
}

export default App;
