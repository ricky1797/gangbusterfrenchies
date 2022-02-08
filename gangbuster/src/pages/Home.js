import React from 'react'
import Header from '../components/Header'
import Parents from '../components/Parents'
import Intro from '../components/Intro'
import Contact from '../components/Contact'

function Home() {
    return (
        <div>
            <Header/>
            <Intro/>
            <Parents/>
            <Contact/>
        </div>
    )
}

export default Home
