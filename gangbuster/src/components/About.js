import React, {useEffect} from 'react'
import Aos from 'aos';
import Image2 from '../images/frenchie.png'
import 'aos/dist/aos.css'
import {Headerdiv,
  Aboutwrapper,
  MainH1,
  Logo,
  CuteDog,
Ptag
} from './styles/Aboutstyle'

const About = () => {
  useEffect(() =>{
    Aos.init({duration: 1800});
    }, [])
  return (
    <Headerdiv className='About'>
      <MainH1 data-aos='fade-right'>
        About
      </MainH1>
      <Aboutwrapper data-aos='zoom-in-up'>
      <Ptag>
      Gangbusters Frenchies a well respected breeder in SoCal, we are an AKC certified dog breeder located one 
hour outside of Los Angeles.
</Ptag>
<Ptag>
We strive in excellence, every puppy is monitored throughout its stay with us to gurantee its health.
Our mission is not only to deliver a healthy french bulldog but as well a good loking one.
      </Ptag>
      </Aboutwrapper>
      <Logo src={Image2}></Logo>
      </Headerdiv>
  )
}

export default About
