// Navbar component

import { Box, styled } from '@mui/material';

// components
import Logo from './Logo.jsx';
import Icons from './Icons.jsx';
import Search from './Search.jsx';

const HeaderBox = styled(Box)`
    position: absolute;
    width: 100vw;
    height: 7.5em;
    z-index: 1;
`;

const Nav = styled('nav')`
    display: flex;
    margin-left: 31em;
    margin-top: -7em;
    height: 2.5em;
    width: 34em;
    justify-content: center;
    border-bottom: 0.2em ridge black;
`;

const NavMenu = styled('div')`
    display: flex;
    align-items: center;
    margin-left: 1.2em;
`;

const NavLink = styled('Link')`
    display: flex;
    color: black;
    align-items: center;
    padding: 10px 5px 0px 5px;
    height: 100%;
    cursor: pointer;
    margin-right: 20px;
`;

const Navbar = () => {
  return (
    <>
        <HeaderBox>
            <Logo />
            <Nav>
                <NavMenu>
                    <NavLink to="/sneakers">
                        Sneakers
                    </NavLink>
                    <NavLink to="/apparels">
                        Apparels
                    </NavLink>
                    <NavLink to="/protect">
                        Protect
                    </NavLink>
                    <NavLink to="/legit-check">
                        Legit Check
                    </NavLink>
                    <NavLink to="/about-us">
                        About Us
                    </NavLink>
                </NavMenu>
            </Nav>
            <Icons />
            <Search />
        </HeaderBox>
    </>
  )
}

export default Navbar;