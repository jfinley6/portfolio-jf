import React from "react";
import { Link } from "react-router-dom";
import { GitHubBtn, LinkedInBtn, ResumeBtn } from "../components/AllSvgs";
import styled from "styled-components";
import { darkTheme } from "../components/Themes";
import Resume from "/JohnFinleyResume.pdf";
import { motion } from "framer-motion";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }

  > a {
    color: inherit;
    transition: all 0.2s ease-in-out;
  }

  > a:hover {
    scale: 1.3;
  }

  @media (max-width: 768px) {
    left: 1.25rem;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? darkTheme.text : darkTheme.body};
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{scale: 0}}
        animate={{scale: [0, 1, 1.5, 1]}}
        transition={{type: "spring", duration: 1.5,delay: 0.7}}  
        
      >
        <Link to="https://github.com/jfinley6" target="_blank">
          <GitHubBtn
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </Link>
      </motion.div>
      <motion.div
        initial={{
          scale: 0,
        }}
        animate={{
          scale: [0, 1.5, 2, 1],
        }}
        transition={{
          type: "spring",
          duration: 1.5,
          delay: 0.9,
        }}
      >
        <Link to="https://linkedin.com/in/john-tyler-finley" target="_blank">
          <LinkedInBtn
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </Link>
      </motion.div>
      <motion.div
        initial={{
          scale: 0,
        }}
        animate={{
          scale: [0, 1, 1.5, 1],
        }}
        transition={{
          type: "spring",
          duration: 1.5,
          delay: 1.1,
        }}
      >
        <Link to={Resume} target="_blank">
          <ResumeBtn
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </Link>
      </motion.div>

      <Line
        initial={{
          height: 0,
        }}
        animate={{
          height: "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1.5,
          delay: 0.5,
        }}
        color={props.theme}
      />
    </Icons>
  );
};

export default SocialIcons;
