// Logo and corresponding text for footer

import Clouturelogo from "/home/yuvraj/Clouture/client/src/Images/logo/Clouturelogo.png";
import Razorpaylogo from "/home/yuvraj/Clouture/client/src/Images/Payments/razorpay.jpg";
import Visalogo from "/home/yuvraj/Clouture/client/src/Images/Payments/visa.jpg";
import AmericanExpresslogo from "/home/yuvraj/Clouture/client/src/Images/Payments/american_express.jpg";

import { styled, Box, Typography } from "@mui/material";

const MainBox = styled(Box)`
    height: auto;
    width: 100%;
    background-color: black;
`;

const ImgBox = styled(Box)`
    align-items: center;
`;

const Image = styled("img")({
    display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
    width: '17em',
    height: '4.9em',
  });

const TextBox = styled(Box)`
    background-color: black;

`;

const Text = styled(Typography)`
    color: white;
    text-align: center;
`;

const PaymentLogoBox = styled(Box)`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    background-color: black;
`;

const LogoImage = styled("img")({
    height: '2em',
    width: '6em',
    margin: '1em',
    borderRadius: '5px'
});

const FooterLogo = () => {
  return (
    <>
        <MainBox>
            <ImgBox>
                <Image src={Clouturelogo} alt="logo" />
            </ImgBox>
            <TextBox>
            <Text>
              Premier multi-brand sneaker & streetwear marketplace, Getting the
              crew hyped top to bottom! <br/>Copyright &reg; {new Date().getFullYear()} CLOUTURE All Right Reserved.
            </Text>
            </TextBox>
            <PaymentLogoBox>
                <LogoImage src={Razorpaylogo} alt="" srcset="" />
                <LogoImage src={Visalogo} alt="" srcset="" />
                <LogoImage src={AmericanExpresslogo} height="50px" width="50px" alt="" srcset="" />
            </PaymentLogoBox>
        </MainBox>
    </>
  )
}

export default FooterLogo;
