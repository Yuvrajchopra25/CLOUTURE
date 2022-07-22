// Search bar inside navbar

import { InputBase, Box, styled } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const SearchContainer = styled(Box)`
    position: relative;
    background: white;
    height: 1.8em;
    width: 27em;
    padding-left: 1.2em;
    padding-bottom: 0.2em;
    margin-left: 33.8em;
    margin-top: -1.5em;
    border: 0.1em solid black;
`;

const InputSearchBase = styled(InputBase)`
    width: 100%;
    padding-left: 11px;
    font-size: unset;
`;

const Search = () => {
  return (
    <SearchContainer>
      <InputSearchBase placeholder="Search for products, brands and more" />
      <IconButton sx={{
        display: 'flex',
        color: 'black',
        ml: '-1em',
        mt: '-1.5em'
        }}>
        <SearchIcon />
      </IconButton>
    </SearchContainer>
  );
};

export default Search;