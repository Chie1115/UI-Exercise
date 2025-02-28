import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      sx={{ 
        backgroundColor: '#333',  // Dark background for a sleek look
        color: 'white',  // White text for contrast
        textAlign: 'center',  // Center align the content
        padding: '40px 0',  // Add more padding for a cleaner, spacious look
      }}
    >
      {/* Footer Title */}
      <Typography variant="h6" sx={{ marginBottom: 4, fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}>
        Follow our socials
      </Typography>

      {/* Social Media Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
        <Button 
          color="inherit" 
          href="https://facebook.com" 
          target="_blank" 
          sx={{
            borderRadius: '50%',
            padding: '10px',
            '&:hover': {
              backgroundColor: '#4267B2',  // Facebook color on hover
              transform: 'scale(1.1)',  // Slight zoom effect on hover
            },
          }}
        >
          Facebook
        </Button>
        <Button 
          color="inherit" 
          href="https://twitter.com" 
          target="_blank" 
          sx={{
            borderRadius: '50%',
            padding: '10px',
            '&:hover': {
              backgroundColor: '#1DA1F2',  // Twitter color on hover
              transform: 'scale(1.1)',  // Slight zoom effect on hover
            },
          }}
        >
          Twitter
        </Button>
        <Button 
          color="inherit" 
          href="https://instagram.com" 
          target="_blank" 
          sx={{
            borderRadius: '50%',
            padding: '10px',
            '&:hover': {
              backgroundColor: '#E4405F',  // Instagram color on hover
              transform: 'scale(1.1)',  // Slight zoom effect on hover
            },
          }}
        >
          Instagram
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
