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
import Terms_condition from './component/terms_condition/Terms_condition'
import Faq from './component/faq/Faq'
import Privacy_policy from './component/privacy_policy/Privacy_policy'

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
          <Route path='/term' element={<Terms_condition></Terms_condition>}></Route>
          <Route path='/faq' element={<Faq></Faq>}></Route>
          <Route path='/privacypolicy' element={<Privacy_policy></Privacy_policy>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  )
}

export default App
