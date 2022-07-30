// Header
import { Box, styled } from "@mui/material";

// components
import Logo from "./Logo.jsx";
import Icons from "./Icons.jsx";
import NavAndSearch from "./NavAndSearch.jsx";

const HeaderBox = styled(Box)`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  height: auto;
  z-index: 1;
`;

const Navbar = () => {
  return (
    <>
      <HeaderBox>
        <Logo />
        <NavAndSearch />
        <Icons />
      </HeaderBox>
    </>
  );
};

export default Navbar;
