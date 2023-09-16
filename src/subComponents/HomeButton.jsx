import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HomeBtn } from "../components/AllSvgs";

const Home = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);

  background-color: #fcf6f4;
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  cursor: pointer;

  &:hover {
    background-color: rgba(72, 113, 247, 0.8);
    box-shadow: 0 0 8px 6px rgba(72, 113, 247, 0.2);
  }

  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }
`;

const HomeButton = () => {
  return (
    <Home>
      <Link to="/">
        <HomeBtn width={30} height={30} fill="currentColor" />
      </Link>
    </Home>
  );
};

export default HomeButton;
