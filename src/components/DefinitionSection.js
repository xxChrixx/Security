import React from "react";
//import style
import styled from "styled-components";

//framer Motion
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReaveal } from "../animation";

const DefinitionSection = () => {
  const [element, controls] = useScroll();

  return (
    <Container id="Definizione">
      <ElementContainer 
     ref={element} animate={controls} initial="hidden" variants={scrollReaveal}
      >
        <UpperContent>
          <h2>Definizione</h2>
          <p>
            La sicurezza e vulnerabilità delle reti è un tema costante nella
            sicurezza informatica che si pone nel momento in cui si hanno più
            computer interconnessi fra loro, cioè in una rete di calcolatori:
            essi, infatti, offrono diverse vulnerabilità sfruttabili, più o meno
            facilmente, da terzi per intromettersi nel sistema ed intercettarne
            i dati.
          </p>
        </UpperContent>
        <BoxContainer>
        <Box>
          <p>
            Quando la rete è aperta a Internet, un'importante aggravante deriva
            dal fatto che Internet è nata come rete didattica in un ambiente
            universitario e le sue regole non prevedono metodi di sicurezza
            intrinseci alla struttura: le difese devono essere messe in atto
            sulle macchine stesse o creando strutture di rete particolari.
          </p>
        </Box>
        </BoxContainer>
       
      </ElementContainer>
    </Container>
  );
};

const Container = styled.div`
  overflow-x: hidden;
  min-height: 50vh;
  width: 100vw;
`;

const ElementContainer = styled(motion.div)`
  min-height: 60vh;
  margin: 15rem 10rem;
  display: flex;
  @media (max-width: 1300px) {
    flex-direction: column;
    margin: 0;
    overflow: hidden;
    text-align: justify;
    text-align: center;
  }
`;

const UpperContent = styled(motion.div)`
  width: 50%;
  h2 {
    font-size: 6rem;
    font-family: "Exo 2", sans-serif;
    letter-spacing: 2px;
  }
  p {
    margin-left: 10rem;
    margin-top: 3rem;
    color: #8e8e8e;
  }
  @media (max-width: 1300px) {
    display: block;
    width: 100vw;
    margin: 3rem 0;
    h2{
      font-size: 3rem;
    }
    p{
      margin: 3rem;
    }
  }
`;
const Box = styled(motion.div)`
background: #195498;
padding: 2rem;
display: flex;
align-items: center;
justify-content: center;
width: 70%;
p {
    
    color: white;
  }
  @media (max-width: 1300px) {
    display: block;
    width: 100vw;
    margin: 3rem 0;

    h2{
      margin-bottom: 2rem;
      font-size: 3rem;
    }
    p{
      margin: 0;
    }
  }
  `;

  const BoxContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  align-items:center;
  @media (max-width: 1300px) {
    display: block;
  }
  `
export default DefinitionSection;
