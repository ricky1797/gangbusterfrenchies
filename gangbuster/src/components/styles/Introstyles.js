import styled from 'styled-components'

export const Headerdiv = styled.div`
height: 100vh;
padding: 0 24px;
background:radial-gradient(circle at 0% 95%, #497189 0%, #5786A3 24%, #3C5C70 58%, #2E4756 100%); //blue
`
export const InstagramWrapper = styled.div`
width: 100%;
margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
`
export const MainH1 = styled.h1`
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