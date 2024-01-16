import React, { Component } from 'react'

export class AddTaskBar extends Component {
  render() {

    const {handleInput, handleAddTask} = this.props


    return (
      <>
        <form className='TaskForm' onSubmit={handleAddTask}>
            <input type="text" id='newTask' placeholder='Add a new task' onChange={handleInput} />
            <button type='submit'>Add</button>
        </form>
      </>
    )
  }
}

export default AddTaskBar