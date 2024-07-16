import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import axios from 'axios'
import useGetUser from '../hooks/useGetUser.js'
import Cookies from 'js-cookie'
export default function RenderPost({ posts, email }) {
     const user = useGetUser()
     return <>
     <div style = {{display:'flex', flexDirection: 'column-reverse', alignItems:'center', margin: '12px'}}>
     { posts.all_post ? posts.all_post.map((content, index) => {
          return <div
          style={{ 
               display: 'flex',
               flex: 'repeat(1, 1fr)',
               maxWidth: '400px',
               height: 'auto',
               alignItems:'center',
               marginTop: '3.5rem',
               padding: '5px'
          }}
          className='container card'
          key={index}>
          { content.image ? (<img 
               src={content.image} 
               alt='Cannot load image.'
               /> 
               ) : ''}
          <br/> 
          <blockquote className='blockquote'>
               <h3 className='mb-3'> { content.post } </h3>
               <p className="blockquote-footer"> Uploaded by user: <cite >{ email.filter(m => m._id === content.author)[0].email }</cite> </p>
          </blockquote>
          <p className='small text-muted mark'> On: { moment(content.createdAt).format('MMMM Do YYYY, h:mm:ss a') }.
          <span><Link 
          className='text-danger'
          to={`/${content._id}`}> Delete </Link></span>
          </p>
          </div>
     }) : <p> No post found </p>}
          </div>
     </>
     }