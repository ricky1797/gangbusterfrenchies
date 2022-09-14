import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from '../components/styles/Sidebarstyle';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='Top' smooth={true} duration={100} spy={true} exact='true' offset={-80}>Home</SidebarLink>
          <SidebarLink to='About' smooth={true} duration={100} spy={true} exact='true' offset={-80}>About Us</SidebarLink>
          <SidebarLink to='RecentPups' smooth={true} duration={100} spy={true} exact='true' offset={-80}>Recent Posts</SidebarLink>
          <SidebarLink to='ContactForm' smooth={true} duration={200} spy={true} exact='true' offset={-80}>Contact</SidebarLink>
          </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar