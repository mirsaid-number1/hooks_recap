import React, { useReducer, useState } from "react";

let ACTIONS = {
  ADD_COUNTER: "add-counter",
  DELETE_COUNTER: "delete-counter",
};
function UseReducer_additional() {
  let [user_name, setName] = useState("");
  let [state, dispatch] = useReducer(reducer, {
    count: 0,
    name: "enter your name",
  });

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.ADD_COUNTER:
        state = {
          count: state.count + 1,
          name: action.payload.name + " user added",
        };
        break;
      case ACTIONS.DELETE_COUNTER:
        state = {
          count: state.count - 1,
          name: "one user deleted",
        };
      default:
        state = {
          count: 0,
          name: "enter your name",
        };
        break;
    }
    return state;
  }
  function add() {
    dispatch({
      type: ACTIONS.ADD_COUNTER,
      payload: { name: user_name },
    });
  }

  function delete_all() {
    dispatch({
      type: ACTIONS.DELETE_COUNTER,
    });
  }
  return (
    <div>
      <input
        type="text"
        value={user_name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={add}>add user</button>
      <button onClick={delete_all}>delete user</button>
      <h1>{Object.values(state)}</h1>
    </div>
  );
}

export default UseReducer_additional;
