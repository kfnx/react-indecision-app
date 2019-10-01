class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleAddMultiplier = this.handleAddMultiplier.bind(this);
    this.handleMinusMultiplier = this.handleMinusMultiplier.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0,
      multiplier: 1
    };
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem("appData");
      const data = JSON.parse(json);
      if (data) {
        this.setState(() => ({
          count: parseInt(data.count),
          multiplier: data.multiplier
        }));
      }
    } catch (e) {
      // ngajedok
    }
  }
  componentDidUpdate() {
    const data = JSON.stringify(this.state);
    localStorage.setItem("appData", data);
  }
  handleAddOne() {
    this.setState({ count: this.state.count + this.state.multiplier });
    console.log("handleAddOne", this.state);
  }
  handleMinusOne() {
    this.setState(prevState => {
      return {
        count: prevState.count - this.state.multiplier
      };
    });
    console.log("handleMinusOne", this.state);
  }
  handleAddMultiplier() {
    this.setState(prevState => {
      return {
        multiplier: prevState.multiplier + 1
      };
    });
    console.log("handleAddMultiplier", this.state);
  }
  handleMinusMultiplier() {
    this.setState(prevState => {
      return {
        multiplier: prevState.multiplier - 1
      };
    });
    console.log("handleMinusMultiplier", this.state);
  }
  handleReset() {
    this.setState({
      count: 0,
      multiplier: 1
    });
    console.log("handleReset", this.state);
  }
  render() {
    return (
      <div>
        <h1>Now : {this.state.count}</h1>
        <h2>
          Multiplieriplier : {this.state.multiplier}{" "}
          <button onClick={this.handleAddMultiplier}>+</button>
          <button onClick={this.handleMinusMultiplier}>-</button>
        </h2>
        <button onClick={this.handleAddOne}>+</button>
        <button onClick={this.handleMinusOne}>-</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter co={32} />, document.getElementById("app"));
