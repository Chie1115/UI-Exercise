import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import AsideItem from './AsideItem';
import MainItem from './MainItem';

const Body = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={3}>
        {/* Aside Section */}
        <Grid item xs={12} md={4}> {/* xs=12: Full width on small screens, md=4: 4/12 width on medium and larger screens */}
          <Box sx={{ backgroundColor: '#f5f5f5', padding: 2 }}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>Rubrik</Typography>
            <Box>
              <AsideItem />
              <AsideItem />
              <AsideItem />
            </Box>
          </Box>
        </Grid>

        {/* Main Section */}
        <Grid item xs={12} md={8}> {/* xs=12: Full width on small screens, md=8: 8/12 width on medium and larger screens */}
          <Box>
            <Typography variant="h5" sx={{ marginBottom: 2 }}>Main Content</Typography>
            <Box>
              <MainItem />
              <MainItem />
              <MainItem />
              <MainItem />
              <MainItem />
              <MainItem />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Body;

