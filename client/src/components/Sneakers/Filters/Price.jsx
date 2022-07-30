import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState([5000, 100000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Typography sx={{ m: 5 }}>Price Range</Typography>
    <Box sx={{ width: 300, m: 5 }}>
      <Slider
        getAriaLabel={() => 'Price'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
        step={5000}
      marks
      min={5000}
      max={50000}
      />
    </Box>
    </>
  );
}
