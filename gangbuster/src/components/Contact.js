import React, {useEffect} from 'react';
import Form from '../components/Form'
import Aos from 'aos';
import 'aos/dist/aos.css'
import {
    Headerdiv,
    MainContainer,
    MainH1
} from '../components/styles/Contactstyle'

const Contact = () => {
  useEffect(() =>{
    Aos.init({duration: 1800});
    }, [])
  return (
<Headerdiv className='ContactForm'> 
<MainH1 data-aos='fade-right' data-aos-delay="300" className="Catamaran">We are all ears! </MainH1>
<MainContainer data-aos='flip-right' data-aos-delay="300">
<Form/>
    </MainContainer>
</Headerdiv>
  );
}

export default Contact;
