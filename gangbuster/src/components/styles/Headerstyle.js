import styled from 'styled-components'
import bg from '../../images/main.jpg'
import {Link} from 'react-scroll'

export const Headerdiv = styled.div`
height: 100vh;
padding: 0 24px;
background: url(${bg}) no-repeat center fixed ;
background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
opacity: 1;
top: 0;
right: 0;
left: 0;

@media screen and (max-width: 768px) {
  background-size:300px
  }
  @media screen and (max-width: 400px) {
    background-size:300px
  }
`

export const MainContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 100vh;
`
export const MainH1 = styled.div`
font-size:20px;
@media screen and (max-width: 768px) {
  font-size:15px;
  }
  @media screen and (max-width: 400px) {
  font-size:13px;
  }
`

export const MainBg = styled.div`
position: relative;
height: 20vh;
color: #fff;
z-index:1;
`
export const MainContent= styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`

export const MainBtnWrapper= styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;
`

export const Button = styled(Link)`
outline: none;
border: none;
display: flex;
justify-content: center;
align-items: center;
white-space: nowrap;
font-size:20px;
border-Radius: 50px;
padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
color: ${({dark}) => (dark ? '#fff' : '#00000')};
background: ${({primary}) => (primary ? 'radial-gradient(circle at 0% 95%, #497189 0%, #5786A3 24%, #3C5C70 58%, #2E4756 100%)' : '#2E4756')};
&:hover{
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? 'radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 1) 0%, rgba(193, 193, 193, 1) 99%);' : '#9FA2B2')};
    color: ${({dark}) => (dark ? '#000000' : '#000000')};
}
`
