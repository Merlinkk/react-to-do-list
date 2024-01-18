import React, { Component } from "react";
import AddTaskBar from "./components/AddTaskBar";
import TaskList from "./components/TaskList"
import "./App.css"

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      taskList:[],
      newTask:""
    }
  }

  handleInput = (e) => {
    this.setState({
      [e.target.id]:e.target.value
    })
  }

  handleAddTask = (e) => {

    e.preventDefault()

    const {newTask} = this.state

    if(newTask.trim()!=""){
      this.setState((prevState) => ({
        taskList:[...prevState.taskList,this.state.newTask],
        newTask:""
      }))
    }
    // setTimeout(() => {
    //   console.log(this.state)
    // }, 5);
  }

  handleEditTask = (index) => {
    let newTask = prompt('ENTER NEW TASK');
    if(newTask !== null && newTask.trim()!=""){
      const taskList = [...this.state.taskList]
      taskList[index] = newTask
      this.setState({
        taskList: taskList
      })
    }
  }

  handleDeleteTask = (index) => {
    const taskList = [...this.state.taskList]
    taskList.splice(index,1)
    this.setState({
      taskList
    })
  }




  render() {
    return (
      <div className="container">
        <img src = "https://i.pinimg.com/564x/31/5e/a9/315ea97166fe5cc6407294dbe3cbe681.jpg" className="imgRobo" height={400} />

        <div className="mainContainer">        
        <AddTaskBar handleInput={this.handleInput} handleAddTask={this.handleAddTask}/>
        <TaskList taskList = {this.state.taskList } handleEditTask={this.handleEditTask} handleDeleteTask={this.handleDeleteTask}/>
        </div>
      </div>
    );
  }
}

export default App;
