// Logo in navbar

import Clouturelogo from "/home/yuvraj/Clouture/client/src/Images/logo/Clouturelogo.png";

import { Box, styled } from "@mui/material";
import { Link } from "react-router-dom";

const ImgBox = styled(Box)`
  background: transparent;
  height: fit-content;
`;

const Image = styled("img")({
  width: "17em",
  height: "4.9em",
});

const Logo = () => {
  return (
    <ImgBox>
      <Link to="/">
        <Image src={Clouturelogo} alt="logo" />
      </Link>
    </ImgBox>
  );
};

export default Logo;
