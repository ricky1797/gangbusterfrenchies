import React, {useState} from 'react'
import Image from '../images/gangbusters.png'
import {Divide as Hambuger} from 'hamburger-react'
import {NavbarContainer,
    LeftContainer,
    RightContainer,
    NavbarInnerContainer,
    NavbarExtendedContainer,
    NavBarLinkContainer,
    NavbarLink,
    OpenLinks,
    ExtendedNavbarLink,
    Logo
} from "../components/styles/NavBarstyle"
function NavBar() {

const [extendNavbar, setextendNavbar] =useState(false);

    return (
       <NavbarContainer extendNavbar={extendNavbar} className="Container">
           <NavbarInnerContainer>
           <LeftContainer>
               <Logo src={Image}></Logo>
           </LeftContainer>
           <RightContainer>
               <NavBarLinkContainer>
               <OpenLinks>
                   <Hambuger toggled={extendNavbar} toggle={setextendNavbar} size={30}/>
                        </OpenLinks>
                   <NavbarLink to='/'> Home</NavbarLink>
                   <NavbarLink to='/available'> Available Pups</NavbarLink>
                   <NavbarLink to='/aboutus'> About Us</NavbarLink>
                   <NavbarLink to='/faq'> FAQ</NavbarLink>
               </NavBarLinkContainer>
               </RightContainer>
           </NavbarInnerContainer>
           <NavbarExtendedContainer className={extendNavbar ? 'showContent content' : 'content'}>
                   <ExtendedNavbarLink to='/'> Home</ExtendedNavbarLink>
                   <ExtendedNavbarLink to='/available'> Available Pups</ExtendedNavbarLink>
                   <ExtendedNavbarLink to='/aboutus'> About Us</ExtendedNavbarLink>
                   <ExtendedNavbarLink to='/faq'> FAQ</ExtendedNavbarLink>
           </NavbarExtendedContainer>
       </NavbarContainer>
    )
}

export default NavBar
