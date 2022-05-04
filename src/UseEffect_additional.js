import React, { useEffect, useState } from "react";
import axios from "axios";
function UseEffect_additional() {
  let [render, rerender] = useState("none");
  let [item, setItem] = useState("posts");
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/${item}`)
      .then((res) => {
        let info = JSON.stringify(res);
        rerender(info);
        console.log(info);
      })
      .catch((err) => {
        rerender("sorry something went wrong");
      });
  }, [item]);
  return (
    <div>
      <button
        onClick={() => {
          setItem("posts");
        }}
      >
        Post
      </button>
      <button
        onClick={() => {
          setItem("users");
        }}
      >
        Users
      </button>
      <button
        onClick={() => {
          setItem("comments");
        }}
      >
        Comments
      </button>
      <div>{render}</div>
    </div>
  );
}

export default UseEffect_additional;
