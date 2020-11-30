import React from "react";

//import style
import styled from "styled-components";
//framer Motion
import { motion } from "framer-motion";
import { NavAnim, slidercontainer } from "../animation";

//dom
import { HashLink as Link } from 'react-router-hash-link';
const Nav = () => {
  return (
    <StyleNav  >
     
        <Link style={{overflow: "hidden"}} id="Logo" to="/">
        <motion.h1 variants={NavAnim}>CIBERSECURITY</motion.h1>
        </Link>
      
      <ul>
        <li>
          <Link  to="#Definizione"><motion.p variants={NavAnim}>Definizione</motion.p></Link>
        </li>
        <li>
          <Link to="#Attacchi"><motion.p variants={NavAnim}>Attacchi</motion.p></Link>
        </li>
        <li>
          <Link to="#Solution"><motion.p variants={NavAnim}>Protezioni</motion.p></Link>
        </li>
        <li>
          <Link to="#Conclusioni"><motion.p variants={NavAnim}>Conclusioni</motion.p></Link>
        </li>
      </ul>
    </StyleNav>
  );
};

const StyleNav = styled(motion.nav)`
  position: sticky;
  top: 0;
  z-index: 100;
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: transparent;
  a {
    color: white;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #Logo {
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: lighter;
    h1{
    font-family: 'Roboto', sans-serif;
    font-weight: lighter;
    font-size: 1rem;
      
    }
  }
  li {
    padding-left: 5rem;
    position: relative;
    overflow-x: hidden;
  }
  h1{
    overflow-x: hidden;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    overflow: hidden;
    #logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      display:none;
      li {
        padding: 0rem;
      }
    }
  }
`;


export default Nav;
