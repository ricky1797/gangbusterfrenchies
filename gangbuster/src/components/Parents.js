import React, {useEffect} from 'react'
import Parent1 from '../images/Mom.png'
import Parent2 from '../images/Dad.png'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Headerdiv,
    MainContainer,
    MainContent,
    MainH1,
    Row,
    Column,
    Parentsimg,
    Paragraph,
    Miniparagraph,
    UList
 } from './styles/Parentsstyle'

const Parents = () =>{
    useEffect(() =>{
        Aos.init({duration: 1800});
        }, [])
    return (
      <Headerdiv>
          <MainContainer className='Parents'>
              <MainContent data-aos='fade-right'>
                  <MainH1 className="Catamaran">Meet the Parents!</MainH1>
              </MainContent>
          </MainContainer>
          <Row className='Maincontainer'>
              <Column>
                  <Parentsimg data-aos='flip-right' src={Parent1}/>
                  <Paragraph data-aos='slide-right'>Olive
                      <Miniparagraph className='Container' >
                          <UList>Pretty Tan tri</UList>
                          <UList>She weighs 21 lbs</UList>
                          <UList>She is known for being very sweet and playful</UList>
                      </Miniparagraph>
                      </Paragraph>
                  </Column>
              <Column><Parentsimg data-aos='flip-right' src={Parent2}/>
              <Paragraph data-aos='slide-right'>Micro Louie
              <Miniparagraph className='Container' >
                          <UList>Beautiful Blue Lilac</UList>
                          <UList>He weighs 13 lbs</UList>
                          <UList></UList>
                      </Miniparagraph>
              </Paragraph>
              </Column>
              </Row>

      </Headerdiv>
    )
}

export default Parents
