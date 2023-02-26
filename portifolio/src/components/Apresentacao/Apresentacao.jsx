import React from 'react'
import { Container, Div, Image, Text, Title, TextDiv } from './ApresentacaoStyle'
import foto from "../../assets/foto.png"
import js from "../../assets/js.png"
import ts from "../../assets/ts.png"
import sql from "../../assets/sql.png"
import react from "../../assets/reactjs.png"
import html from "../../assets/html.png"
import css from "../../assets/css.png"

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
                <hr></hr>
                <Text>Ferramentas:</Text>
                <div>
                    <img src={js}/>
                    <img src={ts}/>
                    <img src={react} width="50px"/>
                    <img src={sql}/>
                    <img src={html}/>
                    <img src={css}/>
                </div>
            </TextDiv> 
        </Div>  
    </Container>
)}

export default Apresentacao