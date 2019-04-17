import React, { Component } from "react";

export default class AddGod extends Component {
  state = {
    name: null,
    age: null,
    belt: null
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addGod(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" onChange={this.handleChange} />
          <label>Age</label>
          <input type="text" name="age" onChange={this.handleChange} />
          <label>Belt</label>
          <input type="text" name="belt" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
