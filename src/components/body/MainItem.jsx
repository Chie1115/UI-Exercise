import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const MainItem = () => {
  return (
    <Paper sx={{ padding: 2, marginBottom: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src="your-image-url.jpg" alt="Main" style={{ width: '100%', borderRadius: '8px' }} />
        <Typography variant="h6" sx={{ marginTop: 1 }}>Item Rubrik</Typography>
      </Box>
    </Paper>
  );
};

export default MainItem;
