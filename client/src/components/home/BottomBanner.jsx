// Two banners at the bottom of the home page

import { styled, Box } from '@mui/material';

import img1 from "/home/yuvraj/Clouture/client/src/Images/home-page/BottomBanner1.jpg";
import img2 from "/home/yuvraj/Clouture/client/src/Images/home-page/BottomBanner2.jpg";

const BannerBox = styled(Box)`
    height: 300px;
    width: auto;
    margin-top: 0.3em;
`;

const Banner1 = styled('img')({
    position: 'relative',
    height: '30em',
    width: 'calc(49.7%)',
    marginRight: '0.3em',
    // border: '1px solid black'
});

const Banner2 = styled('img')({
    position: 'relative',
    height: '30em',
    width: 'calc(49.8%)',
    // border: '1px solid black'
});

const BottomBanner = () => {
  return (
    <BannerBox>
        <Banner1 src={img1}></Banner1>
        <Banner2 src={img2}></Banner2>
    </BannerBox>
  )
}

export default BottomBanner