import React, { Component } from "react";
import Gods from "./Gods";

class App extends Component {
  state = {
    gods: [
      { name: "Zeus", age: 1000, id: 1 },
      { name: "Athena", age: 999, id: 2 },
      { name: "Ares", age: 998, id: 3 }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>React-Redux Playground</h1>
        <p>Watch me work</p>
        <Gods gods={this.state.gods} />
      </div>
    );
  }
}

export default App;
