import React, { useState } from "react";

function useState_hooks() {
  let [state, setState] = useState({ num: 0, type: "number" });
  const num = state.num;
  const type = state.type;
  function decrement() {
    if (state.num !== 0) {
      setState((prev) => {
        return { ...prev, num: prev.num - 1 };
      });
    }
  }
  function increment() {
    setState((prev) => {
      return { ...prev, num: prev.num + 1 };
    });
  }
  return (
    <div className="hooks">
      <button onClick={decrement} className="btn btn-danger">
        <b>-</b>
      </button>
      <h1>
        {state.num} {state.type}
      </h1>
      <button onClick={increment} className="btn btn-primary">
        <b>+</b>
      </button>
    </div>
  );
}

export default useState_hooks;
