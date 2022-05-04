import React from "react";
import "../axios.css";
const UserForm = (props) => {
  return (
    <form name="just" onSubmit={props.getUser}>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="enter your gitHub name"
      />
      <button className="btn btn-success">Submit</button>
    </form>
  );
};
export default UserForm;
