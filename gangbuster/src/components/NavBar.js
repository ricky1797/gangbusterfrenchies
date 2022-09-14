import React, {useState, useEffect} from 'react'
import Image from '../images/gangbusters.png'
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
    NavbarContainer,
    NavbarInnerContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    Logo
} from "../components/styles/NavBarstyle"
const NavBar=({ toggle })=> {

const [extendNavbar, setextendNavbar] =useState(false);

    return (
        <IconContext.Provider value={{ color: '#fff' }}>
       <NavbarContainer extendNavbar={extendNavbar} >
       <NavbarInnerContainer>
       <NavLogo to='Top'>
               <Logo src={Image}></Logo>
               </NavLogo>
               <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to='Top' smooth={true} duration={100} spy={true} exact='true' offset={-80}>Home</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='About' smooth={true} duration={100} spy={true} exact='true' offset={-80}>About Us</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='RecentPups' smooth={true} duration={100} spy={true} exact='true' offset={-80}>Recent Posts</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='ContactForm' smooth={true} duration={200} spy={true} exact='true' offset={-80}>Contact</NavLinks>
                </NavItem>
            </NavMenu>
       </NavbarInnerContainer>
        </NavbarContainer>
       </IconContext.Provider>
    )
}

export default NavBar
