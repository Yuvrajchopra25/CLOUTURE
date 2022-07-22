// Sneakers page

import SneakerBanner from "/home/yuvraj/Clouture/client/src/Images/Sneakers_page/sneakerBannerImg.webp";

import { styled, Box } from '@mui/material';

// components
import Navbar from '../common/Navbar/Navbar.jsx';

const Banner = styled(Box)`
    display: flex;
    justify-content: center;
    position: absolute;
    height: auto;
    width: 100vw;
    margin-top: 8em;
`;

const Image = styled('img')({
    height: '20em',
    width: '70em'
})

const Sneakers = () => {
  return (
    <>
      <Navbar />
      <Banner>
        <Image src={SneakerBanner} alt="" srcset="" />
      </Banner>
    </>
  )
}

export default Sneakers;