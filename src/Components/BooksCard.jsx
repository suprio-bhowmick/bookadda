import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../Toolkit/cartSlice";
import { Link, useNavigate } from "react-router-dom";

function BooksCard({ book }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart); // Get cart from Redux store
  const isInCart = cart.some((item) => item.id === book.id); // Check if book is in cart

  return (
    <Card sx={{position:"relative"}}>
      {/* <CardMedia
        sx={{ height: 405, width: "100%" }}
        image={book.thumbnail}
        title={book.title}
      /> */}
      <img
        src={book.thumbnail}
        alt={book.title}
        style={{ width: "100%", height: "400px", objectFit: "fill" }}
      />
      <CardContent >
        <Typography
          sx={{
            fontSize: "13px",
            backgroundColor: (theme) => theme.palette.primary.main, // Uses primary color
            color: "#fff",
            px: 1.5, // Adds padding for better visibility
            py: 0.5,
            borderRadius: 1, // Soft rounded corners
            display: "inline-block", // Ensures it wraps text properly
            position:"absolute",
            top:"5px",
            right:"5px"
          }}
        >
          {book.category}
        </Typography>

        <Typography
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "1",
            WebkitBoxOrient: "vertical",
          }}
          gutterBottom
          variant="h6"
          component="div"
        >
          {book.title}
        </Typography>
        <Typography variant="p" sx={{ color: "text.secondary" }}>
          by {book.author}
        </Typography>
        <Typography variant="h5" sx={{ color: "text.secondary" }}>
          ₹ {book.price.toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", gap: 1 }}>
        {isInCart ? (
          <Button
            size="small"
            sx={{ width: "50%" }}
            variant="outlined"
            onClick={() => navigate("/cart")}
          >
            View Cart
          </Button>
        ) : (
          <Button
            size="small"
            sx={{ width: "50%" }}
            variant="outlined"
            onClick={() => dispatch(addToCart(book))}
          >
            Add to Cart
          </Button>
        )}

        <Link
          to={`/book/${book.title.replaceAll(" ", "-")}`}
          style={{ width: "50%" }}
        >
          <Button size="small" fullWidth variant="contained">
            View Details
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default memo(BooksCard);
