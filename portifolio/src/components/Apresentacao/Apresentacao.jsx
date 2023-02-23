import React from 'react'
import { Container, Div, Image, Text, Title, TextDiv, Stars } from './ApresentacaoStyle'
import foto from "../../assets/foto.png"

const Apresentacao = () => {
  return (
    <Container>
        <Div>
            <Image src={foto}/>
            <TextDiv>
                <Title>Quem sou eu?</Title>
                <Text> Teste teste test </Text>
            </TextDiv> 
        </Div>    
    </Container>
)}

export default Apresentacao