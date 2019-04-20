import React, { Component } from "react";
import Todos from "./Todos";
import AddForm from "./AddForm";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Buy some water" },
      { id: 2, content: "Play some Wargame" }
    ]
  };

  // Delete Todo: Function needs to be in "App" because it interacts with this state
  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  };

  addTodo = newTodo => {
    newTodo.id = Math.floor(Math.random() * 1000);
    let todos = [...this.state.todos, newTodo];
    this.setState({
      todos
    });
  };
  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
