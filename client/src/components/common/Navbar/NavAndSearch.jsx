// Navbar and Search bar

import { NavLink } from 'react-router-dom';

import { Box, styled, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const NavBox = styled(Box)`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 34em;
  align-items: center;
`;

const NavMenu = styled(Box)`
  display: flex;
  height: auto;
  width: 100%;
  justify-content: space-evenly;
  border-bottom: 0.2em solid white;
  text-decoration: none;
`;

const NavBarLink = styled(NavLink)`
  margin-bottom: 0.1em;
  padding: 0.5em;
  text-decoration: none;
  align-items: flex-end;
  color: white;
  align-items: center;
`;

const SearchContainer = styled(Box)`
  display: flex;
  background: black;
  border: 0.1em solid black;
  height: 1.8em;
  width: 30em;
  margin: 0.6em;
  border-radius: 1em;
`;

const InputSearchBase = styled(InputBase)`
  width: 100%;
  font-size: unset;
  padding-left: 0.7em;
  padding-right: 0.7em;
  background: white;
  border-radius: 1em;
`;

const NavAndSearch = ({value, changeInput}) => {

  // Method to style the activated link in our navbar menu
  const navLinkStyle = ({ isActive }) =>{
    return{
      color: isActive ? 'red' : 'white',
      // borderBottom: isActive ? '1px solid red' : 'none' 
    }}

  return (
    <>
      {/* Navbar */}
      <NavBox>
        <NavMenu>
          {/* To enable the class to be active on selecting the menu item  */}
          <NavBarLink to="/sneakers" className={(navData)=> navData.isActive ? 'nav-link active': 'nav-link'} style={navLinkStyle}>
            Sneakers
          </NavBarLink>
          <NavBarLink to="/apparels"  className={(navData)=> navData.isActive ? 'nav-link active': 'nav-link'} style={navLinkStyle}>
            Apparels
          </NavBarLink>
          <NavBarLink to="/protect" className={(navData)=> navData.isActive ? 'nav-link active': 'nav-link'} style={navLinkStyle}>
            Protect
          </NavBarLink>
          <NavBarLink to="/legitCheck" className={(navData)=> navData.isActive ? 'nav-link active': 'nav-link'} style={navLinkStyle}>
            Legit Check
          </NavBarLink>
          <NavBarLink to="/aboutUs"  className={(navData)=> navData.isActive ? 'nav-link active': 'nav-link'} style={navLinkStyle}>
            About Us
          </NavBarLink>
        </NavMenu>

        {/* Search bar */}
        <SearchContainer>
          <InputSearchBase placeholder="Search for products, brands and more" value={value} onChange={changeInput} />
          <SearchIcon sx={{ m: 0.3, color: "white" }} />
        </SearchContainer>
      </NavBox>
    </>
  );
};

export default NavAndSearch;
