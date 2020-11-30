import React from "react";
//import style
import styled from "styled-components";

//framer Motion
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

const DifeseCard = ({ title, text, image, inverse }) => {
  const widht = window.innerWidth
  const phone = widht < 1300 ? true : false;
  return (
    <Card style={inverse ? { flexDirection: "row-reverse"} :  { flexDirection: "row"}}>
      <Parallax className="custom-classss" tagOuter="figure"  y={phone  ? [-10,30] : [-120,120]}>
        <div>
          <CardText>
            <h2>{title}</h2>
            <p>
           {text}
            </p>
          </CardText>
        </div>
      </Parallax>

      <Parallax className="custom-class" tagOuter="figure">
        <Image>
          <CardImage src={image} alt="" />
        </Image>
      </Parallax>
    </Card>
  );
};

const Card = styled(motion.div)`
  overflow: hidden;
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5rem 10rem;
  @media screen and (max-width: 1400px){
    padding: 5rem;
  }
  @media (max-width: 1300px) {
    display: block;
    overflow: hidden;
    padding: 0;
  }
 
`;
const CardImage = styled.img`
  width: 100%;
  object-fit: cover;
`;
const CardText = styled.div`
 padding: 0 10rem;
  h2 {
    font-family: "Exo 2", sans-serif;
    margin: 2rem 0;
    font-size: 2.5rem;
  }
  p {
    color: #3a3a3a;
    width: 80%;
  }
  @media (max-width: 1300px) {
    padding: 2rem;
    p{
      width: 100%;
      text-align: justify;


    }
    h2{
      font-size: 1.5rem;
      text-align: center;
    }
    
    z-index: 2;
  }
`;
const Image = styled.div`
  width: 30vw;
  overflow: hidden;
  @media (max-width: 1300px) {
    width:100vw;
    padding: 2rem;
    background: white;
    z-index: 1;
    margin: 2vh 0;
  }
`;

export default DifeseCard;
