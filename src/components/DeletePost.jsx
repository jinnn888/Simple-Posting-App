import { useEffect } from 'react'
import axios from 'axios'
import { Link, useParams, useNavigate } from 'react-router-dom'
import useGetUser from '../hooks/useGetUser.js'


export default function Delete() {
     const BASE_URL = import.meta.env.BASE_URL
     const { id } = useParams()
     let user = useGetUser()
     let navigate = useNavigate()
     useEffect(() => {
          axios.delete(`https://simple-posting-app-api.vercel.app/api/post/${id}`, {
               headers: {
                    'Authorization': `Bearer ${user}`
               }
          }).then((res) => {
               navigate('/')
          })
          .catch((err) => {
               alert("Unauthorized: Cannot delete post that is not yours.")
               navigate('/')
          })

     }, [])
     return <center>
          <h1>Deleting </h1>
     </center>
}