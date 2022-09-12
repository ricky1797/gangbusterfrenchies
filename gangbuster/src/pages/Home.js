import React, { useState } from 'react';
import Header from '../components/Header'
import Intro from '../components/Intro'
import Contact from '../components/Contact'
import About from '../components/About'
import Navbar from "../components/NavBar"
import Footer from "../components/Footer"

function Home() {
    return (
        <div>
            <Navbar/>
            <Header/>
            <About/>
            <Intro/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Home
