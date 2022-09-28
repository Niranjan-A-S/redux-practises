// import { applyMiddleware, combineReducers, createStore } from "redux";
// import { createLogger } from "redux-logger";

// const logger = createLogger();

// const initialCakeState = {
//   cakes: [
//     { id: 1, name: "Red Velvet" },
//     { id: 2, name: "BLack Forest" },
//     { id: 3, name: "White Forest" }
//   ]
// };

// const intitialIceCreamState = {
//   numOfIceCreams: 10
// };

// const ADD_CAKE = "add cake";
// const BUY_CAKE = "buy cake";
// const BUY_ICE_CREAM = "buy icecream";

// export const cakeReducer = (state = initialCakeState, action) => {
//   debugger;
//   switch (action.type) {
//     case ADD_CAKE:
//       return {
//         cakes: [
//           ...state.cakes,
//           { id: state.cakes.length + 1, name: action.payload }
//         ]
//       };
//     case BUY_CAKE:
//       return {
//         cakes: state.cakes.filter((cake) => cake.id !== action.payload)
//       };
//     default:
//       return state;
//   }
// };
// export const iceCreamReducer = (state = intitialIceCreamState, action) => {
//   debugger;
//   switch (action.type) {
//     case BUY_ICE_CREAM:
//       return {
//         ...state,
//         numOfIceCreams: state.numOfIceCreams - 1
//       };
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   cakes: cakeReducer,
//   iceCreams: iceCreamReducer
// });

// const store = createStore(rootReducer, applyMiddleware(logger));

// console.log("initial state", store.getState());

// // const unsubscribe = store.subscribe(() =>
// //   console.log("after dispatch", store.getState())
// // );

// //middleware
// const unsubscribe = store.subscribe(() => {});

// store.dispatch({ type: ADD_CAKE, payload: "Chocolate Truffle" });
// store.dispatch({ type: ADD_CAKE, payload: "White Truffle" });
// store.dispatch({ type: BUY_CAKE, payload: 1 });
// store.dispatch({ type: BUY_CAKE, payload: 2 });
// store.dispatch({ type: BUY_ICE_CREAM });
// store.dispatch({ type: BUY_ICE_CREAM });

// unsubscribe();
// unsubscribe();
