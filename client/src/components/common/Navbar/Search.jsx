// Search bar inside navbar

import { InputBase, Box, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
    background: white;
    height: 1.9em;
    width: 28.1em;
    z-index: 1;
    position: absolute;
    top: calc(3.5em);
    left: calc(33.8em);
    padding-left: 20px;
    border: 0.1em solid black;
`;

const InputSearchBase = styled(InputBase)`
    width: 100%;
    padding-left: 11px;
    font-size: unset;
`;

const SearchIconWrapper = styled(Box)`
    position: absolute;
    color: black;
    top: calc(-0.1em);
    left: calc(0em);
    padding: 5px;
    display: flex;
    z-index: 2;
`;

const Search = () => {
  return (
    <SearchContainer>
      <InputSearchBase placeholder="Search for products, brands and more" />
      <SearchIconWrapper>
          <SearchIcon />
      </SearchIconWrapper>
    </SearchContainer>
  );
};

export default Search;