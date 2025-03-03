import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleBook } from "../../Toolkit/bookSlice";
import { addToCart } from "../../Toolkit/cartSlice"; // Import action
import { Link, useParams } from "react-router-dom";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Box,
  Typography,
  Tabs,
  Tab,
  Paper,
  Button,
} from "@mui/material";
import Loader from "../../Components/Loader";
import PageHeader from "../../Components/PageHeader";

function BookDetailPage() {
  const { bookName } = useParams();
  const dispatch = useDispatch();
  const { singleBook, isLoading } = useSelector((state) => state.books);
  const cart = useSelector((state) => state.cart.cart); 
  const [tabValue, setTabValue] = React.useState(0);

  useEffect(() => {
    dispatch(getSingleBook(bookName));
  }, [dispatch, bookName]);

  if (isLoading) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Loader />
      </Container>
    );
  }

  if (singleBook.length === 0 && !isLoading) {
    return (
      <Container maxWidth="lg" sx={{ py: 6, textAlign: "center" }}>
        <Typography variant="h5" fontWeight="bold" color="text.secondary">
          Oops! Book not found.
        </Typography>
        <Typography variant="body1" sx={{ my: 2, color: "text.secondary" }}>
          The book you're looking for isn't available. Browse our collection for
          more amazing books!
        </Typography>

        <Button
          component={Link}
          to="/shop"
          variant="contained"
          color="primary"
          sx={{ mt: 2, px: 4, py: 1, borderRadius: 2 }}
        >
          Go to Shop
        </Button>
      </Container>
    );
  }

  const book = Array.isArray(singleBook) ? singleBook[0] : singleBook;
  const isInCart = cart.some((item) => item.id === book.id); // Check if book is in cart

  return (
    <>
      <PageHeader title="Book Detail" />
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={3}>
            <Card
              elevation={3}
              sx={{
                borderTopRightRadius: { xs: 2, md: 0 },
                borderBottomRightRadius: { xs: 2, md: 0 },
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={book.thumbnail}
                alt={book.title}
                sx={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: { xs: 2, md: 0 },
                }}
              />
            </Card>
          </Grid>

          <Grid item xs={12} md={9}>
            <Card
              elevation={3}
              sx={{
                borderTopLeftRadius: { xs: 2, md: 0 },
                borderBottomLeftRadius: { xs: 2, md: 0 },
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                <Typography variant="h4" fontWeight="bold">
                  {book.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  by {book.author}
                </Typography>
                <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
                  ₹{book.price?.toFixed(2)}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Rating: ⭐ {book.rating} / 5.0
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Publisher: {book.publisher}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Publication Date: {book.publication_date}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Category: {book.category}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Language: {book.language}
                </Typography>

                {isInCart ? (
                  <Button
                    component={Link}
                    to="/cart"
                    variant="contained"
                    color="primary"
                  >
                    Go to Cart
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    onClick={() => dispatch(addToCart(book))}
                  >
                    Add to Cart
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Paper sx={{ mt: 4, p: 2 }}>
          <Tabs
            value={tabValue}
            onChange={(e, newValue) => setTabValue(newValue)}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Description" />
            <Tab label="Additional Info" />
            <Tab label="Reviews" />
          </Tabs>
          <Box sx={{ p: 2 }}>
            {tabValue === 0 && (
              <Typography variant="body1">
                {book.description || "No description available."}
              </Typography>
            )}
            {tabValue === 1 && (
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={4}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{ width: "50px" }}
                      src="/assets/image/barcode.png"
                      alt="Login"
                    />
                    <Box>
                      <Typography>ISBN-10 : {book["ISBN-10"]}</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{ width: "50px" }}
                      src="/assets/image/barcode-scan.png"
                      alt="Login"
                    />
                    <Box>
                      <Typography>ISBN-13 : {book["ISBN-13"]}</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{ width: "50px" }}
                      src="/assets/image/open-book.png"
                      alt="Login"
                    />
                    <Box>
                      <Typography>Total Pages : {book.pages}</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{ width: "50px" }}
                      src="/assets/image/globe.png"
                      alt="Login"
                    />
                    <Box>
                      <Typography>
                        Country of origin : {book.country_of_origin}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{ width: "50px" }}
                      src="/assets/image/weighing-machine.png"
                      alt="Login"
                    />
                    <Box>
                      <Typography>Weight : {book.item_weight}</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{ width: "50px" }}
                      src="/assets/image/book.png"
                      alt="Login"
                    />
                    <Box>
                      <Typography>Dimensions : {book.dimensions}</Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            )}
            {tabValue === 2 && (
              <Box>
                {book.reviews && book.reviews.length > 0 ? (
                  book.reviews.map((review, index) => (
                    <Typography key={index} variant="body2" sx={{ mb: 1 }}>
                      • {review}
                    </Typography>
                  ))
                ) : (
                  <Typography variant="body2">No reviews available.</Typography>
                )}
              </Box>
            )}
          </Box>
        </Paper>
      </Container>
    </>
  );
}

export default BookDetailPage;
