import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import store from "./Store/store.js";
// import * as actions from "./Actions/actions.js";
// import actionType from "./Actions/actionTypes.js";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./rootReducer.js";

function App() {
  // const unsubscribe = store.subscribe(() => {
  //   console.log("store updated", store.getState());
  // });

  // var des = "bug2";
  // var id = 1;

  // store.dispatch(actions.bugAdded(des));

  // // unsubscribe();
  // store.dispatch(actions.bugRemoved(id));

  // const uns = store.subsribe(() => {
  //   console.log(store.getState());
  // });
  // const unsub = store.subscribe(() => {
  //   console.log(actions.cakeReducer());
  // });
  const dispatch = useDispatch();
  const cakeCounter = useSelector((state) => state.cake.cakeCount);
  const cookiesCounter = useSelector((state) => state.cookies.cookiesCount);
  // const cakesub = store.subscibe()

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
      <h1> REact - REdux app</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>cake</th>
              <th>cookies</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <h3>{cakeCounter}</h3>
              </td>
              <td>
                <h3>{cookiesCounter}</h3>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  onClick={() => dispatch(actions.buyCake(actions.BUY_CAKE))}
                >
                  buy Cake
                </button>
              </td>
              <td>
                <button
                  onClick={() =>
                    dispatch(actions.buyCookies(actions.BUY_COOKIES))
                  }
                >
                  buy Cookie
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <h1>Counter : {counter}</h1> */}
    </div>
  );
}

export default App;
