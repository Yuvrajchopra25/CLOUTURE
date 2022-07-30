// Banners desing for the about us page
import { styled, Box, Typography, Button } from "@mui/material";

// Images
import banner1 from "/home/yuvraj/Clouture/client/src/Images/AboutUs_page/banner1.jpg";
import banner2 from "/home/yuvraj/Clouture/client/src/Images/AboutUs_page/banner2.jpg";

const MainContainer = styled(Box)`
  height: auto;
  width: 100%;
  margin-top: 2em;
`;

const HeadingBox = styled(Box)`
  height: auto;
  width: 100%;
`;

const Heading = styled(Typography)`
  text-align: center;
  font-size: 3.2em;
  font-weight: 400;
  color: black;
`;

const UpperBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: auto;
  width: 100%;
  margin-top: 2em;
`;

const UpperLeftImgBox = styled(Box)`
  height: auto;
  width: 50%;
`;

const UpperLeftImg = styled("img")({
  height: "100%",
  width: "100%",
  objectFit: "cover",
});

const UpperRightParaBox = styled(Box)`
  height: auto;
  width: 50%;
`;

const RightPara = styled(Typography)`
  margin-top: 30vh;
  margin-left: 5vw;
  margin-right: 5vw;
  font-size: 1.3em;
  text-align: justify;
`;

const Btn1 = styled(Button)`
  color: black;
  top: 5em;
  left: 5vw;
  padding: 1em 1em;
  font-size: 1em;
  text-transform: none;
  border: 2px solid black;
  &:hover {
    color: white;
    background-color: black;
  }
`;

const LowerBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: auto;
  width: 100%;
`;

const LowerRightImgBox = styled(Box)`
  height: auto;
  width: 50%;
`;

const LowerRightImg = styled("img")({
  height: "100%",
  width: "100%",
  objectFit: "cover",
});

const LowerLeftParaBox = styled(Box)`
  height: auto;
  width: 50%;
`;

const LeftPara = styled(Typography)`
  margin-top: 30vh;
  margin-left: 5vw;
  margin-right: 5vw;
  font-size: 1.3em;
  text-align: justify;
`;

const Btn2 = styled(Button)`
  color: black;
  top: 5em;
  left: 5vw;
  padding: 1em 1em;
  font-size: 1em;
  text-transform: none;
  border: 2px solid black;
  &:hover {
    color: white;
    background-color: black;
  }
`;

const Content = () => {
  return (
    <MainContainer>
      <HeadingBox>
        <Heading>What We Do</Heading>
      </HeadingBox>
      <UpperBox>
        <UpperLeftImgBox>
          <UpperLeftImg src={banner1} />
        </UpperLeftImgBox>
        <UpperRightParaBox>
          <RightPara>
            CLOUTURE is India's leading marketplace for all things sneakers and
            street fashion. It was born with the need to indulge the growing
            street culture story in India, by bringing the hottest trends from
            across the globe, all under one roof.
          </RightPara>
          <Btn1 variant="outlined">Shop Now</Btn1>
        </UpperRightParaBox>
      </UpperBox>

      <LowerBox>
        <LowerLeftParaBox>
          <LeftPara>
            Today, CLOUTURE houses premium and exclusive brands like Yeezys,
            Jordans, Anti Social Social Club, Adidas, Nike, HRX, Puma,Fila It is
            the one-stop-platform for all sneakerheads, trendsetters, street
            crews and hype lovers to get their hands on all the latest drops,
            limited drips, exclusive collaborations, and OG dead stocks.
            CLOUTURE is redefining street craze with its unique partnerships and
            authentic products to reign in a revolution.
          </LeftPara>
          <Btn2 variant="outlined">Shop Now</Btn2>
        </LowerLeftParaBox>
        <LowerRightImgBox>
          <LowerRightImg src={banner2} />
        </LowerRightImgBox>
      </LowerBox>
    </MainContainer>
  );
};
export default Content;
