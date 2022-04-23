import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label} from 'reactstrap'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import axios from "axios"

export default function EditTask({modal, toggle, data}) {
  // const [taskname, setTaskname] = useState('')
  // const [description, setDescription] = useState('')
  const [date, setDate] = useState(new Date())
//   const [id, setId] = useState('')
//   setId(data.user_id)
  const onDateChange = (newDate) => {
    setDate(newDate);
    console.log(newDate);
}
    const [formValue, setformValue] = React.useState({
      id: '',
      title: '',
      status: ''
    })
    const handleSubmit = (event) => {
      const FormData =  {
      id:formValue.id,
      title: formValue.title,
      due_on: date,
      status: formValue.status
      }
      console.log("form values printin", FormData)
      return axios.request({
        method: "PUT",
        url: `https://gorest.co.in/public/v1/todos/${data.user_id}?access-token=447d05a64b5028d1f062f596cfd3a6ed2f6dacd4c0c62adc35c85225db0d8a07`,
        data: FormData
      })
    }
    
    
  
    const handleChange = (event) => {
      setformValue({
        ...formValue,
        [event.target.name]: event.target.value
      });
    }
  return (
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Create Task</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  <Label>id</Label>
                    <input type="text" className='form-control' 
                    onChange={handleChange} name = "id" value={data.user_id}/>
                </div>
                <div className='form-group'>
                  <Label>title</Label>
                    <input type="text" className='form-control' 
                    onChange={handleChange} name = "title" value={data.title}/>
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
                    <input type="text" className='form-control'  
                    onChange={handleChange} name = "status" value={formValue.status}/>

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
