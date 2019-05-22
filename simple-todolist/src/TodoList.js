import React, { Component } from "react";
import uuid from "uuid/v4";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
    this.addTask = this.addTask.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
  addTask(task) {
    let newTask = { task: task, id: uuid() };
    this.setState(prevState => {
      return { tasks: [...prevState.tasks, newTask] };
    });
  }
  removeItem(id) {
    this.setState(() => {
      return {
        tasks: this.state.tasks.filter(task => {
          return task.id !== id;
        })
      };
    });
  }
  render() {
    return (
      <div className="">
        <h1>Simple to do list</h1>
        <NewTodoForm addTask={this.addTask} />
        <ul>
          {this.state.tasks.map(task => {
            return (
              <Todo
                taskTitle={task.task}
                id={task.id}
                key={task.id}
                removeItem={this.removeItem}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
