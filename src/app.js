import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const Layout = props => <div>{props.content}</div>;

const template = (
  <div>
    <IndecisionApp />
  </div>
);

ReactDOM.render(<Layout content={template} />, document.getElementById("app"));
