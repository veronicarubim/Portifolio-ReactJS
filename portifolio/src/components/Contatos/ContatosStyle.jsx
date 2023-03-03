import styled from 'styled-components';

export const Container = styled.div`
    background-color: #547B9F;
    height: max-content;
    
    img:hover {
    transform: scale(1.1);
    transition-duration: 0.7s; 
    }
    
`
export const Section = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

`
export const Div = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 3rem;
/*     justify-content: center;
    align-items: center; */
`
export const Image = styled.img`
    border-radius: 50%;
    height: 100px;
    margin: 1vw;
    cursor: pointer;
`
export const Title = styled.h1`
    margin-left: 4vw;
    color: white;
    font-weight: bold;
    font-size: 3rem;
`
export const Subtitle = styled.h2`
    margin-top: 10vh;
    color: white;
    font-weight: bold;
    font-size: 2rem;
`