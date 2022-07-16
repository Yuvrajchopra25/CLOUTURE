// Footer

import { styled, Box, Typography } from '@mui/material';

const BoxStyle = styled(Box)`
    height: 200px;
    width: auto;
    background-color: purple;
    margin-top: 185px;
`;

const Text = styled(Typography)`
    font-size: xx-large;
    text-align: center;
    padding-top: 150px;
`;

const Footer = () => {
  return (
    <BoxStyle>
        <Text>FOOTER</Text>
    </BoxStyle>
  )
}

export default Footer