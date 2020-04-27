import { combineReducers } from "redux";

// store elements
const initialCake = {
  cakeCount: 20,
};
const initialCookies = {
  cookiesCount: 50,
};
// store elements

// defining type
export const BUY_CAKE = "buyCake";
export const BUY_COOKIES = "buyCookies";
// defining type

//actions functions to return action objects
export function buyCake() {
  return {
    type: BUY_CAKE,
  };
}

export function buyCookies() {
  return {
    type: BUY_COOKIES,
  };
}
//actions functions to return action objects

// reducers
export function cakeReducer(state = initialCake, action) {
  switch (action.type) {
    case BUY_CAKE:
      return {
        cakeCount: state.cakeCount - 1,
      };
    // case "decrement":
    //   return {
    //     counter: state.counter - 1,
    //   };
    default:
      return state;
  }
}

export function cookiesReducer(state = initialCookies, action) {
  switch (action.type) {
    case BUY_COOKIES:
      return {
        cookiesCount: state.cookiesCount - 1,
      };
    // case "decrement":
    //   return {
    //     counter: state.counter - 1,
    //   };
    default:
      return state;
  }
}
//reducers

//combine reducers
const rootReducer = combineReducers({
  cake: cakeReducer,
  cookies: cookiesReducer,
});
//combine reducers

export default rootReducer;
