import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import Cookies from 'js-cookie'
export default function Navbar(props) {
     const [cookie, setCookie] = useCookies(['access_token'])

     const logout = () => {
          Cookies.remove('access_token');
          window.localStorage.removeItem('access_ID')
     }

     return (
          <nav className={`navbar navbar-inverse ${ props.showFeedControls ? 'activenav' : '' }`}>
               <button 
                    onClick={e => props.setShowFeedControls(false)}
                    style={{ display: 'none'}}
                    className='btn close activebtn' 
                    aria-label="Close">
                    <span className='text-danger fs-4 fw-bold close-text'aria-hidden="true">&times;</span> 
               </button>
               {/* Nav header */}
               <div className='container nav-container'>
                    <div className='navbar-header'>
                         <a className='navbar-brand text-danger' style={{fontWeight: 'bold'}}href='/'> BY </a> 
                         <span className=''> — <cite>JynJo</cite> </span>
                    </div>
                    { cookie.access_token ? (<button className='btn btn-dark' onClick={logout}> Log out </button>) 
                    : <ul className='nav'>
                         <li className='nav-item'>
                              <Link to='/sign-up' className='nav-link'>Sign Up</Link>
                         </li>
                         <li className='nav-item'>
                              <Link to='/login'className='nav-link'>Log In</Link>
                         </li>
                    </ul>}
               </div>
               
          </nav>
          )
}