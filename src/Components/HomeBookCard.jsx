import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const HomeBookCard = ({ book }) => {
  return (
   
      <Box sx={{ marginTop: "25px", textAlign: "center" }}>
        <Box
          component="img"
          src={book.image}
          alt={book.title}
          sx={{ width: "100%", height:{ xs: "650px", md: "400px" }, borderRadius: "10px" }}
        />
        <Typography variant="h6" sx={{ color: (theme) => theme.palette.primary.main }}>
          {book.title}
        </Typography>
        <Typography variant="h5" color="textSecondary">
          ₹{(book.price).toFixed(2)}
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to={`/book/${book.title.replaceAll(" ", "-")}`}
          sx={{ mt: 2, display:"block", textAlign:"center" }}
        >
          View Book
        </Button>
      </Box>
   
  );
};

export default HomeBookCard;
