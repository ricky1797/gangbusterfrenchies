import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';


/*Colors
Darker Orange: #F47D14
Orange: #F7941E
Grey: #414042
Black: #111010
Slightly light Black: #231F20
Pink: #F28383


*/
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
export const LeftContainer = styled.div`
flex: 30%;
display: flex;
align-items:center;
padding-left: 5%;

`
export const RightContainer = styled.div`
flex: 70%;
display: flex;
justify-content: flex-end;
padding-right: 50px;
align-items:center;
`
export const NavbarInnerContainer = styled.div`
width:100%;
height:90px;
display: flex;

`
export const NavBarLinkContainer = styled.div`
display: flex;

`

export const NavbarScroll = styled(LinkS)`
cursor: pointer;
color:white;
text-decoration: none;
margin:10px;
font-size: 1.3rem;
&:hover {
    transition: all 0.2s ease-in-out;
    color: #F7941E;
  }
@media(max-width: 700px){
    display:none;
}
`

export const ExtendedNavbarScroll = styled(LinkS)`
color:white;
font-size: 1.3rem;
text-decoration: none;
margin:10px;
&:hover {
    transition: all 0.2s ease-in-out;
    color: #F7941E;
  }

`
export const Logo = styled.img`
margin: 0px;
width: 170px;
height: 130px;

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


export const OpenLinks = styled.button`
background: none;
border:none;
color:white;
cursor:pointer;

@media(min-width: 700px){
    display:none;
}

`

export const NavbarExtendedContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
transition: all 850ms ease-in-out;
&.content{
    height:0;
    overflow:hidden;
    
}
&.showContent {
height: 700px;
overflow-y: scroll;
}
@media(min-width: 700px){
    display:none;
}
`