import styled from 'styled-components';

export const Container = styled.div`
    background-color: #547B9F;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Div = styled.div`
    display: flex;
    flex-direction: row;
`
export const Image = styled.img`
    border-radius: 50%;
    height: 100px;
    margin: 1vw;
    cursor: pointer;

    Image:hover{
    transform: scale(1.1);
    transition-duration: 0.7s;
    }
`
export const Title = styled.h1`
    color: white;
    font-weight: bold;
    font-size: 18px;;
`