import React, { Component } from 'react';

import Header from './Header';
import Task from './Task';
import AddTaskForm from './AddTaskForm';



class App extends Component {

  state = {
    tasks: []
  };

  // task id counter
  prevTaskId = 0;

  // function to add new task using concat() method
  handleAddTask = (task) => {
    let newTask = {
      task: task,
      status: false,
      id: this.prevTaskId += 1
    };
    this.setState( prevState => ({
      tasks: prevState.tasks.concat(newTask)
    }));
  }

  handleRemoveTask = (id) => {
    this.setState( prevState => {
      return {
        tasks: prevState.tasks.filter(t => t.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="wrapper">

        <Header
          tasks={this.state.tasks}
        />

        <div className="task-wrapper">
        {this.state.tasks.map( (task, index) =>
          <Task
            task={task.task}
            status={task.status}
            id={task.id}
            key={task.id.toString()}
            index={index}
            removeTask={this.handleRemoveTask}
          />
        )}
        </div>

        <AddTaskForm
          addTask={this.handleAddTask}
        />

      </div>

    );
  }
}


export default App;
