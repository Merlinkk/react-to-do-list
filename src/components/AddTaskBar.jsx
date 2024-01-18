import React, { Component } from 'react'

export class AddTaskBar extends Component {
  render() {

    const {handleInput, handleSubmit} = this.props


    return (
      <>
        <form className='TaskForm' onSubmit={handleSubmit}>
            <input type="text" id='newTask' placeholder='Add a new task' onChange={handleInput} />
            <button className='add' type='submit'>Add</button>
        </form>
      </>
    )
  }
}

export default AddTaskBar