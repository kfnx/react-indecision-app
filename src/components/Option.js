import React from "react";

const Option = props => (
  <div className="option">
    <p className="option__text">
      {props.optionText ? props.count + ". " + props.optionText : "unknown"}
    </p>
    <button
      className="button button--link"
      style={{ marginLeft: "15px" }}
      onClick={() => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      hapus
    </button>
  </div>
);

export default Option;
