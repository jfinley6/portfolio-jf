import React, { useState } from "react";
import styled from "styled-components";
import HomeButton from "../subComponents/HomeButton";
import { LogoComponent } from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import { Link } from "react-router-dom";
import { CenterAnimation } from "./AllSvgs";
import Intro from "./Intro";
import { motion, AnimatePresence } from "framer-motion";
import { mediaQueries } from "./Themes";

const MainContainer = styled(motion.div)`
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

  h2 {
    ${mediaQueries(40)`
      font-size:1.2em;

  `};

    ${mediaQueries(30)`
      font-size:1em;

  `};
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 2rem;
  right: calc(1.5rem + 2vw);
  z-index: 1;
`;

const Blog = styled(Link)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  z-index: 1;

  text-decoration: none;
  @media only screen and (max-width: 50em) {
    text-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
  }
`;

const Work = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.$click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: calc(2rem + 1vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  z-index: 1;

  @media only screen and (max-width: 50em) {
    text-shadow: ${(props) => (props.$click ? "0 0 4px #000" : "none")};
  }
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
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
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
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  background-color: #000000;
  height: ${(props) => (props.click ? "100%" : "0%")};
  transition: height 0.5s ease, width 1s ease 0.5s;
  z-index: 1;

  ${(props) =>
    props.click
      ? mediaQueries(50)`
       height: 50%;
  right:0;
  
  width: 100%;
  transition: width 0.5s ease, height 1s ease 0.5s;

  `
      : mediaQueries(50)`
       height: 0;
  
  width: 0;
  `};
`;

const Click = styled.span`
  position: absolute;
  top: ${(props) => (props.click ? "80%" : "50%")};
  left: ${(props) => (props.click ? "88%" : "50%")};
  transform: translate(-50%, -50%);
  font-size: ${(props) => (props.click ? "0.7rem" : "1rem")};
  font-weight: 500;
  font-family: "Karla";
  z-index: 0;
  transition: all 1s ease;
`;

const Main = () => {
  const [click, setClick] = useState(false);
  const [path, setpath] = useState("");

  const handleClick = () => {
    setClick((click) => !click);
  };

  const moveY = {
    y: "-100%",
  };
  const moveX = {
    x: `${path === "work" ? "100%" : "-100%"}`,
  };
  const mq = window.matchMedia("(max-width: 50em)").matches;

  return (
    <MainContainer
      initial={{ opacity: "0%" }}
      animate={{
        opacity: "100%",
        transition: {
          type: "spring",
          duration: 1.5,
        },
      }}
      exit={path === "about" || path === "skills" ? moveY : moveX}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Container>
        <HomeButton />
        <LogoComponent theme={click ? "darkTheme" : "lightTheme"} />
        {mq ? (
          <SocialIcons theme="light" />
        ) : (
          <SocialIcons theme={click ? "dark" : "light"} />
        )}
        <DarkDiv click={click} />
        <Center click={click}>
          <CenterAnimation onClick={() => handleClick()} stroke="#808080" />
        </Center>
        <Click click={click}>Click Here</Click>
        {mq ? (
          <Contact
            click={+click}
            target="_blank"
            href="https://devdreaming.com/about"
          >
            <motion.h3
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Say hi..
            </motion.h3>
          </Contact>
        ) : (
          <Contact
            click={+false}
            target="_blank"
            to={"mailto:j.finley92@gmail.com"}
          >
            <motion.h3
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 0.5 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 0.5 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Say hi..
            </motion.h3>
          </Contact>
        )}
        {mq ? (
          <Blog click={+click} onClick={() => setpath("blog")} to="/blog">
            <motion.h2
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 0.5 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 0.5 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Blog
            </motion.h2>
          </Blog>
        ) : (
          <Blog click={+false} onClick={() => setpath("blog")} to="/blog">
            <motion.h2
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 0.5 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 0.5 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Blog
            </motion.h2>
          </Blog>
        )}
        <Work to="/work" $click={click} onClick={() => setpath("work")}>
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 0.5 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 0.5 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Work
          </motion.h2>
        </Work>
        <BottomBar>
          <About
            to="/about"
            click={mq ? +false : +click}
            onClick={() => setpath("about")}
          >
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 0.5 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 0.5 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              About
            </motion.h2>
          </About>
          <Skills to="/skills" onClick={() => setpath("skills")}>
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 0.5 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 0.5 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
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
