import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label} from 'reactstrap'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import axios from "axios"

export default function CreateTask({modal, toggle}) {
  const [id, setId] = useState('')
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState('')
  const [date, setDate] = useState(new Date())
  const onDateChange = (newDate) => {
    setDate(newDate);
    console.log(newDate);
}
    // const [formValue, setformValue] = React.useState({
    //   id: '',
    //   title: '',
    //   status: ''
    // })
    const handleSubmit = (event) => {
      const FormData =  {
      id:id,
      title: title,
      due_on: date,
      status: status
      }
      console.log("form values printin", FormData)
      return axios.request({
        method: "POST",
        url: "https://gorest.co.in/public/v1/todos?access-token=447d05a64b5028d1f062f596cfd3a6ed2f6dacd4c0c62adc35c85225db0d8a07",
        data: FormData
      })
    }
    
  return (
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Create Task</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  <Label>id</Label>
                    <input
                      type="text"
                      value={id}
                      placeholder="id"
                      onChange={(e) => setId(e.target.value)}/>
                </div>
                <div className='form-group'>
                  <Label>title</Label>
                    <input 
                    type="text"
                    value={title}
                    placeholder="title"
                    onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className='form-group'>
                  <Label>due on</Label>
                  <Calendar className='form-control'
                    onChange={onDateChange}
                    value={date}
                    showNeighboringMonth={false}
                    locale={"en-US"}
                />
                </div>

                <div className='form-group'>
                    <Label>status</Label>
                    <input 
                    type="text"
                    value={status}
                    placeholder="id"
                    onChange={(e) => setStatus(e.target.value)}/>

                </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle} type="submit">Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
  )
}
