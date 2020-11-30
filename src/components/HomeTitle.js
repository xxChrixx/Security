import React from "react";
//import style
import styled from "styled-components";
//framer Motion
import { motion } from "framer-motion";

import { titleAnim, slidercontainer } from "../animation";




const HomeTitle = () => {
  return (
    <TitleContainer>
      <Text    
    >
  
        <Hide>
          <motion.h1  variants={titleAnim}>
            SICUREZZA
          </motion.h1>
        </Hide>
        <Hide>
          <motion.h1  variants={titleAnim}>
            IN RETE
          </motion.h1>
        </Hide>
        <Hide>
          <motion.p  variants={titleAnim}>
            Importante fondamento dell'era moderna dove internet è al centro del mondo...
          </motion.p>
        </Hide>
      </Text>
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  color: white;
  width: 50vw;
  display: flex;
  height: 50vh;
  @media (max-width: 1300px) {
    width: 100vw;
  
   height: auto;
    text-align: center;
    display: flex;
    justify-content: center;

  }

`;
const Text = styled(motion.div)`
  display: flex;
  flex-direction: column;
  color: white;
  padding: 0rem 20rem;
  h1 {
    font-size: 6rem;
    font-family: "Exo 2", sans-serif;
    letter-spacing: 5px;
    @media screen and (max-width: 1400px){
    font-size: 5rem;
  }
  
  }
  @media screen and (max-width: 1600px){
    padding: 0 10rem;
  }
  @media (max-width: 1300px) {
    padding: 1rem;
    h1{
      font-size: 3rem;
    }
   
  }
  
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default HomeTitle;
