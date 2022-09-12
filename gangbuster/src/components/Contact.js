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
<MainH1 data-aos='fade-right' className="Catamaran">We are all ears! </MainH1>
<MainContainer data-aos='zoom-in-up'>
<Form/>
    </MainContainer>
</Headerdiv>
  );
}

export default Contact;
