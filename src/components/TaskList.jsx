import React, { Component } from 'react'

export default class TaskList extends Component {

  render() {
    const {taskList , handleDelete, handleUpdate, handleInput} = this.props
    const TaskList = taskList
    return (
      <>
      <div className='taskListContainer'>
        {TaskList.map((task,index)=>{
            return <div className='taskElement' key={task.key}>
                <input type='text' placeholder={task.description} onChange={handleInput} className='taskText'>
                 
                </input>
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
