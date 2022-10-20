// import { Fragment } from 'react'
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import './App.css'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Productos from "./pages/Productos"
import Nosotros from './pages/Nosotros'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'
import ScrollToTop from 'react-scroll-to-top'
import AOS from 'aos'
import 'aos/dist/aos.css';

function App() {

  useEffect(()=> {
    AOS.init({duration: 1500, once: true})
  }, [])

  return (
    <Router>
      <div className="App">
        <ScrollTop />
        <Navbar />
          <Routes>
            <Route path="" element={ <Home />} />
            <Route path="/productos" element={ <Productos/>} />
            <Route path="/nosotros" element={ <Nosotros />} />
          </Routes>
        <Footer />
        <ScrollToTop className="scroll" smooth color="#9C0645" width='15px' />
      </div>
    </Router>
  )
}

export default App
