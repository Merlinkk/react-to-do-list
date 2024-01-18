import React, { Component } from 'react'

export default class TaskList extends Component {

  render() {
    const {taskList , handleDelete, handleUpdate} = this.props
    const TaskList = taskList
    return (
      <>
      <div className='taskListContainer'>
        {TaskList.map((task,index)=>{
            return <div className='taskElement' key={task.key}>
                <div className='taskText'>
                    {task.description}
                </div>
                <div className='buttons'>
                    <button className='edit' onClick={()=>{handleUpdate(index)}}>Edit</button>
                    <button className='delete' onClick={()=>{handleDelete(task.key)}}>Delete</button>
                </div>
            </div>
        })}
      </div>
      </>
    )
  }
}
