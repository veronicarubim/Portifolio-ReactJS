import React from 'react'
import { Card, Container, Div, DivAcad, Subtitle, Subtitle2, Title, Text } from './SobreStyle'

const Sobre = () => {
  return (
    <Container>
      
      <Title id="Sobre">Sobre</Title>

      <Div>
        <DivAcad>
          <Subtitle>Formação Acadêmica</Subtitle>
          <Card>          
            <Subtitle2>Mestrado - Biologia Vegetal - UNESP</Subtitle2>
            <Text>Mar/2020 - Abr/2022</Text>
          </Card>
          <Card>
            <Subtitle2>Bacharelado - Ciências Biológicas - UNESP</Subtitle2>
            <Text>Fev/2016 - Dez/2019</Text>
          </Card>
          <Subtitle>Cursos Complementares</Subtitle>
            <Card>
              <Subtitle2>Desenvolvimento Web FullStack - Labenu</Subtitle2>
              <Text>Ago/2022 - Mar/2023 &#40;em curso&#41;</Text>
            </Card>
        </DivAcad>
        
        <DivAcad>
          <Subtitle>Experiências Profissionais</Subtitle>
          <Card>
            <Subtitle2>CONPEC - Desenvolvedora FullStack</Subtitle2>
            <Text>Jan/2023 - Atualmente</Text>
            <Text>Atuo como desenvolvedora freelance. Sou responsável pelo desenvolvimento e finalização de 2 aplicações
              em ReactJS e um aplicativo mobile em React Native. 
            </Text>
          </Card>
          <Card>
            <Subtitle2>Cientista CNPQ</Subtitle2>
            <Text>Mar/2020 - Abr/2022</Text>
            <Text>Realizava pesquisa científica e estudei o desenvolvimento do nectário floral do cacto epífito da flor de maio.</Text>
          </Card> 
        </DivAcad>
        
      </Div>

    </Container>
  )
}

export default Sobre