import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function MyCarousel() {
  const slider = [
    {
      title: "Discover Your Next Favorite Book! and Read",
      tagline:
        "Dive into a universe of captivating stories, profound knowledge, and boundless inspiration—one page at a time.",
      image: "home1.jpg",
    },
    {
      title: "A Book for Every Mood, A Story for Every Soul",
      tagline:
        "Whether you're seeking adventures or self-improvement, find books that truly resonate with you.",
      image: "home2.jpg",
    },
    {
      title: "Your Personal Library, Just a Click Away!",
      tagline:
        "Browse through an extensive collection of new releases, timeless classics, and hidden gems—all at your fingertips.",
      image: "home3.jpg",
    },
  ];
  

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      modules={[Navigation, Autoplay]}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      fadeEffect={{ crossFade: true }}
      effect="fade"
    >
      {slider.map((slide, index) => (
        <SwiperSlide key={index}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Box
              sx={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url("/assets/image/${slide.image}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
                py:{xs:"40px", md :"140px",},
                textAlign: "center",
               
              }}
            >
              <Typography
                sx={{
                  fontSize: {xs:"28px", md :"48px",},
                  fontWeight: "bold",
                  maxWidth: "800px",
                  margin: "auto",
                }}
              >
                {slide.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: {xs:"16px", md :"28px",},
                  maxWidth: "800px",
                  margin: "auto",
                }}
              >
                {slide.tagline}
              </Typography>
              <Link to={"/shop"}>
                <Button sx={{marginTop:"30px"}} variant="contained" size="large">Shop Now</Button>
              </Link>
            </Box>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MyCarousel;