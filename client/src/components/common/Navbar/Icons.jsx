// Icons in navbar
import { useState } from "react";

import { NavLink } from "react-router-dom";

import {
  Favorite,
  ShoppingCart,
  AccountCircle,
  Login,
} from "@mui/icons-material";

import { Box, Menu, MenuItem, styled } from "@mui/material";

const Buttons = styled(Box)`
  height: fit-content;
  margin-top: 0.6em;
  color: white;
`;

const UserLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

const Icons = () => {
  // to open the menu for login/signup
  const [accountAnchorEl, setAccountAnchorEl] = useState(null);

  const handleOpen = (e) => setAccountAnchorEl(e.currentTarget); //Here, e.currentTarget gives us value true
  const handleClose = () => setAccountAnchorEl(false);

  return (
    <>
      <Buttons>
        <Favorite
          sx={{
            m: 1,
            height: "1.5em",
            width: "1.5em",
            cursor: "pointer",
          }}
        />
        <ShoppingCart
          sx={{
            m: 1,
            height: "1.5em",
            width: "1.5em",
            cursor: "pointer",
          }}
        />
        <AccountCircle
          onClick={handleOpen}
          sx={{
            m: 1,
            height: "1.5em",
            width: "1.5em",
            cursor: "pointer",
          }}
        />
      </Buttons>
      <Menu
        open={Boolean(accountAnchorEl)}
        anchorEl={accountAnchorEl}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <UserLink to="/login">
            <AccountCircle sx={{ mr: 2, mb: -1 }} />
            Log In
          </UserLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <UserLink to="/signUp">
            <Login sx={{ mr: 2, mb: -1 }} />
            Sign Up
          </UserLink>
        </MenuItem>
      </Menu>
    </>
  );
};

export default Icons;
