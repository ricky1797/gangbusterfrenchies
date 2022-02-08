import styled from 'styled-components';
/*
#ECECEF White
#242021 Black
#F48A19 Orange
#8C8C8E Grey
#CF6667 Salmon

*/
export const Headerdiv = styled.div`
height: 100vh;
background:radial-gradient(circle at 0% 95%, #497189 0%, #5786A3 24%, #3C5C70 58%, #2E4756 100%);
`
export const MainContainer = styled.div`
position: relative;
z-index:1;
`
export const MainContent= styled.div`
position: relative;
display: flex;
padding: 0px;
`

export const MainH1= styled.h1`
font-size: 80px;
margin-top:0px;
color: white;
text-decoration-line: underline;
text-decoration-style: solid;
text-decoration-color: radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 1) 0%, rgba(193, 193, 193, 1) 99%);
 



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

export const Row= styled.div`
clear: both;
display:flex;


@media (max-width: 700px) {
      display: inline-block;
  }

  @media (max-width: 420px) {
    display: inline-block;
  }
  @media (max-width: 375px) {
    display: inline-block;
  }

`
export const Column= styled.div`

  display: flex;
  align-items: center;
 width: 70%;
    float: left;
    padding: 20px;
`
export const Parentsimg = styled.img`
margin: 0px;
width: 250px;
height: 350px;
border-radius: 4%;
border: 1px solid #999;
background-color: #fcfcfc;
	padding: 4px;


@media (max-width: 700px) {
    width: 200px;
height: 240px;
  }

  @media (max-width: 420px) {
    width: 180px;
height: 230px;
  }
  @media (max-width: 375px) {
    width: 160px;
height: 180px;
  }
`

export const Paragraph = styled.p`
padding:10px;
font-size:50px;
color:white;


@media (max-width: 700px) {
    padding:5px;
    font-size: 45px;
  }

  @media (max-width: 420px) {
    font-size: 35px;
  }
  @media (max-width: 375px) {
    font-size: 35px;
  }
`
export const Miniparagraph = styled.p`
padding:10px;
font-size:25px;
color:white;
width:100%;


@media (max-width: 700px) {
  padding:5px;
    font-size: 20px;
  }

  @media (max-width: 420px) {
    font-size: 18px;
  }
  @media (max-width: 375px) {
    font-size: 15px;
  }
`
export const UList = styled.li`
list-style: none;
`