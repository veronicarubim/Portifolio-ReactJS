import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    background-color: #547B9F;
    height: 90px;
    width: 100vw;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-end;

    button:hover {
    transform: scale(1.1);
    transition-duration: 0.4s;
    color: #b58080;
    }
`

export const Div = styled.div`
    display: flex;
    margin-right: 2vw;
    align-items: center;
`

export const Button = styled.button`
    color: #DFB0B0;
    font-weight: bold;
    font-size: 18px;
    background: none;
    border: none;
    cursor: pointer;
    padding-left: 2vw;

    
`