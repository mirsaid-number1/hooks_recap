import React, { useEffect, useState } from "react";
import axios from "axios";

function UseEffect_hook() {
  let [resourceType, setResourceType] = useState("posts");
  let [item, setItems] = useState([]);
  useEffect(() => {
    console.log("mount it man");
  }, []);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/${resourceType}/1`)
      .then((response) => {
        setItems(response.data.name);
      });
  }, [resourceType]);
  return (
    <div className="container">
      <button
        className="btn btn-danger"
        onClick={() => {
          setResourceType("posts");
        }}
      >
        Posts
      </button>
      <button
        className="btn btn-danger"
        onClick={() => {
          setResourceType("users");
        }}
      >
        User
      </button>
      <button
        className="btn btn-danger"
        onClick={() => {
          setResourceType("comments");
        }}
      >
        Comments
      </button>

      <div className="container">{resourceType}</div>
      <div className="container">{item}</div>
    </div>
  );
}
export default UseEffect_hook;
