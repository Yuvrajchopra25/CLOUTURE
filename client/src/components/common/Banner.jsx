// Sneakers banner
import { styled, Box } from '@mui/material';

import SneakerBannerImg from '/home/yuvraj/Clouture/client/src/Images/Sneakers_page/sneakerBannerImg.webp';

const SneakerBanner = styled(Box)`
    height: 20em;
    width: 100%;
`;

const Image = styled('img')({
    height: '20em',
    width: '100%',
    objectFit: 'cover'
})

const Banner = () => {
  return (
    <>
      <SneakerBanner>
        <Image src={SneakerBannerImg} alt="" srcset="" />
      </SneakerBanner>
    </>
  )
}

export default Banner;