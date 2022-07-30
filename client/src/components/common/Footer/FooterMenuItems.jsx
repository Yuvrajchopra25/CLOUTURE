// Footer

import { NavLink } from "react-router-dom";

import { styled, Box, Typography, InputBase } from "@mui/material";

import { Drafts, Instagram, Facebook, Twitter } from "@mui/icons-material";

const MainBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  height: auto;
  background-color: black;
  color: white;
  margin-top: 0.2em;
`;

const NavBarLink = styled(NavLink)`
  text-decoration: none;
  color: white;
`;

const FirstBox = styled(Box)`
  width: 100%;
  height: auto;
  margin-top: 2em;
  margin-left: 2em;
`;

const SecondBox = styled(Box)`
  width: 100%;
  height: auto;
  margin-top: 2em;
`;

const ThirdBox = styled(Box)`
  width: 100%;
  height: auto;
  margin-top: 2em;
`;

const Heading = styled(Typography)`
  color: white;
  font-size: 2em;
`;

const Subheading = styled(Typography)`
  color: white;
  font-size: 1em;
  margin-top: 0.5em;
`;

const SocialHeading = styled(Typography)`
  color: white;
  font-size: 1.5em;
  margin-top: 0.5em;
`;

const SearchContainer = styled(Box)`
  display: flex;
  background: white;
  border: 0.1em solid white;
  height: 1.8em;
  width: 18em;
  border-radius: 0.2em;
`;

const InputSearchBase = styled(InputBase)`
  width: 100%;
  font-size: unset;
  padding-left: 0.7em;
  padding-right: 0.7em;
  background: white;
  border-radius: 0.2em;
`;

const IconButtons = styled(Box)`
  height: fit-content;
  margin-top: 0.5em;
`;

const FooterMenuItems = () => {
  return (
    <footer>
      <MainBox>
        <FirstBox>
          {/* First Menu */}
          <Heading>Legal</Heading>
          <Subheading>
            <NavBarLink to="/sneakers">Return Policy</NavBarLink>
          </Subheading>
          <Subheading>
            <NavBarLink to="/sneakers">Shipping Policy</NavBarLink>
          </Subheading>
          <Subheading>
            <NavBarLink to="/sneakers">Privacy Policy</NavBarLink>
          </Subheading>
          <Subheading>
            <NavBarLink to="/sneakers">Terms & Conditions</NavBarLink>
          </Subheading>
        </FirstBox>
        {/* Second Menu */}
        <SecondBox>
          <Heading>Help</Heading>
          <Subheading>
            <NavBarLink to="/sneakers">My Account</NavBarLink>
          </Subheading>
          <Subheading>
            <NavBarLink to="/sneakers">Order History</NavBarLink>
          </Subheading>
          <Subheading>
            <NavBarLink to="/sneakers">Wish List</NavBarLink>
          </Subheading>
          <Subheading>
            <NavBarLink to="/sneakers">Sell With Us</NavBarLink>
          </Subheading>
        </SecondBox>
        {/* Third Menu */}
        <ThirdBox>
          <Heading>Newsletter</Heading>
          <SearchContainer>
            <InputSearchBase
              type="text"
              style={{ paddingLeft: "10px" }}
              placeholder="Enter your email address"
            />
            <Drafts sx={{ m: 0.3, color: "black" }} />
          </SearchContainer>
          <SocialHeading>Social Connect</SocialHeading>
          <IconButtons>
            <a
              href="https://www.facebook.com/login"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook
                style={{
                  color: "rgb(66 103 178)",
                  height: "1.5em",
                  width: "1.5em",
                  marginRight: "1em",
                }}
              />
            </a>
            <a
              href="https://www.instagram.com/clouture_in/?igshid=YmMyMTA2M2Y%3D"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram
                style={{
                  color: "rgb(188, 42, 141)",
                  height: "1.5em",
                  width: "1.5em",
                  marginRight: "1em",
                }}
              />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <Twitter
                style={{
                  color: "rgb(29 161 242)",
                  height: "1.5em",
                  width: "1.5em",
                }}
              />
            </a>
          </IconButtons>
        </ThirdBox>
      </MainBox>
    </footer>
  );
};

export default FooterMenuItems;
