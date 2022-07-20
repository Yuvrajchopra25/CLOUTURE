// Two side by side banners below carousel

import img1 from "/home/yuvraj/Clouture/client/src/Images/home_page/jordan_Hist.webp";
import img2 from "/home/yuvraj/Clouture/client/src/Images/home_page/apparels_Hist.jpg";

import { Grid, styled } from "@mui/material";
import Button from '@mui/material/Button';

const Image1 = styled('img')({
    width: '100%'
});

const Image2 = styled('img')({
    width: '100%'
});
    
  const Image1Btn = styled(Button)`
  position: absolute;
  top: calc(52em);
  left: calc(4em);
  height: 3em;
  color: white;
  text-transform: none;
  font-size: 1.2em;
  padding: 1em 1em;
  border: 2px solid white;
  &:hover{
        color: black;
        background-color: white;
    }
`;

const Image2Btn = styled(Button)`
  position: absolute;
  top: calc(52em);
  left: calc(40em);
  height: 3em;
  color: white;
  text-transform: none;
  font-size: 1.2em;
  padding: 1em 1em;
  border: 2px solid white;
  &:hover{
        color: black;
        background-color: white;
    }
`;

const History = () => {
  return (
    <Grid item lg={12} container spacing={0.5} paddingTop={'0.2em'}>
        <Grid item lg={6}>
            <Image1 src={img1} alt="jordan_History" srcset="" />
            <Image1Btn variant="outlined">Read More</Image1Btn>
        </Grid>
        <Grid item lg={6}>
            <Image2 src={img2} alt="apparels_History" srcset="" />
            <Image2Btn variant="outlined">Read More</Image2Btn>
        </Grid>
    </Grid>
  )
}

export default History;
