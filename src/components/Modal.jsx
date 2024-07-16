import React from 'react';
import { useNavigate } from 'react-router-dom'
import '../App.css'
export default function Modal() {

     const navigate = useNavigate()

     return (<div className='card container'style={{
          width: '300px',
          height: '250px',
          zIndex: '1',
          position: 'fixed',
          left: '50%',
          top: '20%',
          textAlign: 'center',
          transform: 'translateX(-50%)',
          display: 'flex',
          justifyContent: 'center'
     }}>
          <button 
          onClick={e => navigate('/')}
          style={{
               position: 'absolute',
               top: '5%',
               left: '85%'
          }}
          type="button" class="btn-close" aria-label="Close"></button>
          <h1 style={{color: 'green'}}> SignUp Successfully </h1>
          <p> Please log in. </p>
          <a href='/login'>Login page.</a>
          </div>)
}
