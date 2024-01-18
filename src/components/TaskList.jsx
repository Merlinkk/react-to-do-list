import React, { Component } from 'react'

export default class TaskList extends Component {

  render() {
    const {handleEditTask,handleDeleteTask,taskList} = this.props
    const TaskList = taskList
    return (
      <>
      <div className='taskListContainer'>
        {TaskList.map((task,index)=>{
            return <div className='taskElement' key={index}>
                <div className='taskText'>
                    {task}
                </div>
                <div className='buttons'>
                    <button className='edit' onClick={()=>{handleEditTask(index)}}>Edit</button>
                    <button className='delete' onClick={()=>{handleDeleteTask(index)}}>Delete</button>
                </div>
            </div>
        })}
      </div>
      </>
    )
  }
}
