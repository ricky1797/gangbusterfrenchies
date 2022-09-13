import React,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import {
    Headerdiv,
    InstagramWrapper,
    MainH1
} from '../components/styles/Introstyles'

function Intro() {
  useEffect(() =>{
    Aos.init({duration: 1800});
    }, [])
  return (
      <Headerdiv className='RecentPups'>
        <MainH1 data-aos='fade-right' data-aos-delay="300">Recent Posts</MainH1>
        <InstagramWrapper data-aos='flip-left' data-aos-delay="300">
        <div class="elfsight-app-4db24dfc-8877-42a0-82d8-8342a8274077"></div>
        </InstagramWrapper>
      </Headerdiv>
  );
}

export default Intro;
