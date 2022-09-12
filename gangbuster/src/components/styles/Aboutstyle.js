import styled from 'styled-components';


export const Headerdiv =styled.div`
height: 100vh;
padding: 0 5px;
background:radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 1) 0%, rgba(193, 193, 193, 1) 99%); //grey
`
export const Aboutwrapper=styled.div`
width: 100%;
margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
`
export const MainH1 = styled.h1`
padding: 0 24px;
font-family: 'Quicksand', sans-serif;
font-size: 80px;
margin-top:0px;
color: #F47D14;
text-decoration-line: underline;
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

export const Ptag = styled.p`

`

export const Logo = styled.img`
float:right;
width: 170px;
height: 130px;

`