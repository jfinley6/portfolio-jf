import React, { useCallback, useMemo } from "react";
import styled from "styled-components";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { loadFull } from "tsparticles";

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
`;

const ParticleComponent = (props) => {
  const { particles } = props;
  const options = useMemo(() => {
    return {
      background: {
        color: {
          value: `${props.theme.body}`,
        },
        image: "",
        position: "",
        repeat: "",
        size: "",
        opacity: 1,
      },
      backgroundMask: {
        composite: "destination-out",
        cover: {
          color: {
            value: `${props.theme.body}`,
          },
          opacity: 1,
        },
        enable: false,
      },
      defaultThemes: {},
      delay: 0,
      duration: 0,
      fpsLimit: 120,
      interactivity: {
        events: {
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: particles,
      detectRetina: true,
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return (
    <Box>
      <Particles init={particlesInit} options={options} />
    </Box>
  );
};

export default ParticleComponent;
