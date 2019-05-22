import React, { Component } from "react";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addTask(this.state.task);
    this.setState({
      task: ""
    });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <div className="">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="new todo"
            name="task"
            id="task"
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button>Add new task</button>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
