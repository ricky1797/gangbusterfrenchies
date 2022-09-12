import styled from 'styled-components'

export const Headerdiv = styled.div`
height: 100vh;
background:radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 1) 0%, rgba(193, 193, 193, 1) 99%);
padding: 0 24px;
`
export const MainContainer = styled.div`
align-items: center;
padding: 0 5px;
height: 100vh;
`

export const MainH1= styled.h1`
font-family: 'Quicksand', sans-serif;
font-size: 80px;
margin-top:0px;
color: #F47D14;
text-decoration-line: underline;
text-decoration-style: solid;
text-decoration-color:black;
 
@media (max-width: 700px) {
    font-size: 50px;
  }

  @media (max-width: 420px) {
    font-size: 40px;
  }
  @media (max-width: 375px) {
    font-size: 30px;
  }
`