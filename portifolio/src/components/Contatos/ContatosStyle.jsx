import styled from 'styled-components';

export const Container = styled.div`
    background-color: #547B9F;
    height: 50vh;
    
    img:hover {
    transform: scale(1.1);
    transition-duration: 0.7s; 
    }
    
`
export const Section = styled.section`
    display: flex;
    flex-direction: column;
   /*  align-items: center;
    justify-content: center; */
    box-sizing: border-box;

`
export const Div = styled.div`
    display: flex;
    flex-direction: row;
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
    margin-top: 5vh;
    color: white;
    font-weight: bold;
    font-size: 32px;
`
export const Image1 = styled.img`
    width: 17vw;
`