import React, {useState} from 'react'
import Image from '../images/gangbusters.png'
import {Divide as Hambuger} from 'hamburger-react'
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
                   <NavbarScroll to='Top' smooth={true} duration={0}> Home</NavbarScroll>
                   <NavbarScroll to='About' smooth={true} duration={0} offset={-80}> About Us</NavbarScroll>
                   <NavbarScroll to='RecentPups' smooth={true} duration={0} offset={-80}> Recent Posts</NavbarScroll>
                   <NavbarScroll to='ContactForm' smooth={true} duration={0} offset={-80}> Contact</NavbarScroll>
               </NavBarLinkContainer>
               </RightContainer>
           </NavbarInnerContainer>
           <NavbarExtendedContainer className={extendNavbar ? 'showContent content' : 'content'}>
                   <ExtendedNavbarScroll to='Top' smooth={true} duration={0}> Home</ExtendedNavbarScroll>
                   <ExtendedNavbarScroll to='About' smooth={true} duration={0} offset={-80}> About Us</ExtendedNavbarScroll>
                   <ExtendedNavbarScroll to='RecentPups' smooth={true} duration={0} offset={-80}> Recent Posts</ExtendedNavbarScroll>
                   <ExtendedNavbarScroll to='ContactForm' smooth={true} duration={0} offset={-80}> Contact</ExtendedNavbarScroll>
           </NavbarExtendedContainer>
       </NavbarContainer>
    )
}

export default NavBar
