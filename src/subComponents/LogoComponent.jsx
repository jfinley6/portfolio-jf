import React from "react";
import styled from "styled-components";

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) => props.theme.text};
  font-family: 'Pacifico', cursive;

`;

export const LogoComponent = () => {
  return <Logo>JF</Logo>;
};
