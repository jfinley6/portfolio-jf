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
    gap: 1rem;
    line-height: 1.25rem;
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
    const particles = {
      bounce: {
        horizontal: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
        vertical: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
      },
      collisions: {
        absorb: {
          speed: 2,
        },
        bounce: {
          horizontal: {
            random: {
              enable: false,
              minimumValue: 0.1,
            },
            value: 1,
          },
          vertical: {
            random: {
              enable: false,
              minimumValue: 0.1,
            },
            value: 1,
          },
        },
        enable: true,
        maxSpeed: 50,
        mode: "bounce",
        overlap: {
          enable: true,
          retries: 0,
        },
      },
      color: {
        value: `${lightTheme.text}`,
        animation: {
          h: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            delay: 0,
            decay: 0,
            sync: true,
          },
          s: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            delay: 0,
            decay: 0,
            sync: true,
          },
          l: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            delay: 0,
            decay: 0,
            sync: true,
          },
        },
      },
      groups: {},
      move: {
        angle: {
          offset: 0,
          value: 90,
        },
        attract: {
          distance: 200,
          enable: false,
          rotate: {
            x: 600,
            y: 1200,
          },
        },
        center: {
          x: 50,
          y: 50,
          mode: "percent",
          radius: 0,
        },
        decay: 0,
        distance: {},
        direction: "none",
        drift: 0,
        enable: true,
        gravity: {
          acceleration: 9.81,
          enable: false,
          inverse: false,
          maxSpeed: 50,
        },
        path: {
          clamp: true,
          delay: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
          },
          enable: false,
          options: {},
        },
        outModes: {
          default: "bounce",
          bottom: "bounce",
          left: "bounce",
          right: "bounce",
          top: "bounce",
        },
        random: false,
        size: false,
        speed: 7,
        spin: {
          acceleration: 0,
          enable: false,
        },
        straight: false,
        trail: {
          enable: false,
          length: 10,
          fill: {},
        },
        vibrate: false,
        warp: false,
      },
      number: {
        density: {
          enable: true,
          width: 1920,
          height: 1080,
        },
        limit: 0,
        value: 100,
      },
      opacity: {
        random: {
          enable: false,
          minimumValue: 0.1,
        },
        value: 0.8,
        animation: {
          count: 0,
          enable: false,
          speed: 1,
          decay: 0,
          delay: 0,
          sync: false,
          mode: "auto",
          startValue: "random",
          destroy: "none",
          minimumValue: 0.1,
        },
      },
      reduceDuplicates: false,
      shadow: {
        blur: 0,
        color: {
          value: "#000",
        },
        enable: false,
        offset: {
          x: 0,
          y: 0,
        },
      },
      shape: {
        loadShape: {},
        close: true,
        fill: true,
        options: {},
        type: "circle",
      },
      size: {
        random: {
          enable: true,
          minimumValue: 10,
        },
        value: {
          min: 10,
          max: 30,
        },
        animation: {
          count: 0,
          enable: false,
          speed: 40,
          decay: 0,
          delay: 0,
          sync: false,
          mode: "auto",
          startValue: "random",
          destroy: "none",
          minimumValue: 0.1,
        },
      },
      stroke: {
        width: 0,
      },
      zIndex: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 0,
        opacityRate: 1,
        sizeRate: 1,
        velocityRate: 1,
      },
      destroy: {
        bounds: {},
        mode: "none",
        split: {
          count: 1,
          factor: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 3,
          },
          rate: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: {
              min: 4,
              max: 9,
            },
          },
          sizeOffset: true,
        },
      },
      roll: {
        darken: {
          enable: false,
          value: 0,
        },
        enable: false,
        enlighten: {
          enable: false,
          value: 0,
        },
        mode: "vertical",
        speed: 25,
      },
      tilt: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 0,
        animation: {
          enable: false,
          speed: 0,
          decay: 0,
          sync: false,
        },
        direction: "clockwise",
        enable: false,
      },
      twinkle: {
        lines: {
          enable: false,
          frequency: 0.05,
          opacity: 1,
        },
        particles: {
          enable: false,
          frequency: 0.05,
          opacity: 1,
        },
      },
      wobble: {
        distance: 5,
        enable: false,
        speed: {
          angle: 50,
          move: 10,
        },
      },
      life: {
        count: 0,
        delay: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
          sync: false,
        },
        duration: {
          random: {
            enable: false,
            minimumValue: 0.0001,
          },
          value: 0,
          sync: false,
        },
      },
      rotate: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 0,
        animation: {
          enable: false,
          speed: 0,
          decay: 0,
          sync: false,
        },
        direction: "clockwise",
        path: false,
      },
      orbit: {
        animation: {
          count: 0,
          enable: false,
          speed: 1,
          decay: 0,
          delay: 0,
          sync: false,
        },
        enable: false,
        opacity: 1,
        rotation: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 45,
        },
        width: 1,
      },
      links: {
        blink: false,
        color: {
          value: "#000",
        },
        consent: false,
        distance: 150,
        enable: false,
        frequency: 1,
        opacity: 0.4,
        shadow: {
          blur: 5,
          color: {
            value: "#000",
          },
          enable: false,
        },
        triangles: {
          enable: false,
          frequency: 1,
        },
        width: 1,
        warp: false,
      },
      repulse: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 0,
        enabled: false,
        distance: 1,
        duration: 1,
        factor: 1,
        speed: 1,
      },
    };
  return (
    <ThemeProvider theme={lightTheme}>
      <HomeButton />
      <LogoComponent theme="light" />
      <SocialIcons theme="light" />
      <ParticleComponent theme={lightTheme} particles={particles} />
      <Box>
        <Main>
          <Title>
            <FaComputer size={56} />
            Front-End Developer
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
            Back-End Developer
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
