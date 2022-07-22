// Banners desing for the about us page
import { styled, Grid, Typography, Button } from '@mui/material';

import banner1 from "/home/yuvraj/Clouture/client/src/Images/AboutUs_page/banner1.jpg";
import banner2 from "/home/yuvraj/Clouture/client/src/Images/AboutUs_page/banner2.jpg";

const AboutUsGrid = styled(Grid)`
    position: absolute;
    margin-top: 7.7em;
    width: 100vw;
`;

const Image1 = styled('img')({
    height: '100vh',
    width: '100%',
})

const Image2 = styled('img')({
    height: '100vh',
    width: '50em'
})

const ShopBtn = styled(Button)`
    display: flex;
    margin-top: 2em;
    padding: 1em 1em;
    color: black;
    background-color: white;
    font-size: 1.2em;
    border: 2px solid black;
    text-transform: none;
    &:hover{
        color: white;
        background-color: black;
    }
`;

const Banners = () => {
  return (
    <AboutUsGrid container>
        <Typography variant="h3"
        sx={{
        pl: '45vw',
        width: '100vw',
        color: 'black'
        }}>
          What We Do
        </Typography>

        {/* 1st Banner */}
        <Grid display='flex' sx={{ 
          mt: 3
          }}>
            <Image1 src={banner1} alt="banner1" />
            <Grid item sx={{
              p: 10,
              m: 2
            }}>
              <Typography variant="p"
              sx={{
              color: 'black',
              fontSize: "1.5em",
              letterSpacing: '2px'
              }}>
              CLOUTURE is India's leading marketplace for all things sneakers and street fashion. It was born with the need to indulge the growing street culture story in India, by bringing the hottest trends from across the globe, all under one roof.
            </Typography>
            <ShopBtn variant="contained">Shop Now</ShopBtn>
          </Grid>
        </Grid>

        {/* 2nd Banner */}
        <Grid display='flex'>
            <Grid item sx={{
              p: 10,
              width: '50%'
            }}>
              <Typography variant="p"
              sx={{
              color: 'black',
              fontSize: "1.5em",
              letterSpacing: '2px'
              }}>
              Today, CLOUTURE houses premium and exclusive brands like Yeezys, Jordans, Anti Social Social Club, Adidas, Nike, HRX, Puma,Fila It is the one-stop-platform for all sneakerheads, trendsetters, street crews and hype lovers to get their hands on all the latest drops, limited drips, exclusive collaborations, and OG dead stocks. CLOUTURE is redefining street craze with its unique partnerships and authentic products to reign in a revolution.
            </Typography>
            <ShopBtn variant="contained">Shop Now</ShopBtn>
          </Grid>
          <Image2 src={banner2} alt="banner1" />
        </Grid>
      </AboutUsGrid>
  )
}

export default Banners;