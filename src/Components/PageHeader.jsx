import { Box, Container, Typography } from "@mui/material";
import React from "react";

function PageHeader({ title }) {
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/image/page-header.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "50px 0",
      }}
    >
      <Container maxWidth="lg">
        <Typography sx={{fontSize:"36px", fontWeight:"bold"}}>{title}</Typography>
      </Container>
    </Box>
  );
}

export default PageHeader;
