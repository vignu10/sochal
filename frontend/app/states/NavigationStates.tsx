"use client"
import SideNavBar from '@/app/ui/SideNavBar'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Container from '@mui/material/Container';


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SideNavBar></SideNavBar>
          <Bars3Icon className='h-7 pr-3' > </Bars3Icon>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#F5F5F5',
              textDecoration: 'none',
            }}
          >
            Sochal
          </Typography>


        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
