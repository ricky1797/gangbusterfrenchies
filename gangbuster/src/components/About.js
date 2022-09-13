import React, {useEffect} from 'react'
import Aos from 'aos';
import Image2 from '../images/frenchie.png'
import 'aos/dist/aos.css'
import {Headerdiv,
  Aboutwrapper,
  MainH1,
  Logo,
Ptag
} from './styles/Aboutstyle'

const About = () => {
  useEffect(() =>{
    Aos.init({duration: 1800});
    }, [])
  return (
    <Headerdiv className='About'>
      <MainH1 data-aos='zoom-in-down' data-aos-delay="300">
        About
      </MainH1>
      <Aboutwrapper>
      <Ptag data-aos='flip-left' data-aos-delay="300">
      Gangbuster Frenchies is family owned & operated. We are a well respected breeder located in SoCal and have been in the business for over five years.
      </Ptag>
      <Ptag data-aos='flip-right'>We are located one hour outside of Los Angeles. We provide the best French Bulldogs and English Bulldogs
      </Ptag>
      <Ptag data-aos='flip-left' data-aos-delay="300">
      Every puppy is monitored since birth to guarantee its health. 
      All puppies include full AKC, pedigree, and vaccination records
      </Ptag>
      <Ptag data-aos='flip-right'>
      Before finding a permanent home, every puppy gets cleared by a veterinarian to ensure its health upon relocation
      </Ptag>
      </Aboutwrapper>
      <Logo src={Image2}></Logo>
      </Headerdiv>
  )
}

export default About
