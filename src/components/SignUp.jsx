import React, { useState } from 'react'
import Form from './Form.jsx'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Modal from './Modal.jsx'
export default function SignUp() {
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const [error, setError] = useState(null)
     const [created, setCreated] = useState(false)
     const navigate = useNavigate('')
     const onSubmit = (e) => {
          e.preventDefault()
          setError(null)
          axios.post('http://localhost:8000/api/register', {
               name: 'Guest',
               email: email,
               password: password,
          })
          .then(res => {
               console.log(res)
               setCreated(true)
          })
          .catch((err) => {
               setError(err.response.data.error)
               console.log(err)
          })
     }
     return (<>
          {created && <Modal />}
          <Form 
               lead=' Create an account '
               email={email}
               setEmail={setEmail}
               password={password}
               setPassword={setPassword}
               onSubmit={onSubmit}
               error={error}
          />
          </>)
}