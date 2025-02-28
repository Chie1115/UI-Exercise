import React from 'react';
import { AppBar, Toolbar, Typography, TextField, Button, Box } from '@mui/material';

const Header = () => {
  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        background: 'linear-gradient(45deg, #6a1b9a, #1976d2)',  // Gradient background for a modern look
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',  // Adding a subtle shadow for depth
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Search Field */}
        <TextField 
          variant="outlined" 
          placeholder="Search..." 
          size="small" 
          sx={{ 
            backgroundColor: 'white',  // White background for the search input
            borderRadius: 1,  // Rounded corners for the input
            width: '200px',  // Fixed width for the search input
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#fff',  // White border color for the input field
              },
            },
          }}
        />

        {/* Header Title */}
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 'bold',  // Bold font style for the title
            color: 'white',  // White color for the title text to contrast with the gradient background
            fontFamily: 'Roboto, sans-serif',  // Setting a clean font family
          }}
        >
          Title
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            color="inherit" 
            href="#home" 
            sx={{ textTransform: 'none', fontWeight: 'bold', color: 'white' }}
          >
            HOME
          </Button>
          <Button 
            color="inherit" 
            href="#contact" 
            sx={{ textTransform: 'none', fontWeight: 'bold', color: 'white' }}
          >
            CONTACT
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
