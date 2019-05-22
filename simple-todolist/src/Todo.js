import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.taskTitle
    };
    this.handleChange = this.handleChange.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  removeTodo() {
    this.props.removeItem(this.props.id);
  }
  updateTodo(e) {
    e.preventDefault();
    this.props.updateItem(this.props.id, this.state.task);
    this.toggleForm();
  }
  toggleForm() {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.updateTodo}>
            <input
              type="text"
              name="task"
              value={this.state.task}
              onChange={this.handleChange}
            />
            <button>Update</button>
          </form>
        </div>
      );
    } else {
      result = (
        <li key={this.props.id}>
          {this.props.taskTitle}
          <button onClick={this.removeTodo}>Delete</button>
          <button onClick={this.toggleForm}>Edit</button>
        </li>
      );
    }
    return result;
  }
}

export default Todo;
