// Product grid

import { Box, styled } from "@mui/material";

// components
import SideFilterBar from "./SideFilterBar";
import ProductBar from "./ProductBar";

const MainContainer = styled(Box)`
    display: flex;
    flex-direction: row;
    height: 100em;
    width: 100%;
    border: 1px solid red;
`;

const ProductListing = () => {
  return (
    <>
        <MainContainer>
        <SideFilterBar />
        <ProductBar />
        </MainContainer>
    </>
  )
}

export default ProductListing;