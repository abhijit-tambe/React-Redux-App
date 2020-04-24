import * as actionTypes from "./actionTypes.js";

export function bugAdded(description) {
  return {
    type: actionTypes.BUG_ADDED,
    payload: {
      description,
    },
  };
}

export function bugRemoved(id) {
  return {
    type: actionTypes.BUG_REMOVED,
    payload: {
      id,
    },
  };
}
