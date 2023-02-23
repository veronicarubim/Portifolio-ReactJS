import React from 'react'
import { Container, Div, Image, Title } from './ContatosStyle'
import github from '../../assets/github.png';
import twitter from '../../assets/twitter.png';
import ig from '../../assets/ig.png';
import linkedin from '../../assets/linkedin.png';
import wpp from '../../assets/wpp.png';

const Contatos = () => {
  return (
    <Container>
      <Title>Contatos</Title>
      <Div>
            <Image src={github}/>
            <Image src={twitter}/>
            <Image src={ig}/>
            <Image src={linkedin}/>
            <Image src={wpp}/>
        </Div>
    </Container>
  )
}

export default Contatos