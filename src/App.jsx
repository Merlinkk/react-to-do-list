import React, { Component } from "react";
import AddTaskBar from "./components/AddTaskBar";
import TaskList from "./components/TaskList"
import "./App.css"

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      todo:[],
      todoItem:{
        key:"",
        description:""
      }
    }
  }

  handleInput = (e) => {
    this.setState({
      todoItem:{
        key: Date.now(),
        description: e.target.value
      }
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault()   
    const newTask = this.state.todoItem
    if(this.state.todoItem.description !=""){
      const newTodo = [...this.state.todo, newTask]
      this.setState({
        todo: newTodo,
        todoItem:{
          key:"",
          description:""
        }})
      } 
  }

  handleDelete = (key) => {
    let taskList = [...this.state.todo];
    // const index = taskList.findIndex(item => item.key === key);
  
    // if (index !== -1) {
    //   taskList.splice(index, 1);
  
    //   this.setState({
    //     todo: taskList,
    //   });
    // }

    taskList = taskList.filter((el)=>{
      return el.key != key
    })
    this.setState({
          todo: taskList,
      });

  };

  handleUpdate = (index) => {
      const newTask = this.state.todoItem
      const taskList = [...this.state.todo]
      taskList[index].key = newTask.key
      taskList[index].description = newTask.description
      this.setState({
        todo: taskList
      })
  }




  render() {
    return (
      <div className="container">
        <img src = "https://i.pinimg.com/564x/31/5e/a9/315ea97166fe5cc6407294dbe3cbe681.jpg" className="imgRobo" height={400} />

        <div className="mainContainer">        
        <AddTaskBar handleInput={this.handleInput} handleSubmit={this.handleSubmit}/>
        <TaskList handleInput={this.handleInput} taskList = {this.state.todo} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate} />
        </div>
      </div>
    );
  }
}

export default App;
