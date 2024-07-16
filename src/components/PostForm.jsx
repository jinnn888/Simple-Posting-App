import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export default function PostForm(props) {
     
     const navigate = useNavigate()

     return (<>
          <div 
          style={(
               props.showForm ? {zIndex: '1', transition: '.6s', position: 'fixed', top: '0' } : {transition: '.4s', position: 'fixed', top: '-100%' }
               )}

          className='card container m-5 modalStyle'>
               <button 
               onClick={e => props.setShowForm(false)}
               style={{
                    position: 'absolute',
                    top: '5%',
                    left: '3%'
               }} type="button" className="btn-close" aria-label="Close"> </button>
               <span className='lead'>  </span>
               <form onSubmit={props.onSubmit} encType='multipart/form-data'>
                    <div className='row m-2'>
                         <label className='col-form-label'>Write a post . </label>
                         <div className='container'>
                              <textarea 
                              required
                              value={props.post}
                              onChange={e => props.setPost(e.target.value)}
                              className='form-control mb-4'
                              name='post'
                              placeholder='Make a post here...'></textarea>
                              <label 
                              className='col-form-label'>Add an image (Optional) </label>
                              <input 
                              type='text' 
                              onChange={e => props.setImage(e.target.value)}
                              name='image'
                              className='form-control'
                              />
                         </div>
                    </div>
                    <input type='submit' className='m-2 btn btn-success mt-4'/>
               </form>
          </div>
          </>)
}