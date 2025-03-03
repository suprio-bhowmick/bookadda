import {  Box, Typography } from "@mui/material";
import { SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const CategoryBox = ({category}) => {
  return (
    <SwiperSlide >
      <Box
      component={Link}
      to={`/shop/category/${category.name}`}
        sx={{
          textAlign: "center",
          borderRadius: "10px",
          overflow: "hidden",
          textDecoration:"none !important"
        }}
      >
        <img
          src={`/assets/image/${category.image}`}
          alt={category.name}
          style={{
            width: "160px",
            height: "200px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
        <Typography mt={1} sx={{color : "#3b3b3b", textDecoration:"none !important"}} fontWeight="bold">
          {category.name}
        </Typography>
      </Box>
    </SwiperSlide>
  );
};

export default CategoryBox;
