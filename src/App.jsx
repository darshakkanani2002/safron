import React from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/home/Home'
import Footer from './component/Footer'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Contact from './component/contact/Contact'
import About_us from './component/about/About_us'
import Technologies from './component/technologies/Technologies'
import Services from './component/services/Services'

function App() {

  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/technologies' element={<Technologies></Technologies>}></Route>
          <Route path='/about' element={<About_us></About_us>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/services' element={<Services></Services>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  )
}

export default App
