import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
export default function Form({ lead, email, setEmail, password, setPassword, onSubmit, error, invalidPass, invalidEmail }) {
     return (<>
          <div className='container m-5 Form max-w-lg-75'>
               <span className='lead'> { lead } </span>
               <form onSubmit={e => onSubmit(e)}>
                    <div className='row m-2'>
                         <label className='col-form-label'>Email</label>
                         <div>
                              <input 
                              type='email'
                              className='form-control'
                              id='email'
                              placeholder='Email'
                              name='email'
                              value={email}
                              required
                              onChange={e => setEmail(e.target.value)}
                         />
                         <p className='small' style={(error ? {display: 'block', color: 'red'} : {display: 'none'})}> { error && error } </p>
                         <p className='small' style={(invalidEmail ? {display: 'block', color: 'red'} : {display: 'none'})}> No users found. </p>
                         </div>
                    </div>
                    <div className='row m-2'>
                         <label className='col-form-label'>Password</label>
                         <div>
                              <input 
                              type='password'
                              className='form-control'
                              id='password'
                              placeholder='Password'
                              name='password'
                              autoComplete='off'
                              required
                              value={password}
                              onChange={e => setPassword(e.target.value)}
                         />
                         <p className='small' style={(invalidPass ? {display: 'block', color: 'red'} : {display: 'none'})}> Wrong password. </p>
                         </div>
                    </div>
                    <input type='submit' className='m-2 btn btn-success mt-4'/>
                    <Link className='m-2 mt-4 btn btn-danger'to='/'> Cancel </Link>
               </form>
          </div>
          </>)
}