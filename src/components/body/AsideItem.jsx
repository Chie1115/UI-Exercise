import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const AsideItem = () => {
  return (
    <Paper sx={{ padding: 2, marginBottom: 2, backgroundColor: '#f5f5f5' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src="your-image-url.jpg" alt="Aside" style={{ width: '100%', borderRadius: '8px' }} />
        <Typography variant="h6" sx={{ marginTop: 1 }}>Text</Typography>
        <Typography variant="body2">Mer Text</Typography>
      </Box>
    </Paper>
  );
};

export default AsideItem;
