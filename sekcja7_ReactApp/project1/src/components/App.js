// AJAX demo

import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

const API = "https://randomuser.me/api/?results=1";

class App extends Component {
  counter = 5;
  state = {
    tasks: [
      {
        id: 0,
        text: "zagrać w wiedźmina",
        date: "2018-02-15",
        important: true,
        active: true,
        finishDate: null,
      },

      {
        id: 1,
        text: "task2",
        date: "2018-02-15",
        important: true,
        active: true,
        finishDate: null,
      },

      {
        id: 2,
        text: "task3",
        date: "2018-02-15",
        important: true,
        active: true,
        finishDate: null,
      },

      {
        id: 3,
        text: "task4",
        date: "2020-02-15",
        important: true,
        active: true,
        finishDate: null,
      },

      {
        id: 4,
        text: "task5",
        date: "2021-02-15",
        important: true,
        active: true,
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    console.log(`delete on id: ${id}`);

    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex((task) => task.id === id);
    // tasks.splice(index, 1);
    // this.setState({ tasks });

    let tasks = [...this.state.tasks];
    tasks = tasks.filter((task) => task.id !== id);
    this.setState({ tasks });
  };

  changeTaskStatus = (id) => {
    // better use [...array]
    let tasks = Array.from(this.state.tasks);
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });

    this.setState({ tasks });
  };

  addTask = (text, date, important) => {
    const newTask = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null,
    };
    this.counter++;

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newTask],
    }));

    return true;
  };

  render() {
    return (
      <div className="app">
        <h1>TODO APP</h1>
        <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
