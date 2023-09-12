import React from "react";
import styled from "styled-components";
import HomeButton from "../subComponents/HomeButton";
import { LogoComponent } from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import { Link } from "react-router-dom";

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
  color: ${(props) => props.theme.text};
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
`

const About = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.text};
  z-index: 1;
`;

const Skills = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.text};
  z-index: 1;
`;

const Main = () => {
  return (
    <MainContainer>
      <Container>
        <HomeButton />
        <LogoComponent />
        <SocialIcons />
        <Contact to={"mailto:j.finley92@gmail.com"} target="_blank">
          <h2>Say Hi...</h2>
        </Contact>
        <Blog to="/blog">
          <h2>Blog</h2>
        </Blog>
        <Work to="/work">
          <h2>Work</h2>
        </Work>
        <BottomBar>
          <About to="/about">
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
