class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      visibility: true
    };
  }

  handleToggle() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleToggle}>hide</button>
        {this.state.visibility && <h1>Helow !</h1>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? "Hide details" : "Show details"}
//       </button>
//       {visibility && (
//         <div>
//           <p>Hey. These are some details you can now see!</p>
//         </div>
//       )}
//     </div>
//   );

//   ReactDOM.render(jsx, document.getElementById("app"));
// };

// render();
