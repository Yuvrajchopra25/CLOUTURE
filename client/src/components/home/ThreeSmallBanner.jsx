// Three small banners on home page

import { styled, Box } from "@mui/material";

import img1 from "/home/yuvraj/Clouture/client/src/Images/home_page/apparels_Mens.jpg";
import img2 from "/home/yuvraj/Clouture/client/src/Images/home_page/sneakers.jpeg";
import img3 from "/home/yuvraj/Clouture/client/src/Images/home_page/banner3.webp";

const MainContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 18em;
  width: 100%;
  margin-top: 0.3em;
`;

const Banner1 = styled(Box)`
  height: auto;
  width: calc(100% - 0.4em);
  background-size: cover;
  background-repeat: no-repeat;
`;

const Banner2 = styled(Box)`
  height: auto;
  width: calc(100% - 0.4em);
  background-size: cover;
  background-repeat: no-repeat;
  margin-left: 0.2em;
  margin-right: 0.2em;
`;

const Banner3 = styled(Box)`
  height: auto;
  width: calc(100% - 0.4em);
  background-size: cover;
  background-repeat: no-repeat;
`;

const ThreeSmallBanner = () => {
  return (
    <>
      <MainContainer>
        <Banner1 sx={{ backgroundImage: `url(${img1})` }}></Banner1>
        <Banner2 sx={{ backgroundImage: `url(${img2})` }}></Banner2>
        <Banner3 sx={{ backgroundImage: `url(${img3})` }}></Banner3>
      </MainContainer>
    </>
  );
};

export default ThreeSmallBanner;
