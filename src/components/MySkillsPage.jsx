import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { FaComputer } from "react-icons/fa6";
import { BsFillDatabaseFill } from "react-icons/bs";
import SocialIcons from "../subComponents/SocialIcons";
import { LogoComponent } from "../subComponents/LogoComponent";
import HomeButton from "../subComponents/HomeButton";
import ParticleComponent from "./ParticleComponent";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 850px) {
    flex-direction: column;
    padding: 6rem 0 4rem;
    gap: 1rem;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }

  @media (max-width: 850px) {
    width: 45vw;
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: calc(1rem + 1vw);

  @media (max-width: 850px) {
    line-height: 1.25rem;
    span {
      padding-left: 1rem;
    }
  }
`;

const Description = styled.div`
  color: ${lightTheme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ${Main}:hover & {
    color: ${lightTheme.body};
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <HomeButton />
      <LogoComponent theme="light" />
      <SocialIcons theme="light" />
      <ParticleComponent theme="light" />
      <Box>
        <Main>
          <Title>
            <FaComputer size={56} />
            <span style={{ display: "flex", justifyContent: "center" }}>
              Front-End Developer
            </span>
          </Title>
          <Description>
            A web enthusiast with a passion for crafting visually appealing and
            user-friendly digital experiences
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>
              HTML, CSS, JavaScript (ES6), React, Python, Tailwind, Bootstrap,
              VBA
            </p>
          </Description>
        </Main>
        <Main>
          <Title>
            <BsFillDatabaseFill size={56} />
            <span style={{ display: "flex", justifyContent: "center" }}>
              Back-End Developer
            </span>
          </Title>
          <Description>
            Proficient in back-end development, driven by the ambition to create
            robust, secure, and efficient systems
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>Ruby, Ruby on Rails, Express.js, SQL, VBA</p>
          </Description>
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
