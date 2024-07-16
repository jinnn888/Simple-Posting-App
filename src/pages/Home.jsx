import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Feed from './Feed.jsx'
import MobileNav from '../components/MobileNav.jsx'
import Navbar from '../components/navbar.jsx'
import { useCookies } from 'react-cookie'
export default function Home({showFeedControls, setShowFeedControls}) {
  const [cookie, setCookie] = useCookies(['access_token'])

     return (<>
          { cookie.access_token ? 
          (<><Feed /></> ) : (
               <div style={{width: '100%', textAlign: 'center'}}>
               <h1> Create/Login an account. </h1>
               </div>
               )}  
               </>
               )
}