import React from 'react'
import { Button, Container, Div } from './HeaderStyle'

const Header = () => {
  return (
    <Container>
      <Div>
        <Button>Home</Button>
        <Button>Sobre</Button>
        <Button>Contato</Button>
        <Button>Projetos</Button>
      </Div>
    </Container> 
    
  )
}

export default Header