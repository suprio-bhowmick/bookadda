import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
  Box,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const OrderList = ({ order }) => {
  const visibleBooks =
    order.books.length > 4 ? order.books.slice(0, 3) : order.books;
  const extraCount = order.books.length > 4 ? order.books.length - 3 : 0;

  return (
    <Card sx={{ mb: 2, p: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          Order ID: {order.orderId}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Order Date: {order.orderDate}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Order Grand Total: ₹
          {(
            order.orderDetails.subTotal +
            (order.orderDetails.subTotal * 18) / 100 -
            order.orderDetails.discount
          ).toFixed(2)}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
          Ordered Books:
        </Typography>
        <Grid container spacing={2} sx={{ flexWrap: "wrap" }}>
          {visibleBooks.map((book, index) => (
            <Grid item xs={12} sm={3} md={3} key={index}>
              <Card
                sx={{
                  display: "flex",
                  p: 1,
                  alignItems: "center",
                  boxShadow: 1,
                }}
              >
                <Box
                  component="img"
                  src={book.thumbnail}
                  alt={book.title}
                  sx={{ width: 50, height: 70, mr: 2 }}
                />
                <Box>
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: "1",
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {book.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {book.author} - ₹{book.price} x {book.quantity}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
          {extraCount > 0 && (
            <Grid item xs={12} sm={3} md={3}>
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 1,
                  boxShadow: 1,
                  height: "100%",
                }}
              >
                <Typography variant="body1" fontWeight="bold">
                  +{extraCount} more
                </Typography>
              </Card>
            </Grid>
          )}
        </Grid>
        <Box  sx={{display:"flex", justifyContent:"flex-end", marginTop:"15px"}}>
          <Button component={Link} to={`/order/${order.orderId}`}>
            View Order
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default OrderList;
