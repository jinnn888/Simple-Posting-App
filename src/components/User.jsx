import React, { useState, useEffect } from 'react'
import axios from 'axios'
import useGetUser from '../hooks/useGetUser.js'
import RenderPosts from './RenderPosts.jsx'
export default function User({ posts }) {

     const [ users, setUsers ] = useState(null)
     const [ loading, setLoading ] = useState(false)
     const [ postId, setPostId] = useState(null)
     const user = useGetUser()
     useEffect(() => {
          setLoading(true)
          axios.get('https://simple-posting-app-api.vercel.app/api/profile')
          .then((res) => {
               setUsers(res.data)
               setLoading(false)
          }).catch((err) => { 
               console.log(err)
          });
     }, [])
     return <>
     { loading && <p> Loading... </p> }
     { users && <RenderPosts posts={posts} email={users}/>}
     </>
}