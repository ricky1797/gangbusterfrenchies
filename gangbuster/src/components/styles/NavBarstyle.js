import styled from 'styled-components';
import {Link} from 'react-router-dom';


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
width: 100%;
height: ${(props) => (props.extendNavbar ? '100vh' : '80px')};
color: white;
display: flex;
flex-direction: column;

@media (min-width: 700px) {
    height: 80px;
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
export const NavbarLink = styled(Link)`
color:white;
font-size: x-large;
text-decoration: none;
margin:10px;

@media(max-width: 700px){
    display:none;
}
`

export const ExtendedNavbarLink = styled(Link)`
color:white;
font-size: x-large;
text-decoration: none;
margin:10px;
`
export const Logo = styled.img`
margin: 0px;
width: 170px;
height: 130px;
`

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