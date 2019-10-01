import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Choosed Option"
    onRequestClose={props.handleClearSelectedOption}
    closeTimeoutMS={200}
    className="modal"
  >
    <h2 className="modal__title">Pilihan komputer buat kamu adalah..</h2>
    <p className="modal__body">{props.selectedOption}</p>
    <button className="button" onClick={props.handleClearSelectedOption}>
      Okay
    </button>
  </Modal>
);

export default OptionModal;
