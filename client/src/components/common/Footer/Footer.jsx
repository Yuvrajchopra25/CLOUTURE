// Footer

import Clouturelogo from "/home/yuvraj/Clouture/client/src/Images/logo/Clouturelogo.png";

import { styled, Box, Typography, Container, Grid, Link } from "@mui/material";

import { Drafts, Instagram, Facebook, Twitter } from "@mui/icons-material";

const BoxStyle = styled(Box)`
  //position: relative;
  background-color: black;
  margin-top: 188px;
  color: white;
`;

const BoxHeading = styled(Box)`
  color: white;
  font-size: 30px;
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
`;

const Input = styled("input")`
  margin-top: 10px;
  height: 35px;
  font-size: 20px;
  width: 100%;
`;

const IconBtn = styled("div")`
  position: absolute;
  background: transparent;
  top: calc(213em);
  left: calc(76em);
  z-index: 1;
  color: black;
`;

const SocialIconBtn = styled("div")`
  position: absolute;
  background: transparent;
  top: calc(211em);
  left: calc(55.6em);
  z-index: 1;
`;

const BoxHeadingSocial = styled(Box)`
  color: white;
  font-size: 25px;
`;

const Image = styled("img")({
  background: "white",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "-50px",
  zIndex: 1,
  cursor: "pointer",
});

const Text = styled(Typography)`
  font-size: 15px;
  margin-top: 1em;
  margin-left: 5em;
`;

const Footer = () => {
  return (
    <footer>
      <BoxStyle px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={5}>

            {/* First Menu */}
            <Grid item xs={12} sm={4}>
              <BoxHeading>Legal</BoxHeading>
              <Box pt={2}>
                <LinkStyle href="/" color="inherit">
                  Return Policy
                </LinkStyle>
              </Box>
              <Box pt={2}>
                <LinkStyle href="/" color="inherit">
                  Shipping Policy
                </LinkStyle>
              </Box>
              <Box pt={2}>
                <LinkStyle href="/" color="inherit">
                  Privacy Policy
                </LinkStyle>
              </Box>
              <Box pt={2}>
                <LinkStyle href="/" color="inherit">
                  Terms & Conditions
                </LinkStyle>
              </Box>
            </Grid>

            {/* Second Menu */}
            <Grid item xs={12} sm={4}>
              <BoxHeading>HELP</BoxHeading>
              <Box pt={2}>
                <LinkStyle href="/" color="inherit">
                  My Account
                </LinkStyle>
              </Box>
              <Box pt={2}>
                <LinkStyle href="/" color="inherit">
                  Order History
                </LinkStyle>
              </Box>
              <Box pt={2}>
                <LinkStyle href="/" color="inherit">
                  Wish List
                </LinkStyle>
              </Box>
              <Box pt={2}>
                <LinkStyle href="/" color="inherit">
                  Sell With Us
                </LinkStyle>
              </Box>
            </Grid>

            {/* Third Menu */}
            <Grid item xs={12} sm={4}>
              <BoxHeading>NEWSLETTER</BoxHeading>
              <Box>
                <Input
                  type="text"
                  style={{ paddingLeft: "10px" }}
                  placeholder="Enter your email address"
                />
                <IconBtn>
                  <Drafts style={{ position: 'absolute', top: 'calc(-5em)', left: 'calc(0.7em)', color: 'black'}} />
                </IconBtn>
                <Box pt={2}>
                  <BoxHeadingSocial>Social Connect</BoxHeadingSocial>
                </Box>
                <SocialIconBtn>
                  <Facebook
                    style={{
                      color: "rgb(66 103 178)",
                      height: "1.5em",
                      width: "1.5em",
                      marginRight: "30px",
                      cursor: "pointer",
                    }}
                  />
                  <Instagram
                    style={{
                      color: "rgb(188, 42, 141)",
                      height: "1.5em",
                      width: "1.5em",
                      marginRight: "30px",
                      cursor: "pointer",
                    }}
                  />
                  <Twitter
                    style={{
                      color: "rgb(29 161 242)",
                      height: "1.5em",
                      width: "1.5em",
                      cursor: "pointer",
                    }}
                  />
                </SocialIconBtn>
              </Box>
            </Grid>
          </Grid>
          <Box pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
              <Image src={Clouturelogo} alt="logo" style={{ width: 250 }} />
              <Text>
                Premier multi-brand sneaker & streetwear marketplace, Getting
                the crew hyped top to bottom! Copyright &reg; {" "}
                {new Date().getFullYear()} CLOUTURE All Right Reserved.
              </Text>
            </Box>
        </Container>
      </BoxStyle>
    </footer>
  );
};

export default Footer;
