// Two side by side banners below carousel

import img1 from "/home/yuvraj/Clouture/client/src/Images/home_page/jordan_Hist.jpg";
import img2 from "/home/yuvraj/Clouture/client/src/Images/home_page/apparels_Hist.jpg";

import { Box, Grid, styled } from "@mui/material";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

const BannerContainer = styled(Grid)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 30em;
  margin-top: 0.2em;
`;

const Banner1 = styled(Box)`
  height: 30em;
  width: calc(50% - 0.1em);
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 0.2em;
`;

const Banner2 = styled(Box)`
  width: calc(50% - 0.1em);
  height: 30em;
  object-fit: cover;
  background-repeat: no-repeat;
`;

const Image1Btn = styled(Button)`
  color: white;
  top: 20em;
  left: 5em;
  padding: 1em 1em;
  font-size: 1em;
  text-transform: none;
  border: 2px solid white;
  &:hover {
    color: black;
    background-color: white;
    border: 1px solid black;
  }
`;

const Image2Btn = styled(Button)`
  color: white;
  top: 20em;
  left: 5em;
  padding: 1em 1em;
  font-size: 1em;
  text-transform: none;
  border: 2px solid white;
  &:hover {
    color: black;
    background-color: white;
    border: 1px solid black;
  }
`;

const LinkStyle = styled(NavLink)`
  text-decoration: none;
  color: white;
  &:hover {
    color: black;
  }
`;

const History = () => {
  return (
    <BannerContainer container>
      <Banner1 sx={{ backgroundImage: `url(${img1})` }}>
        <LinkStyle to="/sneakers">
          <Image1Btn variant="outlined">Read More</Image1Btn>
        </LinkStyle>
      </Banner1>
      <Banner2 sx={{ backgroundImage: `url(${img2})` }}>
        <LinkStyle to="/apparels">
          <Image2Btn variant="outlined">Read More</Image2Btn>
        </LinkStyle>
      </Banner2>
    </BannerContainer>
  );
};

export default History;
