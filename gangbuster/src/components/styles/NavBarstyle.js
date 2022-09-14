import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';


/*Colors
Darker Orange: #F47D14
Orange: #F7941E
Grey: #414042
Black: #111010
Slightly light Black: #231F20
Pink: #F28383


*/
export const Logo = styled.img`
margin: 0px;
width: 170px;
height: 130px;

`

export const NavbarContainer = styled.nav`
background:radial-gradient(circle at 0% 95%, #497189 0%, #5786A3 24%, #3C5C70 58%, #2E4756 100%);
font-family: 'Kumbh Sans', sans-serif;
width: 100%;
height: ${(props) => (props.extendNavbar ? '100vh' : '80px')};
color: white;
justify-content: center;
display: flex;
align-items: center;
flex-direction: column;
padding: 0 24px;
position: sticky;
top: 0;
z-index: 10;
@media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }

`
export const NavbarInnerContainer = styled.div`
width:100%;
height:90px;
display: flex;

`
export const NavLogo = styled(LinkS)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
height: 80px;
`;

export const NavLinks = styled(LinkS)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
  border-bottom: 3px solid #F7941E;
}
&:hover {
  color: #F7941E;
}
`;