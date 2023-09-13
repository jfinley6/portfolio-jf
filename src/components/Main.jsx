import React, { useState } from "react";
import styled from "styled-components";
import HomeButton from "../subComponents/HomeButton";
import { LogoComponent } from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import { Link } from "react-router-dom";
import { CenterAnimation } from "./AllSvgs";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
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
  height: ${(props) => (props.click ? "100%" : "0%")};
  background-color: #000;
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
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
        <LogoComponent theme={click ? 'darkTheme' : 'lightTheme'}/>
        <SocialIcons click={click} theme={click ? 'darkTheme' : 'lightTheme'} />

        <DarkDiv click={click} />

        <Center click={click}>
          <CenterAnimation onClick={() => handleClick()} stroke="#808080" />
          <span>Click Here</span>
        </Center>

        <Contact to={"mailto:j.finley92@gmail.com"} target="_blank">
          <h2>Say Hi...</h2>
        </Contact>
        <Blog to="/blog">
          <h2>Blog</h2>
        </Blog>
        <Work to="/work" $click={click}>
          <h2>Work</h2>
        </Work>

        <BottomBar>
          <About to="/about" $click={click}>
            <h2>About</h2>
          </About>
          <Skills to="/skills">
            <h2>My Skills</h2>
          </Skills>
        </BottomBar>
      </Container>
    </MainContainer>
  );
};

export default Main;
