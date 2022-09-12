import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';
import {Headerdiv,
    MainContainer,
    MainBg,
    MainH1,
    Button,
    MainBtnWrapper,
    MainContent
 } from './styles/Headerstyle'

const Header= () => {
    return (
        <Headerdiv className='Top'>
            <MainContainer>
                <MainBg className='Container'>
                    <MainH1>
                    <TypeWriterEffect
                    startDelay={1000}
                    hideCursorAfterText={true}
                    cursorColor="white"
                    text="Looking for Frenchies?!"
                    typeSpeed={80}/>
                     </MainH1>
                </MainBg>
                <MainContent>
                <MainBtnWrapper>
                <Button to='ContactForm'primary='true' dark='true' fontBig='true' offset={-80}>Contact Us</Button>
                </MainBtnWrapper>
                </MainContent>
            </MainContainer>
        </Headerdiv>
    )
}

export default Header
