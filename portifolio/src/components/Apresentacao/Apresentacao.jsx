import React from 'react'
import { Container, Div, Image, Text, Title, TextDiv } from './ApresentacaoStyle'
import foto from "../../assets/foto.png"

const Apresentacao = () => {
  return (
    <Container>
        <Div id="Home">
            <Image src={foto}/>
            <TextDiv>
                <Title>Quem sou eu?</Title>
                <Text>Olá, eu me chamo Veronica Rubim e sou desenvolvedora Frontend.</Text>
                <Text>Atualmente progamo em Javascript, com os frameworks ReactJS e React Native.</Text>
                <Text>Estou estudando Typescript para me tornar desenvolvedora FullStack.</Text>
            </TextDiv> 
        </Div>  
    </Container>
)}

export default Apresentacao