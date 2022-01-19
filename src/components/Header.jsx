import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import '../css/header.css';

export function Header({heading, subheading, count}) {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
            <div className='heading'>
              {heading}
            </div>
            <div className='subheading'>
              {subheading}
            </div>  
        </Grid>
        <Grid item xs={4}>
            <div className='listcount'>
              {count}
            </div>
        </Grid>
      </Grid>
    </Box>
  );
}
