import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import SignUp from './components/SignUp.jsx'
import Login from './components/Login.jsx'
import Navbar from './components/navbar.jsx'
import MobileNav from './components/MobileNav.jsx'
import Delete from './components/DeletePost.jsx'
import { useCookies } from 'react-cookie'

import './App.css'
function App() {
  const [ showFeedControls, setShowFeedControls ] = useState(false)
  return (<>
    <Router>
    <MobileNav showFeedControls={showFeedControls} setShowFeedControls={setShowFeedControls} />
    
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/sign-up' element={<SignUp />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/:id' element={<Delete />}/>
    </Routes>
    </Router>

    </>
    )

}

export default App
