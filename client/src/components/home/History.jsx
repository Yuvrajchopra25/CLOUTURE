// Two side by side banners below carousel

import img1 from "/home/yuvraj/Clouture/client/src/Images/home-page/jordan_Hist.webp";
import img2 from "/home/yuvraj/Clouture/client/src/Images/home-page/apparels_Hist.jpg";

import { Grid, styled, Typography } from "@mui/material";
import Button from '@mui/material/Button';

const Image1 = styled('img')({
    width: '100%',
    borderRadius: '1em',
    border: '2px solid black',
    boxShadow: '5px 5px 7px 2px rgba(0, 0, 0, 0.5)'
});

const Image2 = styled('img')({
    width: '100%',
    borderRadius: '1em',
    border: '2px solid black',
    boxShadow: '5px 5px 7px 2px rgba(0, 0, 0, 0.5)'
});

const JordanHeading = styled(Typography)({
    position: 'absolute',
    top: 'calc(20em)',
    left: 'calc(0.6em)',
    color: 'black',
    backgroundColor: 'rgba(255,255,255,0.5)',
    border: '2px solid black',
    width: '18.9em',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
});

const ApparelsHeading = styled(Typography)({
  position: 'absolute',
  top: 'calc(20em)',
  left: 'calc(20.3em)',
  color: 'black',
  backgroundColor: 'rgba(255,255,255,0.5)',
  border: '2px solid black',
  width: '18.8em',
  height: '50px',
  display: 'flex',
  justifyContent: 'center',
});

const Image1Btn = styled(Button)({
    position: 'absolute',
    top: 'calc(52em)',
    left: 'calc(4em)',
    height: '3em',
    color: 'black',
    textTransform: 'none',
    fontSize: '1.2em',
    padding: '1em 1em',
    border: '1px solid black',
    boxShadow: '5px 5px 7px 2px rgba(0, 0, 0, 0.5)',
    backgroundColor: 'rgba(255,255,255,0.5)'
});

const Image2Btn = styled(Button)({
  position: 'absolute',
  top: 'calc(52em)',
  left: 'calc(40em)',
  height: '3em',
  color: 'black',
  textTransform: 'none',
  fontSize: '1.2em',
  padding: '1em 1em',
  border: '1px solid black',
  boxShadow: '5px 5px 7px 2px rgba(0, 0, 0, 0.5)',
  backgroundColor: 'rgba(255,255,255,0.5)'
});

const History = () => {
  return (
    <Grid item lg={12} container spacing={2} paddingTop={'1em'} padding={'1em'}>
        <Grid item lg={6}>
            <Image1 src={img1} alt="jordan_History" srcset="" />
            <JordanHeading variant="h4">History of Jordans</JordanHeading>
            <Image1Btn variant="outlined">Read More</Image1Btn>
        </Grid>
        <Grid item lg={6}>
            <Image2 src={img2} alt="apparels_History" srcset="" />
            <ApparelsHeading variant="h4">History of  Apparels</ApparelsHeading>
            <Image2Btn variant="outlined">Read More</Image2Btn>
        </Grid>
    </Grid>
  )
}

export default History;
