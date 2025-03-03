import { Star } from "@mui/icons-material";
import { Avatar, Box, Card, Typography } from "@mui/material";
import React from "react";

function TestimonialCard({testimonial}) {
  return (
    <Card sx={{ p: 3, textAlign: "center", boxShadow: 3, borderRadius: 3 , height:"350px"}}>
      <Avatar
        src={testimonial.image}
        alt={testimonial.name}
        sx={{ width: 80, height: 80, mx: "auto", mb: 2 }}
      />
      <Typography variant="h6" gutterBottom>
        {testimonial.name}
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        {testimonial.review}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 0.5, mt: 1 }}>
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} sx={{ color: "#ffb400" }} />
        ))}
      </Box>
    </Card>
  );
}

export default TestimonialCard;
