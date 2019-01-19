import React, { Component } from 'react';


class AddTaskForm extends Component {

  state = {
    value: ''
  };

  handleValueChange = (e) => {
    this.setState({value: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.value);
    this.setState({
      value: ""
    });
  }

  render() {
    return(
      <footer>
        <form onSubmit={this.handleSubmit}>
          <input
            className="input"
            type="text"
            value={this.state.value}
            onChange={this.handleValueChange}
            placeholder="Enter a Task"
          />
          <input
            className="button"
            type="submit"
            value="Add Task"
          />
        </form>
      </footer>
    );
  }
}


export default AddTaskForm;
