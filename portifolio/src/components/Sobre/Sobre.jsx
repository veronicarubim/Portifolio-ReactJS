import React from 'react'
import { Card, Container, Div, Title } from './SobreStyle'

const Sobre = () => {
  return (
    <Container>
      
      <Title id="Sobre">Sobre</Title>
      
      <Div>
        <div>
        <h2>Formação Acadêmica</h2>
        
        <Card>
          <p>Graduação - UNESP</p>
        </Card>

        <Card>          
          <p>Mestrado - UNESP</p>
        </Card>
        </div>
        
        <div>
        <h2>Experiências Profissionais</h2>
        <Card>
          <p>CONPEC - Desenvolvedora FullStack</p>
          <p>Cientista CNPQ</p>
          <p>Estágio - PET Litoral</p>
          <p>Contatos - Semana da Biologia Marinha</p>
          <p>Projeto - Resíduos Sólidos</p>
        </Card>
        </div>
        
      </Div>

    </Container>
  )
}

export default Sobre