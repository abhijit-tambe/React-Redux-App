import * as actionType from "../Actions/actionTypes.js";

let lastId = 0;

export default function reducer(state = [], action) {
  if (action.type === actionType.BUG_ADDED)
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolve: false,
      },
    ];
  else if (action.type === actionType.BUG_REMOVED)
    return state.filter((x) => x.id !== action.payload.id);

  return state;
}

// using switch staement

// function reducer(state = [], action) {
//   switch (action.type) {
//     case "bugAdded":
//       return [
//         ...state,
//         {
//           id: ++lastId,
//           desciption: action.payload.desciption,
//           resolve: false,
//         },
//       ];
//     case "bugRemoved":
//       return state.filter((x) => x.id != action.payload.id);

//     default:
//       return state;
//   }
// }
