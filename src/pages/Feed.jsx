import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PostForm from '../components/PostForm.jsx'
import useGetUser from '../hooks/useGetUser.js'
import User from '../components/User.jsx'
import Navbar from '../components/navbar.jsx'
import path from 'path'
import MobileNav from '../components/MobileNav.jsx'

export default function Feed() {
     const [ showForm, setShowForm ] = useState(false)
     const [ post, setPost ] = useState('')
     const [ image, setImage ] = useState('')
     const [ getPost, setGetPost ] = useState([])
     const [ initialval, setInitialVal] = useState()
     const [ showFeedControls, setShowFeedControls ] = useState(true)
     let user = useGetUser()
     // Get all post
     useEffect(() => {
          axios.get('http://localhost:8000/api/post')
          .then(res => {
               setGetPost(res.data)
          })
          .catch((err) => {
               console.log(err)
          })
     }, [initialval])

     const onSubmit = (e) => {
          e.preventDefault()
          axios.post('http://localhost:8000/api/post', { 
               name: 'Guest',
               post: post,
               image: image
          }, {
               headers: {
                    'Authorization': `Bearer ${user}`
               }
          })
          .then(res => {
               setInitialVal(res.data)
               setGetPost({...initialval, initialval})
               setShowForm(false)
          })
          .catch((err) => {
               console.log(err)
          })
     }
     // const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
     // const __dirname = path.dirname(__filename); // get the name of the directory

     return (<center>
          { user &&  
          <>
          <h1> Feed </h1>
          <button onClick={e => setShowForm(!showForm)} className='feed-btn btn btn-dark '> Post </button>
          <PostForm 
          showForm={showForm} 
          setShowForm={setShowForm}
          onSubmit={onSubmit}
          post={post}
          setPost={setPost}
          setImage={setImage}
          /> 
          <User posts={getPost} />
          </>
     }

     </center>)
}
