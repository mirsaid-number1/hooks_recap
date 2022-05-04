import React, { useState, useRef, useEffect } from "react";

function UseRef_additional() {
  let [name, setName] = useState("Iltimos ismingizni kiriting");
  let counter = useRef(1); // obj ={current:0}
  let linkRef = useRef("hello");
  let lastName = useRef("");
  useEffect(() => {
    lastName.current = name;
  }, [name]);

  useEffect(() => {
    counter.current = counter.current + 1;
  }, [name]);

  function focus() {
    linkRef.current.focus();
  }

  return (
    <div>
      <input
        ref={linkRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>{name}</div>
      <div>{counter.current}</div>
      <button onClick={focus}></button>
      {lastName.current}
    </div>
  );
}

export default UseRef_additional;
