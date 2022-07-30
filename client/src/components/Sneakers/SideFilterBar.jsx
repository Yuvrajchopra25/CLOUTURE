// Side filter bar on the left hand side of the product page

import { Box, styled } from "@mui/material";

// components
import Brands from "./Filters/Brands.jsx";
import Colors from "./Filters/Colors.jsx";
import Gender from "./Filters/Gender.jsx";
import Price from "./Filters/Price.jsx";
import ReleaseYear from "./Filters/ReleaseYear.jsx";
import Size from "./Filters/Size.jsx";

const FilterBar = styled(Box)`
 height: 100em;
    width: 30%;
    border-right: 0.1em solid #C0C0C0;
    padding-top: 3em;
`;



export const SideFilterBar = () => {
  return (
    <FilterBar>
      <Brands />
      <Colors />
      <Gender />
      <Price />
      <ReleaseYear />
      <Size />
    </FilterBar>
  )
}

export default SideFilterBar;