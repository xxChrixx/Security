import React from "react";

//import style
import styled from "styled-components";
//framer Motion
import { motion } from "framer-motion";
import { scrollReaveal, FadeRight } from "../animation";
import { useScroll } from "./useScroll";

//import components
import IconCard from "./IconCard";

//import icons
import DDoSicon from "../assets/img/ddos.svg";
import SpoofingIcon from "../assets/img/dog.svg";
import SnifferIcon from "../assets/img/backdoor.svg";
import PhishingIcon from "../assets/img/phishing.svg";
import BugIcon from "../assets/img/bug.svg";

const AttacchiSection = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  return (
    <MainContainer
      ref={element2}
      animate={controls2}
      initial="hidden"
      variants={FadeRight}
    >
      <AnimContainer
        id="Attacchi"
        ref={element}
        animate={controls}
        initial="hidden"
        variants={scrollReaveal}
      >
        <TextContainer>
          <h1>ATTACCHI COMUNI</h1>
        </TextContainer>
        <IconContainer>
          <IconCard icon={DDoSicon} title="Denial Of Service" />
          <IconCard icon={PhishingIcon} title="IP Spoofing" />
          <IconCard icon={SpoofingIcon} title="Attacchi a Sniffer" />
          <IconCard icon={SnifferIcon} title="Backdoor" />
          <IconCard icon={BugIcon} title="worm" />
        </IconContainer>
      </AnimContainer>
    </MainContainer>
  );
};

const MainContainer = styled(motion.div)`
  background: #2874b8;
  @media (max-width: 1300px) {
    padding-bottom: 2rem;
   
  }
`;

const AnimContainer = styled(motion.div)`
  height: 80vh;
  width: 100vw;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  @media (max-width: 1300px) {
    height: auto;
  }
`;

const TextContainer = styled.div`
  height: 10%;
  margin: 0;
  padding: 4rem 0;
  h1 {
    padding: 0;
    font-size: 5rem;
    font-family: "Exo 2", sans-serif;
    letter-spacing: 3px;
  }
  @media (max-width: 1300px) {
    height: auto;
    
    h1 {
      font-size: 3rem;
    }
  }
`;

const IconContainer = styled(motion.div)`
  margin: 0 10rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 90%;
  @media (max-width: 1300px) {
    flex-direction: column;
  }
`;
export default AttacchiSection;
