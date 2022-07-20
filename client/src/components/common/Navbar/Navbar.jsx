// Navbar component

import { styled } from '@mui/material';

// components
import Logo from './Logo.jsx';
import Icons from './Icons.jsx';
import Search from './Search.jsx';

const Nav = styled('nav')`
    background: transparent;
    height: 3em;
    width: 35em;
    display: flex;
    justify-content: center;
    z-index: 1;
    position: absolute;
    left: calc(31em);
    border-bottom: 2px ridge black;
`;

const NavMenu = styled('div')`
    display: flex;
    align-items: center;
`;

const NavLink = styled('Link')`
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 10px 18px 0 1em;
    height: 100%;
    cursor: pointer;
`;

const Navbar = () => {
  return (
    <>
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
    </>
  )
}

export default Navbar;