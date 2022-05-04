import React, { useState, useEffect, useRef } from "react";

function UseRef() {
  let [item, setItem] = useState(" write in to input just over here");
  let count = useRef(0);
  let inputRef = useRef("hie dear how it is going right now !!!");
  let prevRef = useRef("");
  useEffect(() => {
    count.current = count.current + 1;
  });
  useEffect(() => {
    prevRef.current = item;
  }, [item]);

  function focus() {
    inputRef.current.focus();
    inputRef.current.value = "hello";
  }
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />
      <button onClick={focus}>Focus</button>
      <div className="texting">{item}</div>
      {count.current}
      <h3>
        {" "}
        here is our previous item started with this word: {prevRef.current}
      </h3>
    </div>
  );
}

export default UseRef;
