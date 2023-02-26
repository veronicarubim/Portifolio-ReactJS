import React from 'react'
import { Container, Div, Image, Image1, Section, Subtitle, Title } from './ContatosStyle'
import github from '../../assets/github.png';
import twitter from '../../assets/twitter.png';
import ig from '../../assets/ig.png';
import linkedin from '../../assets/linkedin.png';
import wpp from '../../assets/wpp.png';
import email from '../../assets/email.png'

const Contatos = () => {

  const emailDestinatario = 'veronica.rubim97@gmail'
  const linkEmail = `mailto:${emailDestinatario}`;
  
  return (
    <Container>
      <Title id="Contato"></Title>
      
      <Section>
      <Subtitle>Encontre-me nas redes sociais!</Subtitle>
        <Div>
              <a href='https://github.com/veronicarubim' target={'_blank'} rel="noreferrer"><Image src={github}/></a>
              <a href='https://twitter.com/lover0nica' target={'_blank'} rel="noreferrer"><Image src={twitter}/></a>
              <a href='https://www.instagram.com/veronicarubim/' target={'_blank'} rel="noreferrer"><Image src={ig}/></a>
              <a href='https://www.linkedin.com/in/veronica-rubim-0b0b87169/' target={'_blank'} rel="noreferrer"><Image src={linkedin}/></a>
              <a href='https://wa.me/+5511989868952' target={'_blank'} rel="noreferrer"><Image src={wpp}/></a>
              <a href={linkEmail} target={'_blank'} rel="noreferrer"><Image src={email}/></a>
        </Div>
      </Section>

    </Container>
  )
}

export default Contatos