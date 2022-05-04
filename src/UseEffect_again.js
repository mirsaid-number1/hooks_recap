import React, { useState, useEffect } from "react";

function UseEffect_again() {
  let [width, setWidth] = useState(window.innerWidth);
  let [height, setHeight] = useState(window.innerHeight);
  const rewe = () => {
    setWidth(window.innerWidth);
  };
  function rehe() {
    setHeight(window.innerHeight);
  }
  useEffect(() => {
    window.addEventListener("resize", rehe);
    window.addEventListener("resize", rewe);
  }, []);
  return (
    <div>
      {height} bo'yi
      {width} eni
    </div>
  );
}

export default UseEffect_again;
