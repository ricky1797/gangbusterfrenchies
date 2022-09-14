import React, {useState} from 'react';
import Header from '../components/Header'
import Intro from '../components/Intro'
import Contact from '../components/Contact'
import About from '../components/About'
import Navbar from "../components/NavBar"
import Footer from "../components/Footer"
import Sidebar from '../components/Sidebar';

function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };
    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Header/>
            <About/>
            <Intro/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Home
