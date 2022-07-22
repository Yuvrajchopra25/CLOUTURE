// logo in navbar

import Clouturelogo from '/home/yuvraj/Clouture/client/src/Images/logo/Clouturelogo.png';

import { styled, Box } from '@mui/material';

const ImgBox = styled(Box)`
    position: relative;
    background: transparent;
    width: 26em;
    height: 6.5em;
    display: flex;
    cursor: pointer;
    margin-left: 6em;
`;

const Logo = () => {
  return (
        <ImgBox>
          <img src={Clouturelogo} alt="logo" style={{ width: '100%' }}/>
        </ImgBox>
  )
}

export default Logo;