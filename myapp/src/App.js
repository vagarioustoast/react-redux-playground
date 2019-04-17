import React, { Component } from "react";
import Gods from "./Gods";
import AddGod from "./AddGod";

class App extends Component {
  state = {
    gods: [
      { name: "Zeus", age: 1000, id: 1 },
      { name: "Athena", age: 999, id: 2 },
      { name: "Ares", age: 998, id: 3 }
    ]
  };

  addGod = newGod => {
    // Assigns random id number
    newGod.id = Math.floor(Math.random() * 100);
    let gods = [...this.state.gods, newGod];
    this.setState({
      gods: gods
    });
  };
  render() {
    return (
      <div className="App">
        <h1>React-Redux Playground</h1>
        <p>Watch me work</p>
        <Gods gods={this.state.gods} />
        <AddGod addGod={this.addGod} />
      </div>
    );
  }
}

export default App;
