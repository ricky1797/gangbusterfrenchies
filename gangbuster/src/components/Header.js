import React, { useEffect } from 'react'
import TypeWriterEffect from 'react-typewriter-effect';
import {Headerdiv,
    MainContainer,
    MainBg,
    Button,
    MainBtnWrapper,
    MainContent
 } from './styles/Headerstyle'

const Header= () => {
    return (
        <Headerdiv>
            <MainContainer>
                <MainBg className='Container'>
                    <TypeWriterEffect
                    startDelay={140}
                    hideCursorAfterText={true}
                    cursorColor="white"
                    text="Frenchies in LA!"
                    typeSpeed={70}/>
                </MainBg>
                <MainContent>
                <MainBtnWrapper>
                <Button to='ContactForm'primary='true' dark='true' fontBig='true'>Contact Us</Button>
                </MainBtnWrapper>
                </MainContent>
            </MainContainer>
        </Headerdiv>
    )
}

export default Header
