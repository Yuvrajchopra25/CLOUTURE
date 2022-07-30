import React from 'react';
import { FormControl, InputLabel, Select } from '@mui/material';

const Brands = () => {
  return (
    <>
      <FormControl>
        <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
      </FormControl>
      <Select multiple></Select>
    </>
  )
}

export default Brands;