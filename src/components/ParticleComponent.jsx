import React, { useCallback } from "react";
import styled from "styled-components";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { loadFull } from "tsparticles";
import configDark from "../config/particlesjs-config.json";
import configLight from "../config/particlesjs-config-light.json";

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
`;

const ParticleComponent = (props) => {

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
    loadFull(engine)
  }, []);

  return (
    <Box>
      <Particles init={particlesInit} options={props.theme === 'light' ? configLight : configDark} />
    </Box>
  );
};

export default ParticleComponent;
