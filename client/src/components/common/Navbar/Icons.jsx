// Icons in navbar

import { Favorite, ShoppingCart, AccountCircle } from "@mui/icons-material";

import { styled } from '@mui/material';

const IconBtn = styled('div')`
    position: absolute;
    background: transparent;
    top: calc(1.9em);
    left: calc(67em);
    z-Index: 1;
    color: black;
`;

const Icons = () => {
  return (
        <IconBtn>
            <Favorite style={{ height: '1.5em', width:'1.5em', paddingRight: '0.5em' }} />
            <ShoppingCart style={{ height: '1.5em', width:'1.5em', paddingRight: '0.5em' }} />
            <AccountCircle style={{ height: '1.5em', width:'1.5em'}} />
        </IconBtn>
  )
}

export default Icons;