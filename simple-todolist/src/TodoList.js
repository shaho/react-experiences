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
    this.removeTask = this.removeTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    // this.toggleCompleteion = this.toggleCompleteion.bind(this);
  }
  addTask(task) {
    let newTask = { task: task, id: uuid(), completed: false };
    this.setState(prevState => {
      return { tasks: [...prevState.tasks, newTask] };
    });
  }
  updateTask(id, upadtedTask) {
    const updatedTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        return { ...task, task: upadtedTask };
      }
      return task;
    });

    this.setState({
      tasks: updatedTasks
    });
  }
  removeTask(id) {
    this.setState(() => {
      return {
        tasks: this.state.tasks.filter(task => {
          return task.id !== id;
        })
      };
    });
  }
  //   toggleCompleteion(id) {
  //     const updatedTasks = this.state.tasks.map(task => {
  //       if (task.id === id) {
  //         return { ...task, completed: !task.completed };
  //       }
  //       return task;
  //     });

  //     this.setState({
  //       tasks: updatedTasks
  //     });
  //   }
  render() {
    return (
      <div className="">
        <h1>Simple todo list</h1>
        <NewTodoForm addTask={this.addTask} />
        <ul>
          {this.state.tasks.map(task => {
            return (
              <Todo
                taskTitle={task.task}
                id={task.id}
                key={task.id}
                completed={task.completed}
                removeItem={this.removeTask}
                updateItem={this.updateTask}
                // toggleItem={this.toggleCompleteion}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
