import React from 'react';

import { Box, styled, Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import ProductCard from './ProductCard.jsx';

const ProductsList = styled(Box)`
display: flex;
flex-direction: column; 
 height: 100em;
    width: 70%;
`;

const Header = styled(Box)`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 5em;
`;

const HeadingBrowse = styled(Typography)`
        margin-left: 3em;
`;

const SortingBox = styled(Box)`
    min-width: 15em;
    margin-right: 3em;
`;

const ProductBar = () => {

    const [val, setSelectedVal] = React.useState('');

  const handleChange = (event) => {
    setSelectedVal(event.target.value);
  };

  return (
    <ProductsList>
        <Header>
            <HeadingBrowse>Browse X Results</HeadingBrowse>
            <SortingBox>
                <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          value={val}
          label="Sort"
          onChange={handleChange}
        >
        <MenuItem value={1}>None</MenuItem>
          <MenuItem value={2}>Latest Release</MenuItem>
          <MenuItem value={3}>Price(High to Low)</MenuItem>
          <MenuItem value={4}>Price(Low to High)</MenuItem>
        </Select>
      </FormControl>
    </SortingBox>
        </Header>
        <ProductCard />
    </ProductsList>
  )
}

export default ProductBar;