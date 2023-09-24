import React, { useEffect, useRef, useState } from "react";
import styled, { ThemeProvider, keyframes } from "styled-components";
import { darkTheme } from "./Themes";
import SocialIcons from "../subComponents/SocialIcons";
import { LogoComponent } from "../subComponents/LogoComponent";
import HomeButton from "../subComponents/HomeButton";
import ParticleComponent from "./ParticleComponent";
import LukeIcon from "/luke-icon.png";
import sound from "/i-am-a-jedi.mp3";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const float = keyframes`
    0% { transform: translateY(-10px) scale(1) }
    50% { transform: translateY(15px) translateX(15px) scale(1.1)}
    100% { transform: translateY(-10px) scale(1)}
`;

const Icon = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 30vw;
  z-index: 2;
  animation: ${float} 4s ease infinite;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 55vw;
    right: -5%;
    top: 5%;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 65vh;
  z-index: 3;
  line-height: 1.7;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.3rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 9rem;

  font-family: "Ubuntu Mono", monospace;
  font-style: italic;

  @media (max-width: 768px) {
    left: calc(2rem + 7vw);
    height: 60vh;
    width: 55vw;
    font-size: calc(0.4rem + 1vw);
  }
`;

const AboutPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const playAudio = () => {
    if (!isPlaying) {
      // Play the sound
      audioRef.current.play();
      setIsPlaying(true);

      // Add an event listener to reset isPlaying when the sound ends
      audioRef.current.addEventListener('ended', () => {
        setIsPlaying(false);
      });
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <HomeButton />
        <LogoComponent theme="darkTheme" />
        <SocialIcons theme="darkTheme" />
        <ParticleComponent theme="darkTheme" />

        <Icon>
          <img src={LukeIcon} alt="luke-skywalker-icon" onClick={playAudio} />
          <audio ref={audioRef}>
            <source src={sound} type="audio/mpeg" />
          </audio>
        </Icon>

        <Main>
          As a Programmer/Assembly Technician at Panther Industries, I develop
          and deploy web and desktop applications that simplify workflows and
          improve productivity. I currently use React, Express.js, Python, and
          VBA and am always looking to learn new skills and improve my current
          ones. <br></br> I have a strong passion for building innovative
          programs that assist companies in providing efficient solutions for
          their customers. I graduated from Washington State University with a
          Bachelor of Science in Mechanical Engineering and completed a Software
          Engineering program at Flatiron School.<br></br> For my next role, I
          aspire to join a collaborative team of experienced professionals,
          where I can contribute my skills and grow by working on exciting and
          innovative projects.<br></br> In my spare time, I enjoy disc golf,
          skiing, and running. I am also a big fan of Star Wars!
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
