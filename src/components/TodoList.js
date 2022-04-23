import React, {useState} from 'react'
import CreateTask from '../modals/createTask'
import Cards from './Card'
export default function TodoList() {
    const [modal, setModal] = useState(false)

    const toggle = () => {
        setModal(!modal)
    }
  return (
    <>
    <div className='header text-center'>
        <h3>Todoo List</h3>
        <button className='btn btn-primary mt-2' onClick = { () => setModal(true)}>Create Task</button>
    </div>
    <div className='task-container'>
      <Cards/>
    </div>
    <CreateTask toggle = {toggle} modal = {modal} />
    </>
  )
}

