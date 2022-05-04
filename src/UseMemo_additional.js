import React, { useState, useEffect, useMemo } from "react";

function UseMemo_additional() {
  let [number, setNumber] = useState(0);
  let [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("theme changed reason is i don't know.");
  });
  return (
    <div>
      <h1>Hello</h1>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change theme
      </button>
      <div style={themeStyle}>{doubleNumber}</div>
    </div>
  );
}

function slowFunction(num) {
  console.log("Calling slow funtion");
  for (let i = 0; i <= 100000000; i++) {}
  return num * 2;
}

export default UseMemo_additional;
