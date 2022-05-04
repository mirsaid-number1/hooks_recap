import React from "react";
import { useContext } from "react";
import { MyContext } from "./Head";
function Result() {
  let value = useContext(MyContext);
  return <div>{value}</div>;
}

export default Result;
