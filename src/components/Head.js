import React, { useState, createContext } from "react";
import Footer from "./Footer";

export const MyContext = createContext();

function Head() {
  let [name, setName] = useState("Mirsaid");
  return (
    <MyContext.Provider value={name}>
      <div>
        <Footer />
      </div>
    </MyContext.Provider>
  );
}

export default Head;
