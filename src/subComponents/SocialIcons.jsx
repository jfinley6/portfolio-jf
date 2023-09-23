import React from "react";
import { Link } from "react-router-dom";
import { GitHubBtn, LinkedInBtn, ResumeBtn } from "../components/AllSvgs";
import styled from "styled-components";
import { darkTheme } from "../components/Themes";
import Resume from "/JohnFinleyResume.pdf"

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

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "darkTheme" ? darkTheme.text : darkTheme.body};
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <Link to="https://github.com/jfinley6" target="_blank">
        <GitHubBtn
          width={25}
          height={25}
          fill={props.theme === "darkTheme" ? darkTheme.text : darkTheme.body}
        />
      </Link>
      <Link to="https://linkedin.com/in/john-tyler-finley" target="_blank">
        <LinkedInBtn
          width={25}
          height={25}
          fill={props.theme === "darkTheme" ? darkTheme.text : darkTheme.body}
        />
      </Link>
      <Link to={Resume} target="_blank">
        <ResumeBtn
          width={25}
          height={25}
          fill={props.theme === "darkTheme" ? darkTheme.text : darkTheme.body}
        />
      </Link>

      <Line color={props.theme} />
    </Icons>
  );
};

export default SocialIcons;
