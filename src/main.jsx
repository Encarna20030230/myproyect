import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home'
import './components/Home.css'
import Navbar from './components/Navbar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    < Navbar />
    < Home />

  </React.StrictMode>,
)
