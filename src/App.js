import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList'

class App extends Component {

  state = {
    tasks: [],
    task: {
      id: '',
      content: '',
      toggleEdit: ''
    }
  }

  onChangeTask = (e) => {
    this.setState({ task: { id: Date.now(), content: e.target.value, toggleEdit: false } })

  }

  addTaskToTasks = (e) => {
    e.preventDefault()
    if (this.state.task.content) {

      const newTasks = [...this.state.tasks];
      this.setState({ tasks: [{ ...this.state.task }, ...newTasks], task: { content: '' } })
    }
  }

  deleteTask = (event, id) => {
    console.log({ event, id });
    const copyTasks = [...this.state.tasks]
    const newTasks = copyTasks.filter(x => x.id !== id)
    this.setState({ tasks: newTasks })
  }

  toggleEditTask = (event, elTask) => {
    const newTask = { ...elTask }
    newTask.toggleEdit = true;
    console.log(newTask)
    const newTasks = [...this.state.tasks]
    const filteredTasks = newTasks.map(el => el.id === elTask.id ? newTask : el)
    this.setState({ tasks: filteredTasks })
  }

  updateTask = (event, elTask) => {
    console.log(elTask)
    const copyTask = { ...elTask };
    copyTask.content = event.target.value;
    console.log({ copyTask })
    const newTasks = [...this.state.tasks];
    const updatedTasks = newTasks.map(el => el.id === elTask.id ? copyTask : el)
    this.setState({ tasks: updatedTasks })
  }

  toggleEditOff = (event, elTask) => {
    event.preventDefault();
    const newTask = { ...elTask }
    newTask.toggleEdit = false;
    console.log(newTask)
    const newTasks = [...this.state.tasks]
    const filteredTasks = newTasks.map(el => el.id === elTask.id ? newTask : el)
    this.setState({ tasks: filteredTasks })
  }

  render() {
    return (
      <div>
        <TodoList onChangeTask={this.onChangeTask}
          addTaskToTasks={this.addTaskToTasks}
          task={this.state.task}
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          toggleEditTask={this.toggleEditTask}
          updateTask={this.updateTask}

        />
      </div>
    );
  }
}

export default App;
