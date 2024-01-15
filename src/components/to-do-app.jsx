import { Component } from "react";
import "./to-do-app.css";

class toDoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      title: "",
      description: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  addTask = () => {
    const { title, description } = this.state;

    if (title && description) {
      const newTask = {
        title,
        description,
      };

      this.setState((prevState) => ({
        tasks: [...prevState.tasks, newTask],
        title: "",
        description: "",
      }));

      // document.querySelector(".taskOutputContainer").innerHTML += `
      //       <div class="taskElement">
      //           <div class="textArea">
      //                <h1 class="heading">${this.state.title}</h1>
      //             <h3 class="description">${this.state.description}</h3>
      //         </div>

      //        <div class="optionButtons">
      //            <button>Update</button>
      //            <button>Delete</button>
      //        </div>
      //      </div>`
    }
  }

  update = (index) => {
    let titleInput = prompt('ENTER NEW TITLE');
    let descInput = prompt('ENTER NEW DESCRIPTION');
  
    if (titleInput !== null && descInput !== null) {
      const updatedTasks = [...this.state.tasks];
      updatedTasks[index] = {
        title: titleInput,
        description: descInput,
      };
  
      this.setState({
        tasks: updatedTasks,
      });
    }
  }
  

  delete = (index) => () => {
    const tasks = [...this.state.tasks];
    tasks.splice(index, 1);
    this.setState({ tasks });
  }
  

  render() {

    const tasks = this.state.tasks 

    return (
      <>
        <div className="container">
          <h1 className="head">My Tasks</h1>
          <div className="taskInput">
            <div className="inputLabel">
              <label htmlFor="title">Name: </label>
              <input type="text" onChange={this.handleChange} id="title" />
            </div>
            <div className="inputLabel">
              <label htmlFor="description">Description: </label>
              <input
                type="text"
                onChange={this.handleChange}
                id="description"
              />
            </div>
            <div className="taskAddButton">
              <button onClick={this.addTask}>Add Task</button>
            </div>
          </div>

          <br />

          <div className="taskOutputContainer">
              {tasks.map((task,index)=>{
                  return(
                      <div key={index} className="taskElement">
                          <div className="textArea">
                              <h1 className="heading">{task.title}</h1>
                              <h3 className="description">{task.description}</h3>
                          </div>

                          <div className="optionButtons">
                              <button  onClick={() => this.update(index)}>Update</button>
                              <button onClick={this.delete(index)}>Delete</button>
                          </div>
                      </div>
                  )
              })}
          </div>
        </div>
      </>
    );
  }
}

export default toDoApp;
