import React, { useRef } from "react";
import { connect } from "react-redux";

function App(props) {
  let btn_add = useRef();
  let btn_reduce = useRef();

  console.log(props.count);
  return (
    <div>
      <h1>{props.count}</h1>
      <button ref={btn_add} onClick={props.addCounter}>
        {" "}
        add
      </button>
      <button ref={btn_reduce} onClick={props.reduceCounter}>
        {" "}
        reduce
      </button>
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
    addCounter: () => {
      dispatch({
        type: "ADD",
        payLoad: {
          caption: 1,
        },
      });
    },
    reduceCounter: () => {
      dispatch({
        type: "BADD",
        payLoad: {
          caption: 1,
        },
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
