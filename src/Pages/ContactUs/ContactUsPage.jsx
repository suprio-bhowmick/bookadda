import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  Paper,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import PageHeader from "../../Components/PageHeader";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactDetails = [
    {
      icon: <LocationOn fontSize="large" color="primary" />,
      title: "Address",
      text: "Salt Lake Sector-5, Kolkata - 700091",
    },
    {
      icon: <Phone fontSize="large" color="primary" />,
      title: "Phone",
      text: "+1 (234) 567-8900",
    },
    {
      icon: <Email fontSize="large" color="primary" />,
      title: "Email",
      text: "contact@bookstore.com",
    },
  ];

  return (
    <>
      <PageHeader title="Contact US" />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={4} sx={{ alignItems: "center" }}>
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h2">Send a Message</Typography>
                <Typography variant="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia velit vel excepturi repellendus laudantium non possimus distinctio eligendi aliquid autem!</Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    margin="normal"
                    required
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Details */}
          <Grid item xs={12} md={6}>
            <Typography variant="h2">Contact Information</Typography>
            <Typography sx={{mb:"25px"}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, maxime! Rem neque nostrum voluptates quasi?</Typography>
            {contactDetails.map((detail, index) => (
              <Card
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 2,
                  mb: 2,
                  boxShadow: 3,
                }}
              >
                <Box sx={{ mr: 2 }}>{detail.icon}</Box>
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="h6" color="textPrimary">
                    {detail.title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {detail.text}
                  </Typography>
                </Box>
              </Card>
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ContactUsPage;
