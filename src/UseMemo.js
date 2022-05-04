import React, { useState, useEffect, useMemo } from "react";

function UseMemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  let [count, setCount] = useState(0);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const themeStyles = useMemo(() => {
    setCount((prev) => prev + 1);
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(+e.target.value);
        }}
      />
      <button onClick={() => setDark((prev) => !prev)}>change theme</button>
      <div> theme changed {count} times</div>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
}

function slowFunction(num) {
  console.log("it is calling");
  for (let i = 0; i <= 10000000; i++) {}
  return num * 2;
}

export default UseMemo;
