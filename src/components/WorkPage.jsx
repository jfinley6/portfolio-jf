import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./Themes";
import SocialIcons from "../subComponents/SocialIcons";
import { LogoComponent } from "../subComponents/LogoComponent";
import HomeButton from "../subComponents/HomeButton";
import { Work } from "../data/WorkData";
import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/WorkPageStyleSheet.css";
import { motion } from "framer-motion";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Main = styled(motion.div)`
  color: ${(props) => props.theme.text};
  width: 80%;
  margin: 0 auto;
  margin-top: 18vh;

  @media (max-width: 768px) {
    width: 65%;
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      duration: 1,
    },
  },
};

const WorkPage = () => {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <HomeButton />
        <LogoComponent theme="darkTheme" />
        <SocialIcons theme="dark" />

        <Main variants={container} initial="hidden" animate='show' exit={
      {
        opacity: 0,
        transition: {
          duration: 0.5,
        }
      }}>
          <Slider {...settings}>
            {Work.map((k) => (
              <Card key={k.id} data={k} />
            ))}
          </Slider>
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
