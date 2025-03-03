import { Typography } from "@mui/material";
import React from "react";

function Paragraph({children}) {
  return <Typography variant="p">{children}</Typography>;
}

export default Paragraph;
