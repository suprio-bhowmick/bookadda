import { Typography } from "@mui/material";
import React from "react";

function Heading({ title }) {
  return <Typography variant="h2" sx={{fontSize: { xs: "26px", md: "45px" }, color:"#1a1668", marginTop:{ xs: "20px", md: "40px" }, marginBottom:"20px"}}>{title}</Typography>;
}

export default Heading;
