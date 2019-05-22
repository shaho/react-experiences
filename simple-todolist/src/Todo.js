import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.removeTodo = this.removeTodo.bind(this);
  }
  removeTodo() {
    this.props.removeItem(this.props.id);
  }
  render() {
    return (
      <li key={this.props.id}>
        {this.props.taskTitle}
        <button onClick={this.removeTodo}>Delete</button>
      </li>
    );
  }
}

export default Todo;
