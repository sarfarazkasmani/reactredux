import React from "react";
import "./App.css";
import { connect } from "react-redux";

function App(props) {
  return <div className='App'>Hello {props.username}</div>;
}

const mapStateToProps = (state) => {
  return {
    username: state.users.username,
  };
};

export default connect(mapStateToProps)(App);
