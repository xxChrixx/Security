import React from "react";

//import style
import styled from "styled-components";
//framer Motion
import { motion } from "framer-motion";

const IconCard = ({ title, icon }) => {
  return (
    <CardContainer>
      <img src={icon} alt={title} />
      <h3>{title}</h3>
    </CardContainer>
  );
};

const CardContainer = styled(motion.div)`
width: 10rem;
  img {
      width:100%;
      object-fit: cover;
  }
  h3{
      margin-top: 2rem;
  }

  @media (max-width: 1300px) {
    width: 5rem;
    img{
      width:50%;
    }
    h3{
      margin-top: 0.5rem;
      margin-bottom: 3rem;
  }
  }
`;

export default IconCard;
