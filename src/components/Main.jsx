import React, { useState } from "react";
import styled from "styled-components";
import HomeButton from "../subComponents/HomeButton";
import { LogoComponent } from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import { Link } from "react-router-dom";
import { CenterAnimation } from "./AllSvgs";
import Intro from "./Intro";
import { motion } from "framer-motion";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100dvh;
  overflow: hidden;

  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  z-index: 1;
`;

const Blog = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  z-index: 1;
`;

const Work = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.$click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: calc(2rem + 1vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  z-index: 1;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

const About = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.$click ? props.theme.body : props.theme.text)};
  z-index: 1;
`;

const Skills = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.text};
  z-index: 1;
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "80%" : "50%")};
  left: ${(props) => (props.click ? "88%" : "50%")};
  width: ${(props) => (props.click ? "20%" : "35%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 1s ease;
  z-index: 1;

  & > :last-child {
    padding-top: 0.3rem;
    display: ${(props) => (props.click ? "none" : "inline-block")};
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  background-color: #000;
  z-index: 1;
  transition: width 1s ease;
`;

const Click = styled.span`
  position: absolute;
  top: ${(props) => (props.click ? "80%" : "50%")};
  left: ${(props) => (props.click ? "88%" : "50%")};
  transform: translate(-50%, -50%);
  font-size: ${(props) => (props.click ? "0.7rem" : "1rem")};
  font-weight: 500;
  font-family: 'Karla';
  z-index: 0;
  transition: all 1s ease;
`;

const Main = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick((click) => !click);
  };

  return (
    <MainContainer>
      <Container>
        <HomeButton />
        <LogoComponent theme={click ? "darkTheme" : "lightTheme"} />
        <SocialIcons click={click} theme={click ? "darkTheme" : "lightTheme"} />

        <DarkDiv click={click} />

        <Center click={click}>
          <CenterAnimation onClick={() => handleClick()} stroke="#808080" />
        </Center>
          <Click click={click}>Click Here</Click>

        <Contact to={"mailto:j.finley92@gmail.com"} target="_blank">
          <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Say Hi...
          </motion.h2>
        </Contact>
        <Blog to="/blog">
          <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Blog
          </motion.h2>
        </Blog>
        <Work to="/work" $click={click}>
          <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Work
          </motion.h2>
        </Work>

        <BottomBar>
          <About to="/about" $click={click}>
            <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              About
            </motion.h2>
          </About>
          <Skills to="/skills">
            <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              My Skills
            </motion.h2>
          </Skills>
        </BottomBar>
      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
};

export default Main;
