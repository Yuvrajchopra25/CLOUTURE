// Icons in navbar

import { Favorite, ShoppingCart, AccountCircle } from "@mui/icons-material";

import { IconButton } from '@mui/material';

const Icons = () => {
  return (
        <IconButton disableRipple sx={{
          position: 'relative',
          ml: '43.5em',
          mt: '-1.6em',
          color: 'black',
          cursor: 'default'
          }}>
            <Favorite sx={{
              m: 1,
              height: '1.5em',
              width:'1.5em',
              cursor: 'pointer'
              }} />

            <ShoppingCart sx={{
              m: 1,
              height: '1.5em',
              width:'1.5em',
              cursor: 'pointer'
              }} />

            <AccountCircle sx={{
              m: 1,
              height: '1.5em',
              width:'1.5em',
              cursor: 'pointer'
              }} />
        </IconButton>
  )
}

export default Icons;