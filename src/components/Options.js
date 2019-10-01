import React from "react";
import Option from "./Option";

const Options = props => (
  <div>
    <div className="widget-header">
      <h3>Opsi kamu</h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
      >
        Hapus Semua Opsi
      </button>
    </div>
    <div className="widget-body">
      {props.options.length === 0 && (
        <p className="widget__empty-message">Tambahkan opsi untuk memulai !</p>
      )}
      {props.options &&
        props.options.map((key, index) => (
          <Option
            key={index}
            count={index + 1}
            optionText={key}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))}
    </div>
  </div>
);

export default Options;
