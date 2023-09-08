import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home'
import './components/Home.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    < Navbar />
    < Home />
    < Footer />

  </React.StrictMode>,
)
