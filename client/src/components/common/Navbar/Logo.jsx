// logo in navbar

import Clouturelogo from '/home/yuvraj/Clouture/client/src/Images/logo/Clouturelogo.png';

import { styled } from '@mui/material';

const Image = styled('img')({
    background: 'transparent',
    left: 'calc(7em)',
    height: '7em',
    display: 'flex',
    position: 'absolute',
    zIndex: 1,
    cursor: 'pointer'
});

const Logo = () => {
  return (
        <Image src={Clouturelogo} alt="logo" style={{ width: 380 }}/>
  )
}

export default Logo;