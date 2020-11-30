import React from 'react';

//import style
import styled from "styled-components";

const Footer = () =>{
    return <Foot>
        <h2>SICUREZZA IN RETE</h2>
        <h4>Boscaro Christian</h4>
    </Foot>
}


const Foot =styled.footer`
min-height: 60vh;
background: #2874B8;
text-align: center;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
color: white;
h2{
    font-family: "Exo 2", sans-serif;
    font-size: 2rem;
    letter-spacing: 3px; 
    padding: 10px;
}

`
export default Footer;