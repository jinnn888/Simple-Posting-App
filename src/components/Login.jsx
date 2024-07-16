import React, { useState, useEffect } from 'react'
import Form from './Form.jsx'
import Modal from './Modal.jsx'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Login() {
     // add to cookie: User's token
     // add to localstorage User's id
     const [cookies, setCookies] = useCookies(['access_token'])
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const [invalidPass, setInvalidPass] = useState(null)
     const [invalidEmail, setInvalidEmail] = useState(null)

     const navigate = useNavigate()
     const onSubmit = (e) => {
          e.preventDefault()
          setInvalidPass(null)
          setInvalidEmail(null)
          axios.post(`${process.env.BASE_URL}/api/login`, {
               name: 'Guest',
               email,
               password
          })
          .then(res => {
               setCookies('access_token', res.data.token, { path: '/' })
               window.localStorage.setItem('access_ID', JSON.stringify(res.data._id))
               navigate('/')
          })
          .catch((err) => {
               if (err.response.data.error === 'Invalid password.') {
                    setInvalidPass(true)
               }else if (err.response.data.error === 'Email (user) not found.') {
                    setInvalidEmail(true)
               } 
          })
     }
     return (<>
          <Form 
               lead='Login'
               email={email}
               setEmail={setEmail}
               password={password}
               setPassword={setPassword}
               onSubmit={onSubmit}
               invalidPass={invalidPass}
               invalidEmail={invalidEmail}
          />
          </>)
}