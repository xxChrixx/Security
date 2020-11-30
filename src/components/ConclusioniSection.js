import React from "react";

//import style
import styled from "styled-components";
//framer Motion
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReaveal } from "../animation";

//import image
import Image from '../assets/img/conclusioni.svg'
const ConclusioniSection = () => {
  const [element, controls] = useScroll();

  return (
    <ConclusioniContainer id="Conclusioni"  ref={element} animate={controls} initial="hidden" variants={scrollReaveal}>
      <Title>
        <Blu>
          <h2>UTILIZZA CONNESSIONI SICURE</h2>
        </Blu>
        <White>
          <h2>& FIREWALL</h2>
        </White>
      </Title>
      <Content>
        <ContentText>
          <p>
            Limita chi può accedere ai tuoi dati, metodi come la crittografia o
            firewall sono utili ma non infallibili come disse l’ Olandese EDSGER
            WYBE DIJKSTRA “Il test di un programma può essere usato per mostrare
            la presenza di bug, ma mai per mostrare la loro assenza.”
          </p>
        </ContentText>
        <ContentImage>
            <img src={Image} alt=""/>
        </ContentImage>
      </Content>
    </ConclusioniContainer>
  );
};

const ConclusioniContainer = styled(motion.div)`
  min-height: 70vh;
  margin: 30vh 0;
  overflow: hidden;
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 1300px) {
      display: block;
  }
`;
const Blu = styled.div`
  width: 50%;
  background: #2874b8;
  padding: 5rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font-family: "Exo 2", sans-serif;
    font-size: 3rem;
    letter-spacing: 2px;
  }
  @media (max-width: 1300px) {
      width: 100%;
      padding: 0 5rem;
      overflow: hidden;
      h2{
    font-size: 2rem;

          margin: 0 2rem;
      }
  }
`;

const White = styled(Blu)`
  background: white;
  color: #2874b8;
`;

const Content = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
margin: 10rem 0;
@media (max-width: 1300px) {
    display: block
}
`;

const ContentImage = styled.div`
width:50%;
display: flex;
justify-content:center;
align-items:center;

img{
    width:70%;
    object-fit: cover;
}
@media (max-width: 1300px) {
    width: 100%;
}
`;
const ContentText = styled.div`
width:50%;
display: flex;
justify-content:center;
align-items:center;

p{
    width: 50%;
    color: gray;
    text-align: justify;
    line-height: 2rem;
    font-size: 1.3rem;
}
@media (max-width: 1300px) {
    width: 100%;
    margin: 5rem 0;
    p{
        width: 80%;
    }
}
`;
export default ConclusioniSection;
