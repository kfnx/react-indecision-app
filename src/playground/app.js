class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options: [],
      decision: undefined
    };
  }

  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem("options"));
      if (options) {
        this.setState(() => ({ options: options }));
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

  handleAddOption(option) {
    if (!option) {
      return "Enter a valid item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "option already exists";
    }

    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }));
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => option !== optionToRemove)
    }));
  }

  handlePick() {
    const randomOptions = Math.floor(Math.random() * this.state.options.length);
    const choosen = this.state.options[randomOptions];
    this.setState({ decision: choosen });
    // const juggling = setInterval(
    //   this.setState({
    //     decision: this.state.options[
    //       Math.floor(Math.random() * this.state.options.length)
    //     ]
    //   }),
    //   200
    // );
    // setTimeout(clearInterval(juggling), 1000);
  }

  render() {
    const title = "Indecision";
    const subtitle = "put ur decision on computer hands";
    return (
      <div>
        <Header
          title={title}
          subtitle={subtitle}
          decision={this.state.decision}
        />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

// IndecisionApp.defaultProps = {
//   options: []
// };

const Header = props => {
  return (
    <div>
      <h1>
        {props.title} : {props.decision}
      </h1>
      <h3>{props.subtitle}</h3>
    </div>
  );
};

Header.defaultProps = {
  title: "Default App"
};

const Action = props => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick}>
        Randomize
      </button>
    </div>
  );
};

const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Clear Options</button>
      {props.options.length === 0 && <p>Add some options to start !</p>}
      <ol>
        {props.options &&
          props.options.map((key, item) => (
            <Option
              key={item}
              optionText={key}
              handleDeleteOption={props.handleDeleteOption}
            />
          ))}
      </ol>
    </div>
  );
};

const Option = props => {
  return (
    <li>
      {props.optionText ? props.optionText : "unknown"}
      <button
        style={{ marginLeft: "15px" }}
        onClick={() => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </li>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => ({ error: error }));
    const that = this;
    setTimeout(function() {
      that.setState({ error: undefined });
    }, 2500);

    if (!error) {
      e.target.elements.option.value = "";
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.error !== undefined) {

  //   }
  // }

  render() {
    return (
      <div>
        {this.state.error && <p style={{ color: "red" }}>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add !!</button>
        </form>
      </div>
    );
  }
}

// const User = props => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
