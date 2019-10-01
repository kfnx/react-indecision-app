import React from "react";

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };

  handleAddOption = e => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => ({ error: error }));
    const that = this;
    setTimeout(function() {
      that.setState({ error: undefined });
    }, 5000);

    if (!error) {
      e.target.elements.option.value = "";
    }
  };

  render() {
    return (
      <div>
        {this.state.error && (
          <div className="add-option-error">{this.state.error}</div>
        )}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button">Tambahkan !!</button>
        </form>
      </div>
    );
  }
}
