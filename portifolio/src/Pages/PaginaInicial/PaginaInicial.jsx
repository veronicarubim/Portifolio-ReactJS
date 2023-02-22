import React from 'react'
import Apresentacao from '../../components/Apresentacao/Apresentacao'
import Header from '../../components/Header/Header'
import { Container } from './PaginaStyle'

const PaginaInicial = () => {
  return (
    <Container>
        <Header/>
        <Apresentacao/>
    </Container>
  )
}

export default PaginaInicial