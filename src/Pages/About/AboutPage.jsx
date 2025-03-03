import React from "react";
import PageHeader from "../../Components/PageHeader";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Heading from "../../Components/Heading";
import CountUp from "react-countup";

function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" />
      <Container maxWidth="lg" sx={{ py: "30px" }}>
        <Grid container spacing={5}>
          <Grid item md={23} lg={6}>
            <img src="/assets/image/about.jpg" style={{ width: "100%" }} />
          </Grid>
          <Grid item md={23} lg={6}>
            <Heading title="Read our Story" />
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate ex quas, sit praesentium natus sed dolor vero quaerat
              doloribus earum! Odio, vitae officiis repellat nihil assumenda
              delectus. Adipisci, voluptate expedita labore harum minima fugiat.
              Laudantium minima veritatis ipsam, dicta nam molestiae nemo,
              voluptatum voluptates numquam distinctio, minus praesentium ab
              atque? Maxime voluptate, sed ipsam eos, magni quibusdam nesciunt
              est maiores, dolores velit tempore omnis beatae? Accusantium,
              nulla libero quo pariatur dolores consectetur? Placeat ullam
              voluptates repellendus ad atque mollitia esse autem debitis
              recusandae magnam, eaque vel dolor maiores reiciendis sapiente
              dicta doloremque eos ratione rem dolore est facilis voluptas
              officia sed. Quia sapiente deleniti expedita deserunt eum corrupti
              quaerat nulla maxime, pariatur voluptatibus, dicta asperiores
              ratione tenetur nihil quae aperiam.
            </Typography>
          </Grid>
        </Grid>
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
                borderRight: { md: "2px solid #fff", xs: "none" },
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
              <Grid container spacing={3} sx={{ justifyContent: "center" }}>
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

      <Container maxWidth="lg" sx={{ py: "30px" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              color="primary"
              sx={{ fontWeight: "bold", fontSize: "28px" }}
              gutterBottom
            >
              Our Mission
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
              beatae dolores consequuntur magnam cum corporis vitae distinctio.
              Sint nam iusto iste magnam. Id accusamus velit ullam, quos earum
              nisi nobis unde dicta maiores! Delectus dolores voluptate quae sit
              unde nulla.
            </Typography>
            <ul style={{ fontSize: "18px" }}>
              <li>Make books accessible to all, anytime and anywhere.</li>
              <li>
                Foster a global community of passionate readers and writers.
              </li>
              <li>
                Encourage lifelong learning, critical thinking, and creativity.
              </li>
              <li>
                Promote diverse voices and perspectives through our selection.
              </li>
              <li>
                Enhance the reading experience with personalized
                recommendations.
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src="assets/image/mission.jpg"
              alt="Our Mission"
              style={{ width: "100%", objectFit: "cover" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src="assets/image/vision.jpg"
              alt="Our Vision"
              style={{ width: "100%", objectFit: "cover" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              color="primary"
              sx={{ fontWeight: "bold", fontSize: "28px" }}
              gutterBottom
            >
              Our Vision
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Temporibus quisquam molestiae, expedita vel perferendis commodi?
              Distinctio voluptates explicabo praesentium ex! Officia, error ex
              recusandae sed ipsam, nisi perferendis, alias impedit molestias
              dolore temporibus vitae.
            </Typography>
            <ul style={{ fontSize: "18px" }}>
              <li>
                Redefine the reading experience with technology and innovation.
              </li>
              <li>Bridge the gap between authors and readers worldwide.</li>
              <li>Expand our reach with digital and physical bookstores.</li>
              <li>Support independent writers and publishers to thrive.</li>
              <li>
                Encourage sustainability by promoting eco-friendly book options.
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ py: "40px" }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4} lg={4}>
            <Box>
              <Box>
                <img src="/assets/image/a1.svg" width="100px" />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold" }}
                  color="textSecondary"
                >
                  ICommunity Impact Award 2023
                </Typography>
                <Typography variant="p" color="textSecondary">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                  autem rerum, voluptatibus corporis repellendus maiores
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Box>
              <Box>
                <img src="/assets/image/a2.svg" width="100px" />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold" }}
                  color="textSecondary"
                >
                  Top Seller Award 2024
                </Typography>
                <Typography variant="p" color="textSecondary">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                  autem rerum, voluptatibus corporis repellendus maiores
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Box>
              <Box>
                <img src="/assets/image/a3.svg" width="100px" />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold" }}
                  color="textSecondary"
                >
                  Best Collection Award 2022
                </Typography>
                <Typography variant="p" color="textSecondary">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                  autem rerum, voluptatibus corporis repellendus maiores
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
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
    </>
  );
}

export default AboutPage;
