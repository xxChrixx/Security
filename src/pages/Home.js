import React from "react";

//import style
import styled from "styled-components";
//framer Motion
import { motion, motionValue } from "framer-motion";
import { titleAnim, slidercontainer } from "../animation";

//component

import Nav from "../components/Nav";
import HomeImage from "../components/HomeImage";
import HomeTitle from "../components/HomeTitle";
import AttacchiSection from "../components/AttacchiSection";
import DefinitionSection from "../components/DefinitionSection";
import DifeseSection from "../components/DifeseSection";
import ConclusioniSection from "../components/ConclusioniSection";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div className="home">
      <HomeContainer
        exit="exit"
        variants={slidercontainer}
        initial="hidden"
        animate="show"
      >
        <Nav />
        <HomeContent>
          <HomeTitle />
          <HomeImage />
        </HomeContent>
      </HomeContainer>
      <DefinitionSection />
      <HideHoverflow>
        <AttacchiSection />
      </HideHoverflow>
      <HideHoverflow>
        <DifeseSection />
      </HideHoverflow>
      <HideHoverflow>
      <ConclusioniSection />
      </HideHoverflow>
     <HideHoverflow>
     <Footer />
     </HideHoverflow>
     
    </div>
  );
};

const HomeContainer = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(-45deg, #14488c, #41aef2);
  overflow-x: hidden;
  @media (max-width: 1300px) {
    overflow: hidden;
  }
`;
const HideHoverflow = styled.div`
  overflow: hidden;
`;
const HomeContent = styled(motion.div)`
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1300px) {
    position: relative;
    width: 100vw;
    overflow: hidden;
    flex-direction: column;
    
  }
`;
export default Home;
