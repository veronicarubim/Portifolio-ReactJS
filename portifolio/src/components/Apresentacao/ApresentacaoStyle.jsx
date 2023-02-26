import styled from "styled-components";

export const Container = styled.div`
    background-color: #DFB0B0;
    /* background: linear-gradient(0deg, rgba(145,100,100,1) 0%, rgba(223,176,176,1) 44%, rgba(255,208,208,1) 83%); */
    height: 110vh;
    display: flex;
    justify-content: center;

    /* img:hover {
    transform: scale(1.02);
    transition-duration: 0.7s;
    border: 5px solid #99C3DE; 
    } */
`

export const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`

export const Image = styled.img`
    border-radius: 50%;
    height: 550px;
    border: 5px solid #916464;
    
    img:hover {
    transform: scale(1.02);
    transition-duration: 0.7s;
    border: 5px solid #99C3DE; 
    };
`

export const Text = styled.p`
    color: white;
`

export const Title = styled.h1`
    color:#916464; 
    font-weight: bold;
`

export const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.8vh;
    width: 24rem;
`