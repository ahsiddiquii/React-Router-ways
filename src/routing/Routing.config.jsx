import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../components/Home/Home'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Params from '../components/User/Params'
const RoutingConfig = () => {
  return (
    <>
    {/* First way for React Routing  */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="about" element={<About/>} />
          <Route exact path="contact" element={<Contact/>} />
          <Route exact path="param/:id" element={<Params/>} />
        </Routes>
        <Home />
        <Footer />
      </BrowserRouter>
      
    </>
  )
}

export default RoutingConfig