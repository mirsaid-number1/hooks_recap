import React, { useState } from "react";
import { connect } from "react-redux";

function Task(props) {
  return (
    <div>
      <button onClick={props.subtract}>subtract</button>
      <button onClick={props.multiply}>multiply</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    subtract: () => {
      dispatch({
        type: "SUB",
        payLoad: {
          caption: 2,
        },
      });
    },

    multiply: () => {
      dispatch({
        type: "MUL",
        payLoad: {
          caption: 2,
        },
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);
