// Icons in navbar

import { Favorite, ShoppingCart, AccountCircle } from "@mui/icons-material";

import { styled } from '@mui/material';

const IconBtn = styled('div')`
    position: absolute;
    background: transparent;
    top: calc(1.9em);
    left: calc(67em);
    z-Index: 1;
`;

const Icons = () => {
  return (
        <IconBtn>
            <Favorite style={{ height: '1.5em', width:'1.5em', marginRight: '0.5em', color: 'black',  cursor: 'pointer'}} />
            <ShoppingCart style={{ height: '1.5em', width:'1.5em', marginRight: '0.5em', color: 'black',  cursor: 'pointer'}} />
            <AccountCircle style={{ height: '1.5em', width:'1.5em', color: 'black',  cursor: 'pointer' }}/>
        </IconBtn>
  )
}

export default Icons;