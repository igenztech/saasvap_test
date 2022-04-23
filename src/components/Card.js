import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Table, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import EditTask from '../modals/EditTask'

export default function Card() {
    const [modal, setModal] = useState(false)
    const [posts, setPosts] = useState([]);
    const toggle = () => {
        setModal(!modal)
    }
// const editProduct = () =>{
    
// }
const deleteProduct = (id) => {
    axios.request({
        method: "DELETE",
        url: `https://gorest.co.in/public/v1/todos/${id}?access-token=447d05a64b5028d1f062f596cfd3a6ed2f6dacd4c0c62adc35c85225db0d8a07`
      })

}
useEffect(() => {
    axios.get('https://gorest.co.in/public/v1/users/ 1800 /todos?access-token=447d05a64b5028d1f062f596cfd3a6ed2f6dacd4c0c62adc35c85225db0d8a07').then((res) => {
       
    setPosts(res.data.data);
        console.log(posts);
    })
},[ ]);
  return (
    <>
    <div>
      {
        posts && posts.map(data=>{
          return(
            <div key={data.id} style={{alignItems:'center',margin:'20px 60px'}}>
            <h4>{data.title}</h4>
            <p>{data.status}</p>
            <Table>
            <thead>
              <tr>
                <th>#ID</th>
                <th>Title</th>
                <th>status</th>
                <th>Due Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                <tr key={data.id}>
                  <td>{data.user_id}</td>
                  <td>{data.title}</td>
                  <td>{data.status}</td>
                  <td>{data.due_on}</td>
                  <td>
                    <Button variant="info" onClick={() => setModal(true)}>Edit</Button>
                    &nbsp;<Button variant="danger" onClick={() => deleteProduct(data.user_id)}>Delete</Button>
                  </td>
                </tr>
            </tbody>
            </Table>
          </div>
          )

        })
      }
     
    </div>
    {posts.map(data => (
    <EditTask toggle = {toggle} modal = {modal} data = {data} />
    ))}
</>
    
  )
}
