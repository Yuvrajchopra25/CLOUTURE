// Sneakers page

import SneakerBanner from "/home/yuvraj/Clouture/client/src/Images/Sneakers_page/sneakerBannerImg.webp";

import { styled } from '@mui/material';

// components
import Navbar from '../common/Navbar/Navbar.jsx';

const SneakerBannerStyle = styled('img')({
    position: 'static',
    height: 'auto',
    width: 'auto'
})

const Sneakers = () => {
  return (
    <>
      <Navbar />
      <SneakerBannerStyle src={SneakerBanner} alt="" srcset="" />
    </>
  )
}

export default Sneakers;