import React from 'react'
import { Container, Text, Title, Image, Subtitle, Div, DivText, Projeto, Stack, Subtitle2, Link } from './ProjetosStyles'
import pokemon from '../../assets/1.png'
import starwars from '../../assets/2.png'
import targ from '../../assets/targ.png'
import back from "../../assets/backend.png"
import labook from "../../assets/labook.png"
import js from "../../assets/js.png"
import ts from "../../assets/ts.png"
import sql from "../../assets/sql.png"
import react from "../../assets/reactjs.png"
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import node from "../../assets/nodejs.png"

const Projetos = () => {
  return (
    <Container>

      <Title id="Projetos">Projetos</Title>

      <Div>
        <Stack>
          <Subtitle>Frontend</Subtitle>

          <Projeto>
            <Image src={pokemon} alt="img"/>
            <DivText>
              <Subtitle2>React - Pokédex</Subtitle2>
              <Text>
                Projeto em React que consome uma API de pokémons que faz aparecer na tela 20 pokémons. É possível escolher os pokémons para dentro da pokédex.
                Cada pokémon tem uma página de detalhes com o tipo, estatísticas e habilidades.
              </Text>
              <Link href="https://github.com/veronicarubim/projeto-react-apis" target={'_blank'} rel="noreferrer">Github do Projeto</Link>
              <Link href="https://important-request.surge.sh/" target={'_blank'} rel="noreferrer">Deploy</Link>
              <Text>Ferramentas:</Text>
              <div>
                    <img src={js} alt="img"/>
                    <img src={react} width="50px" alt="img"/>
                    <img src={html} alt="img"/>
                    <img src={css} alt="img"/>
              </div>
            </DivText>
          </Projeto>

          <Projeto>
            <Image src={starwars} alt="img"/>
            <DivText>
              <Subtitle2>E-commerce de Naves Espaciais</Subtitle2>
              <Text>
                Site feito em React que simula um e-commerce com dados mockados. A aplicação foi feita em React com Styled-Components.
                É possível filtrar as naves, que são os produtos, por ordem de preço, tipo e pesquisa por nome.
              </Text>
              <Link href="https://github.com/veronicarubim/projeto-frontendreact" target={'_blank'} rel="noreferrer">Github do Projeto</Link>
              <Link href="https://projeto-frontendreact-e6tsh9jkv-veronicarubim.vercel.app/" target={'_blank'} rel="noreferrer">Deploy</Link>
              <Text>Ferramentas:</Text>
              <div>
                    <img src={js} alt="img"/>
                    <img src={react} width="50px" alt="img"/>
                    <img src={html} alt="img"/>
                    <img src={css} alt="img"/>
              </div>
            </DivText>
          </Projeto>

          <Projeto>
            <Image src={targ} alt="img"/>
            <DivText>
              <Subtitle2>Página dos Targaryens</Subtitle2>
              <Text>
                Meu primeiro projeto de frontend. Criei uma página estática com JS, HTML e CSS apenas. 
                A página utiliza manipulação por DOM para fazer os cards e conta com uma barra de 
                pesquisa que busca pelo nome e pelo conteúdo do card. 
              </Text>
              <Link href="https://github.com/veronicarubim/projeto-intro-web" target={'_blank'} rel="noreferrer">Github do Projeto</Link>
              <Link href="https://veronicarubim.github.io/projeto-intro-web/" target={'_blank'} rel="noreferrer">Deploy</Link>
              <Text>Ferramentas:</Text>
              <div>
                    <img src={js} alt="img"/>
                    <img src={html} alt="img"/>
                    <img src={css} alt="img"/>
              </div>
            </DivText>
          </Projeto>
        </Stack>
        
        <Stack>
          <Subtitle>Backend</Subtitle>
          
          <Projeto>
            <Image src={labook} alt="img"/>
            <DivText>
              <Subtitle2>API - Labook &#40;Em Andamento&#41;</Subtitle2>
              <Text>
                Construção de uma API RESTful vinculada a banco de dados relacional SQLite. A aplicação conta com arquitetura limpa e em camadas e Programação Orientada a Objetos.
                Feita com Typescript, NodeJS, Knex, Express, SQLite, Geração dde UUID e roteamento. Documentação do Postman no Github.  
              </Text>
              <Link href="https://github.com/veronicarubim/Projeto-Labook" target={'_blank'} rel="noreferrer">Github do Projeto</Link>
              <Text>Ferramentas:</Text>
              <div>
                    <img src={ts} alt="img"/>
                    <img src={sql} alt="img"/>
                    <img src={js} alt="img"/>
                    <img src={node} alt="img"/>
                    
              </div>
            </DivText>
          </Projeto>

          <Projeto>
            <Image src={back} alt="img"/>
            <DivText>
              <Subtitle2>Labecommerce Backend</Subtitle2>
              <Text>
                Primeiro projeto de Backend que já fiz. Com ele aprendi o básico de NodeJS, Typescript, Express e Knex.
              </Text>
              <Link href="https://github.com/veronicarubim/labecommerce-backend" target={'_blank'} rel="noreferrer">Github do Projeto</Link>
              <Text>Ferramentas:</Text>
              <div>
                    <img src={ts} alt="img"/>
                    <img src={sql} alt="img"/>
                    <img src={js} alt="img"/>
                    <img src={node} alt="img"/>
              </div>
            </DivText>
          </Projeto>
        </Stack>
        
      </Div>
      
    </Container>
  )
}

export default Projetos