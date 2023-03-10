import React from 'react'
import { Button, Container, Div, Title } from './HeaderStyle';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <Container>
      <Title>Veronica Rubim - Desenvolvedora </Title>
      <Div>
        <Link to="Home" smooth={true} duration={500}>
          <Button>Home</Button>
        </Link>
        <Link to="Sobre" smooth={true} duration={500}>
          <Button>Sobre</Button>
        </Link>
        <Link to="Projetos" smooth={true} duration={500}>
          <Button>Projetos</Button>
        </Link>
        <Link to="Contato" smooth={true} duration={500}>
          <Button>Contato</Button>
        </Link>
      </Div>
    </Container> 
    
  )
}

export default Header