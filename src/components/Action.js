import React from "react";

const Action = props => (
  <div>
    <button
      className="big-button"
      disabled={!props.hasOptions}
      onClick={props.handlePick}
    >
      Bingung pilih yang mana ?
    </button>
  </div>
);

export default Action;
