import React from "react";
import MyCarousel from "../../Components/MyCarousel";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import Heading from "../../Components/Heading";
import Paragraph from "../../Components/Paragraph";
import { Link } from "react-router-dom";
import HomeBookCard from "../../Components/HomeBookCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FeatureBox from "../../Components/FeatureBox";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import StarIcon from "@mui/icons-material/Star";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import CategoryBox from "../../Components/CategoryBox";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import {
  ArrowBackIos,
  ArrowBackIosNew,
  ArrowForwardIos,
} from "@mui/icons-material";
import CountUp from "react-countup";
import TestimonialCard from "../../Components/TestimonialCard";
function HomePage() {
  const RecomendedBook = [
    {
      id: "1",
      title: "The Inheritance of Loss",
      price: 599.0,
      image:
        "https://m.media-amazon.com/images/I/81gLGsizwxL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      id: "2",
      title: "The Immortals of Meluha",
      price: 399.0,
      image:
        "https://m.media-amazon.com/images/I/818bGgNn0EL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      id: "3",
      title: "The Discovery of India",
      price: 699.0,
      image:
        "https://m.media-amazon.com/images/I/61UuEWBDlVL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      id: "4",
      title: "Train to Pakistan",
      price: 300.0,
      image:
        "https://m.media-amazon.com/images/I/915ojTuXD+L._AC_UY327_FMwebp_QL65_.jpg",
    },
  ];
  const bestSellingBook = [
    {
      id: "5",
      title: "Rich Dad Poor Dad",
      price: 350.0,
      image: "https://m.media-amazon.com/images/I/81BE7eeKzAL._AC_UY218_.jpg",
    },
    {
      id: "6",
      title: "Normal People",
      price: 599.0,
      image:
        "https://m.media-amazon.com/images/I/71DYsb8uMvL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      id: "7",
      title: "The Night Circus",
      price: 400.0,
      image:
        "https://m.media-amazon.com/images/I/815D5sneiNL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      id: "8",
      title: "The Dhammapada",
      price: 199.0,
      image:
        "https://m.media-amazon.com/images/I/7117kOFd28L._AC_UY327_FMwebp_QL65_.jpg",
    },
  ];
  const categories = [
    { name: "Classic", image: "classic.jpg" },
    { name: "Fantasy", image: "fantasy.jpg" },
    { name: "Finance", image: "finance.jpg" },
    { name: "History", image: "history.jpg" },
    { name: "Memoir", image: "memoir.jpg" },
    { name: "Mystery", image: "mystery.jpg" },
    { name: "Self-Help", image: "self-help.jpg" },
  ];
  const testimonials = [
    {
      name: "John Doe",
      review:
        "This bookstore has an amazing collection of books. The variety of genres and rare finds make it a paradise for book lovers. Highly recommended for anyone who enjoys reading!",
      image: "https://i.pravatar.cc/150?img=3",
      rating: 5,
    },
    {
      name: "Jane Smith",
      review:
        "A seamless experience with great recommendations. The staff is very knowledgeable and always helps in selecting the right book. Loved every bit of my visit and will be back soon!",
      image: "https://i.pravatar.cc/150?img=5",
      rating: 4,
    },
    {
      name: "Robert Brown",
      review:
        "Excellent service and fast delivery. The packaging was top-notch, and the books arrived in pristine condition. This is my go-to bookstore from now on!",
      image: "https://i.pravatar.cc/150?img=8",
      rating: 5,
    },
    {
      name: "Emily Johnson",
      review:
        "A truly wonderful bookstore! They have a fantastic collection and even offer personalized book recommendations based on your preferences. Will definitely shop again!",
      image: "https://i.pravatar.cc/150?img=10",
      rating: 5,
    },
    {
      name: "Michael Lee",
      review:
        "The ambiance of the store is amazing, and they have a great reading corner. I spent hours exploring their vast collection and loved every moment!",
      image: "https://i.pravatar.cc/150?img=12",
      rating: 4,
    },
    {
      name: "Sophia Davis",
      review:
        "Fantastic online bookstore with prompt customer service. The books are always well-packed, and the discounts make it even more worthwhile!",
      image: "https://i.pravatar.cc/150?img=14",
      rating: 5,
    },
    {
      name: "Daniel Wilson",
      review:
        "I was pleasantly surprised by their vast collection and well-organized sections. The staff is friendly, and they make excellent recommendations. A must-visit for book enthusiasts!",
      image: "https://i.pravatar.cc/150?img=16",
      rating: 5,
    },
    {
      name: "Olivia Martinez",
      review:
        "I ordered a few books online, and they arrived quicker than expected. The quality and selection of books are excellent, and I will surely be purchasing more!",
      image: "https://i.pravatar.cc/150?img=18",
      rating: 4,
    },
    {
      name: "William Taylor",
      review:
        "A hidden gem for book lovers! The bookstore carries both bestsellers and rare editions. I could spend all day here exploring their collection!",
      image: "https://i.pravatar.cc/150?img=20",
      rating: 5,
    },
    {
      name: "Charlotte Anderson",
      review:
        "One of the best bookstores I've ever visited. The selection, the atmosphere, and the friendly service make it an absolute delight to shop here! Highly recommended!",
      image: "https://i.pravatar.cc/150?img=22",
      rating: 5,
    },
  ];

  return (
    <>
      <MyCarousel />

      <Container sx={{ my: "50px" }} maxWidth="lg">
        <Box sx={{ textAlign: "center" }}>
          <Heading title="Recomended For You" />
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
            maiores nulla, nam optio neque quas aliquam reiciendis rem
            asperiores molestiae itaque, tempora magni. Neque, possimus?
            Provident nisi quia beatae dolorem.
          </Paragraph>
        </Box>
        <Grid container spacing={2}>
          {RecomendedBook.map((book, index) => {
            return (
              <Grid item xs={12} md={6} lg={3}>
                <HomeBookCard book={book} key={index} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Box sx={{ background: "#eaeaea", py: "20px" }}>
        <Container sx={{ my: "50px" }} maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item lg="4">
              <FeatureBox tagline="Quick Delivery">
                <LocalShippingIcon fontSize="40px" />
              </FeatureBox>
            </Grid>
            <Grid item lg="4">
              <FeatureBox tagline="Secure Payment">
                <AccountBalanceWalletIcon fontSize="40px" />
              </FeatureBox>
            </Grid>
            <Grid item lg="4">
              <FeatureBox tagline="Best Quality">
                <StarIcon fontSize="40px" />
              </FeatureBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container sx={{ my: "50px" }} maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Heading title="Explore Our Categories" />
          <Box sx={{ display: "flex", gap: 2 }}>
            <IconButton
              className="swiper-button-prev"
              sx={{
                bgcolor: "primary.main",
                color: "white",
                "&:hover": { bgcolor: "primary.dark" },
                width: 36,
                height: 36,
              }}
            >
              {/* <ArrowBackIosNew fontSize="small" /> */}
            </IconButton>
            <IconButton
              className="swiper-button-next"
              sx={{
                bgcolor: "primary.main",
                color: "white",
                "&:hover": { bgcolor: "primary.dark" },
                width: 36,
                height: 36,
              }}
            >
              {/* <ArrowForwardIos fontSize="small" /> */}
            </IconButton>
          </Box>
        </Box>
        <Swiper
          slidesPerView={6}
          spaceBetween={20}
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            600: { slidesPerView: 2 },
            900: { slidesPerView: 4 },
            1200: { slidesPerView: 6 },
          }}
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <CategoryBox category={category} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
      <Box sx={{ background: (color) => color.palette.primary.main }}>
        <Container sx={{ py: "50px" }} maxWidth="lg">
          <Grid container spacing={2} sx={{ alignItems: "center" }}>
            <Grid
              item
              md={5}
              sx={{
                textAlign: "center",
                p: 3,
                // bgcolor: "#222",
                // borderRadius: 2,
                borderRight: { md: "2px solid #fff", xs: "none" },
                // borderBottom: { xs: "2px solid #fff", md: "none" },
              }}
            >
              <Typography
                sx={{ fontSize: "36px", color: "#fff", fontWeight: "bold" }}
              >
                Exclusive Offer: 10% OFF!
              </Typography>
              <Typography sx={{ fontSize: "18px", color: "#ccc", mt: 1 }}>
                Use the code below to claim your discount.
              </Typography>
              <Box
                sx={{
                  mt: 2,
                  py: 1.5,
                  px: 5,
                  bgcolor: "#fff",
                  borderRadius: "8px",
                  display: "inline-block",
                  fontWeight: "bold",
                  fontSize: "20px",
                  color: "#ff5722",
                }}
              >
                FLAT10
              </Box>
            </Grid>
            <Grid item lg="7">
              <Grid container spacing={3} sx={{justifyContent:"center"}}>
                <Grid item lg="4">
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      alt="Customer"
                      width={"80px"}
                      src="/assets/image/books.png"
                    />
                    <Typography
                      sx={{
                        fontSize: "28px",
                        fontWeight: "bold",
                        color: "#fff",
                        textAlign: "center",
                      }}
                    >
                      <CountUp start={0} end={50} duration={3} />
                      K+
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        color: "#fff",
                        textAlign: "center",
                      }}
                    >
                      Available Books
                    </Typography>
                  </Box>
                </Grid>
                <Grid item lg="4">
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      alt="Customer"
                      width={"80px"}
                      src="/assets/image/writing.png"
                    />
                    <Typography
                      sx={{
                        fontSize: "28px",
                        fontWeight: "bold",
                        color: "#fff",
                        textAlign: "center",
                      }}
                    >
                      <CountUp start={0} end={10} duration={3} />
                      K+
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        color: "#fff",
                        textAlign: "center",
                      }}
                    >
                      Popular Author
                    </Typography>
                  </Box>
                </Grid>
                <Grid item lg="4">
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      alt="Customer"
                      width={"80px"}
                      src="/assets/image/people.png"
                    />
                    <Typography
                      sx={{
                        fontSize: "28px",
                        fontWeight: "bold",
                        color: "#fff",
                        textAlign: "center",
                      }}
                    >
                      <CountUp start={0} end={100} duration={3} />
                      K+
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        color: "#fff",
                        textAlign: "center",
                      }}
                    >
                      Happy Readers
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container sx={{ my: "50px" }} maxWidth="lg">
        <Box sx={{ textAlign: "center" }}>
          <Heading title="Best Selling Books" />
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
            maiores nulla, nam optio neque quas aliquam reiciendis rem
            asperiores molestiae itaque, tempora magni. Neque, possimus?
            Provident nisi quia beatae dolorem.
          </Paragraph>
        </Box>
        <Grid container spacing={2}>
          {bestSellingBook.map((book, index) => {
            return (
              <Grid item xs={12} md={6} lg={3}>
                <HomeBookCard book={book} key={index} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Container sx={{ my: "50px" }} maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Heading title="Reader's Feedback" />
          <Box sx={{ display: "flex", gap: 2 }}>
            <IconButton
              className="swiper-button-prev"
              sx={{
                bgcolor: "primary.main",
                color: "white",
                "&:hover": { bgcolor: "primary.dark" },
                width: 36,
                height: 36,
              }}
            >
              {/* <ArrowBackIosNew fontSize="small" /> */}
            </IconButton>
            <IconButton
              className="swiper-button-next"
              sx={{
                bgcolor: "primary.main",
                color: "white",
                "&:hover": { bgcolor: "primary.dark" },
                width: 36,
                height: 36,
              }}
            >
              {/* <ArrowForwardIos fontSize="small" /> */}
            </IconButton>
          </Box>
        </Box>
        <Swiper
          slidesPerView={6}
          spaceBetween={20}
          modules={[Navigation, Autoplay]}
          loop={true}
          // autoplay={{ delay: 1000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide style={{ margin: "30px 0" }} key={index}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
      {/* Newsletter Subscribe */}
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/image/newslatter.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <Container maxWidth="lg" sx={{ py: "50px" }}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <Typography variant="h1">
                Subscribe our newsletter for newest books updates
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="form"
                sx={{
                  display: "flex",
                  gap: 1,
                  marginTop: 2,
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Enter your email"
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 1,
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ padding: "15px 30px" }}
                >
                  Subscribe
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* <Box sx={{ marginBottom: "500px" }}></Box> */}
    </>
  );
}

export default HomePage;
