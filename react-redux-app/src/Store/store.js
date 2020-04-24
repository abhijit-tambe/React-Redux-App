import { createStore } from "redux";
import reducer from "../Reducers/reducer.js";

const store = createStore(reducer);

export default store;
