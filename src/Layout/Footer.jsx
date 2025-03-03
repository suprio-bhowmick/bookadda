import React from "react";
import { Container, Grid, Typography, Link, Box, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box component="footer" sx={{
      bgcolor: (color) => color.palette.primary.main, color: "white", py: 4
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              Your go-to bookstore for the best collection of books across various genres.
            </Typography>
          </Grid>
          
          {/* Links Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="#" color="inherit" display="block">Home</Link>
            <Link href="#" color="inherit" display="block">Shop</Link>
            <Link href="#" color="inherit" display="block">Contact Us</Link>
            <Link href="#" color="inherit" display="block">Privacy Policy</Link>
          </Grid>
          
          {/* Social Media Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <IconButton color="inherit" href="#">
              <Facebook />
            </IconButton>
            <IconButton color="inherit" href="#">
              <Twitter />
            </IconButton>
            <IconButton color="inherit" href="#">
              <Instagram />
            </IconButton>
            <IconButton color="inherit" href="#">
              <YouTube />
            </IconButton>
          </Grid>
        </Grid>
        
        {/* Copyright */}
        <Box textAlign="center" mt={3}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Bookstore. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
