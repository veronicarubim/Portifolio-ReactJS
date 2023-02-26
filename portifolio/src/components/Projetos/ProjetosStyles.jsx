import styled from 'styled-components';

export const Container = styled.div`
    background-color: #DFB0B0 ;

    img:hover {
    transform: scale(1.1);
    transition-duration: 0.4s;
    }
`
export const Title = styled.h1`
    margin-left: 4vw;
    padding-top: 5vh;
    color: white;
    font-weight: bold;
    font-size: 3rem;
`
export const Image = styled.img`
    width: 17vw;
    border-radius: 50%;
`
export const Subtitle = styled.div`
    color: #9c6b6b;
    font-size: 2rem;
    font-weight: bold;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
`
export const Subtitle2 = styled.div`
    color: #9c6b6b;
    font-size: 1.2rem;
    font-weight: bold;
    padding-bottom: 0.5rem;
`
export const Text = styled.p`
    color: #9c6b6b;
    font-size: 1rem;
    padding: 0.5rem;
`
export const Div = styled.div`
    display: flex;
    justify-content: space-around;
`
export const DivText = styled.div`
    display: flex;
    flex-direction: column;
    width: 24rem;

`
export const Projeto = styled.div`
    display: flex;
    gap: 2rem;
    align-items: flex-start;
`
export const Stack = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`
export const Link = styled.a`
    color: #9c6b6b;
`