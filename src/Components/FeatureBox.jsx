import { Box, Typography } from "@mui/material";
import React from "react";

function FeatureBox({ children, tagline }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#e7e7e7",
          textAlign: "center",
          width: "100px",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "5px",
        }}
      >
        <Box
          sx={{
            color: (theme) => theme.palette.primary.main,
            fontSize: "40px",
          }}
        >
          {children}
        </Box>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h6" sx={{ fontWeight: "600" }}>
          {tagline}
        </Typography>
        <Typography color="textSecondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Typography>
      </Box>
    </Box>
  );
}

export default FeatureBox;
