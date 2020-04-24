let lastId = 0;

function reducer(state = [], action) {
  if (action.type === "bugAdded")
    return [
      ...state,
      {
        id: ++lastId,
        desciption: action.payload.desciption,
        resolve: false,
      },
    ];
  else if (action.type === "buggedRemoved")
    return state.filter((x) => x.id != action.payload.id);

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
