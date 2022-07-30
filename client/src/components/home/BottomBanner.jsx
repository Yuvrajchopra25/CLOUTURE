// Two banners at the bottom of the home page

import { styled, Box } from "@mui/material";

import img1 from "/home/yuvraj/Clouture/client/src/Images/home_page/BottomBanner1.jpg";
import img2 from "/home/yuvraj/Clouture/client/src/Images/home_page/BottomBanner2.jpg";

const MainContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 30em;
  width: 100%;
  margin-top: 0.2em;
`;

const Banner1 = styled(Box)`
  height: auto;
  width: calc(100% - 0.2em);
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 0.2em;
`;

const Banner2 = styled(Box)`
  height: auto;
  width: calc(100% - 0.2em);
  background-size: cover;
  background-repeat: no-repeat;
`;

const BottomBanner = () => {
  return (
    <>
      <MainContainer>
        <Banner1 sx={{ backgroundImage: `url(${img1})` }}></Banner1>
        <Banner2 sx={{ backgroundImage: `url(${img2})` }}></Banner2>
      </MainContainer>
    </>
  );
};

export default BottomBanner;
