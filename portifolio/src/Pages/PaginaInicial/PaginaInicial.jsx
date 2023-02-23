import React from 'react'
import Apresentacao from '../../components/Apresentacao/Apresentacao'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Sobre from '../../components/Sobre/Sobre'
import Projetos from '../../components/Projetos/Projetos'
import Contatos from '../../components/Contatos/Contatos'
import { Container } from './PaginaStyle'

const PaginaInicial = () => {
  return (
    <Container>
        <Header/>
        <Apresentacao/>
        <Sobre/>
        <Projetos/>
        <Contatos/>
        <Footer/>
    </Container>
  )
}

export default PaginaInicial