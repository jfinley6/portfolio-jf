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

const Main = () => {
  return (
    <MainContainer>
      <Container>
        <HomeButton />
        <LogoComponent />
        <SocialIcons />
        <Contact to={"mailto:j.finley92@gmail.com"} target="_blank">
          <h3>Say Hi...</h3>
        </Contact>
        <Blog to="/blog">
          <h3>Blog</h3>
        </Blog>
        <Work to="/work">
          <h3>Work</h3>
        </Work>
      </Container>
    </MainContainer>
  );
};

export default Main;
