import React, { useReducer } from "react";

function UseReducer() {
  let [state, dispatch] = useReducer(play, { num: 0, toggle: true });

  let types = {
    plus: "ADD",
  };
  function play(state, action) {
    switch (action.type) {
      case "ADD":
        state = {
          ...state,
          num: state.num + 1,
          toggle: !state.toggle,
        };
    }
    return state;
  }

  function add() {
    dispatch({
      type: types.plus,
    });
  }

  return (
    <div>
      {state.num}
      {state.toggle ? "hello world" : "yeah double it"}
      <button onClick={add}>press to add</button>
    </div>
  );
}

export default UseReducer;
