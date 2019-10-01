import React from "react";
import AddOption from "./AddOptions";
import Options from "./Options";
import Header from "./Header";
import Action from "./Action";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
    closeModal: false
  };

  handleAddOption = option => {
    if (!option) {
      return "Enter a valid item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "Opsi itu udah kamu masukin";
    }

    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }));
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [], selectedOption: undefined }));
  };

  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => option !== optionToRemove)
    }));
  };

  handlePick = () => {
    console.log("handlePick");
    const randomOptions = Math.floor(Math.random() * this.state.options.length);
    const choosen = this.state.options[randomOptions];
    this.setState({ selectedOption: choosen });
  };

  handleClearSelectedOption = () => {
    this.setState({ selectedOption: undefined });
  };

  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem("options"));
      if (options) {
        this.setState(() => ({ options: options, selectedOption: undefined }));
      }
    } catch (e) {
      // just sleep
    }

    console.log("componentDidMount so fetch something" + Date());
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length != this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
      console.log("componentDidUpdate so save something ", json);
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount " + Date());
  }

  render() {
    const title = "Indecision";
    const subtitle = "put ur decision on computer hands";
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
          <OptionModal
            selectedOption={this.state.selectedOption}
            handleClearSelectedOption={this.handleClearSelectedOption}
          />
        </div>
      </div>
    );
  }
}

// IndecisionApp.defaultProps = { options: [] };
