import styled from 'styled-components'

export const Container= styled.div`
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    gap:30px;
    background: linear-gradient(#FFFF00, #212b46);
`;

export const H1= styled.h1`
    font-size:85px;
    color:#fff;
    margin-bottom:70px;

    @media (max-width:785px){
        font-size:40px;
        margin-bottom:35px;
    }
`;

export const ContainerSearch= styled.div`
    background-color: rgba(255,255,255,0.2);
    padding:15px;
    display:flex;
    align-items:center;
    border-radius:8px;
    
`;

export const Input= styled.input`
    background-color:transparent;
    border:none;
    color: #fff;
    outline:none;
    width:290px;
    height:25px;
    font-size:20px;
    margin-right:12px;
    
`;

export const Button= styled.button`
    border:none;
    background-color:transparent;
    font-size:23px;
    color: #fff;
    cursor:pointer;

    &:hover{
        transform: scale(1.1)
    }
    &:active{
        color:black;
    }
`;

export const Main= styled.main`
    background-color: rgba(0,0,0,0.2);
    border-radius:10px;
    width:500px;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:10px;
  
    

    h2{
        font-size:39px;
    }

    @media (max-width:515px){
        width:350px;

        h2{
            font-size:30px;
        }
    }
`;

export const Span= styled.span`
    margin:9px 0;
    font-weight:bold;
    font-size:20px;
`;

