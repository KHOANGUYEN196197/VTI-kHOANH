import { useState, useReducer } from "react";
import Todo from "./todo";

//useState
// 1. initialState count = 0
// 2. action up: count+ 1, down: count-1

//useReducer
// 1. initialState = 0
// 2. action up: count+ 1, down: count-1
// 3. Reducer
// 4. Dispatch

//Init State
const initialState = 0;
// Action
const UP_ACTION = "up";
const DOWN_ACTION = "down";
// Reducer
const reducer = (state, action) => {
  console.log("running action");
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      return state;
  }
};

function HookUseReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    // <div style={{ padding: "20px 30px" }}>
    //   <h1>{count}</h1>
    //   <button
    //     onClick={() => {
    //       dispatch(UP_ACTION);
    //     }}
    //   >
    //     UP
    //   </button>
    //   <button
    //     onClick={() => {
    //       dispatch(DOWN_ACTION);
    //     }}
    //   >
    //     DOWN
    //   </button>
    // </div>
    <Todo />
  );
}
export default HookUseReducer;
