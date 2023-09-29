import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GitHubBtn } from "./AllSvgs";
import { motion } from "framer-motion";

const Box = styled(motion.div)`
  height: 60vh;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 1.5rem 1.5rem;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: 1px solid ${(props) => props.theme.body};
  transition: all 0.2s ease;
  z-index: 3;

  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
  }

  @media (max-width: 860px) {
    padding: 0rem 1rem;
  }
`;

const Title = styled.h2`
  font-size: 1.5em;
`;

const Description = styled.h2`
  font-size: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 500;
  height: 10vh;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    height: 5vh;
  }
`;

const HashTags = styled.div`
  padding: 0.5rem 0;
  width: 100%;
  border-top: 2px solid ${(props) => props.theme.body};
  top: 0%;
  position: absolute;

  ${Box}:hover & {
    border-top: 2px solid ${(props) => props.theme.text};
  }
`;

const Tag = styled.span`
  display: inline-block;
  white-space: normal;
  font-size: calc(0.8em + 0.3vw);
  margin-right: 0.8rem;
`;

const Footer = styled.footer`
  position: relative;
  width: 100%;
  height: 15vh;
`;

const ProjectLink = styled(Link)`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  text-decoration: none;
  padding: 0.5rem calc(2rem);
  border-radius: 0 0 0 50px;
  font-size: 1.1em;
  position: absolute;
  left: 0;
  bottom: 0;

  ${Box}:hover & {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;

const GitLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  position: absolute;
  right: 0;
  bottom: 0;

  ${Box}:hover & {
    & > * {
      fill: ${(props) => props.theme.text};
    }
  }
`;

const Img = styled.img`
  width: 100%;
  height: 25vh;
  object-fit: contain;
`;

const Item = {
  hidden: {
    scale: 0
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5
    }
  }
};

const Card = (props) => {
  const { id, name, description, tags, demo, github, img } = props.data;

  return (
    <Box key={id} variants={Item}>
      <Title>{name}</Title>
      <Img src={img} />
      <Description>{description}</Description>
      <Footer>
        <HashTags>
          {tags.map((tag, id) => {
            return <Tag key={id}>#{tag}</Tag>;
          })}
        </HashTags>
        {demo ? (
          <ProjectLink to={demo} target="_blank">
            Demo
          </ProjectLink>
        ) : null}
        <GitLink to={github} target="_blank">
          <GitHubBtn width={30} height={30} />
        </GitLink>
      </Footer>
    </Box>
  );
};

export default Card;
