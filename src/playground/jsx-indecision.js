console.log("app.js running");

// JSXa
const app = {
  title: "Some App",
  subtitle: "some paragraph",
  options: ["rick", "morty", "beth"]
};

var buttonVisibility = false;

const addOption = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    console.log("form submitted", app.options);
    e.target.elements.option.value = "";
  }
  buttonVisibility = true;
  render();
};

const removeAllOption = () => {
  app.options = [];
  buttonVisibility = false;
  render();
};

const removeOption = () => {
  app.options = [];
  render();
};

const randomChoose = () => {
  const randomOptions = Math.floor(Math.random() * app.options.length);
  app.choosen = randomOptions;
  render();
};

const appRoot = document.getElementById("app");

const render = () => {
  const template = (
    <div>
      <h3>{app.options[app.choosen]}</h3>
      <p>{app.options.length > 0 ? "heres options" : "No Options"}</p>
      <ol>
        {app.options.map((item, key) => (
          <li key={key}>{item}</li>
        ))}
      </ol>
      <form onSubmit={addOption}>
        <input type="text" name="option" />
        <button>ADD</button>
      </form>
      <button onClick={removeAllOption}>removeAllOption</button>
      {buttonVisibility && <button onClick={randomChoose}>randomChoose</button>}
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
