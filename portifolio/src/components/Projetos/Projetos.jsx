import React from 'react'
import { Container, Title, Image } from './ProjetosStyles'
import logo from '../../assets/logo.png'

const Projetos = () => {
  return (
    <Container>
      <Title id="Projetos">Projetos</Title>
      <Image src={logo}/>
    </Container>
  )
}

export default Projetos