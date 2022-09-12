import React, {useState, useEffect} from 'react'
import Image from '../images/gangbusters.png'
import {Divide as Hambuger} from 'hamburger-react'
import { animateScroll as scroll } from 'react-scroll';
import {NavbarContainer,
    LeftContainer,
    RightContainer,
    NavbarInnerContainer,
    NavbarExtendedContainer,
    NavBarLinkContainer,
    NavbarScroll,
    NavLogo,
    ExtendedNavbarScroll,
    OpenLinks,

    Logo
} from "../components/styles/NavBarstyle"
const NavBar=({ isOpen, toggle })=> {

const [extendNavbar, setextendNavbar] =useState(false);
    return (
       <NavbarContainer extendNavbar={extendNavbar} className="Container">
           <NavbarInnerContainer>
           <LeftContainer>
           <NavLogo to='Top'>
               <Logo src={Image}></Logo>
               </NavLogo>
           </LeftContainer>
           <RightContainer>
               <NavBarLinkContainer>
               <OpenLinks>
                   <Hambuger toggled={extendNavbar} toggle={setextendNavbar} size={30}/>
                        </OpenLinks>
                   <NavbarScroll to='Top' smooth={true} duration={200}> Home</NavbarScroll>
                   <NavbarScroll to='About' smooth={true} duration={200} offset={-80}> About Us</NavbarScroll>
                   <NavbarScroll to='RecentPups' smooth={true} duration={200} offset={-80}> Recent Posts</NavbarScroll>
                   <NavbarScroll to='ContactForm' smooth={true} duration={200} offset={-80}> Contact</NavbarScroll>
               </NavBarLinkContainer>
               </RightContainer>
           </NavbarInnerContainer>
           <NavbarExtendedContainer className={extendNavbar ? 'showContent content' : 'content'}>
                   <ExtendedNavbarScroll to='Top'> Home</ExtendedNavbarScroll>
                   <ExtendedNavbarScroll to='About' offset={-80}> About Us</ExtendedNavbarScroll>
                   <ExtendedNavbarScroll to='RecentPups'offset={-80}> Recent Posts</ExtendedNavbarScroll>
                   <ExtendedNavbarScroll to='ContactForm' offset={-80}> Contact</ExtendedNavbarScroll>
           </NavbarExtendedContainer>
       </NavbarContainer>
    )
}

export default NavBar
