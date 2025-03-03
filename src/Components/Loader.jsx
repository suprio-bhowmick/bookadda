import React from "react";
import { CircularProgress, Box } from "@mui/material";

const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
      }}
    >
      <CircularProgress size={60} thickness={4} color="primary" />
    </Box>
  );
};

export default Loader;
