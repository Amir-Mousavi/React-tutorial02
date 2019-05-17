import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = {
    name: "User"
  };

  onClickButton = () => {
    console.log("You clicked me!");
  };

  onChangeName = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    const { onChangeName, onClickButton } = this;
    const { name } = this.state;

    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        Hello {name}
        <button onClick={onClickButton}>Click me!</button>
        <input value={name} onChange={onChangeName} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
