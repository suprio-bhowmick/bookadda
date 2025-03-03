import React, { useEffect } from "react";
import PageHeader from "../../Components/PageHeader";
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getSingleOrder } from "../../Toolkit/orderSlice";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader";

function OrderViewPage() {
  const dispatch = useDispatch();
  const { isLoading, singleOrder, error } = useSelector((state) => state.order);
  const { orderId } = useParams();

  useEffect(() => {
    dispatch(getSingleOrder(orderId));
  }, [dispatch, orderId]); // Added dependencies

  if (isLoading) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Loader />
      </Container>
    );
  }

  if (!singleOrder) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography textAlign="center">Order not found.</Typography>
      </Container>
    );
  }

  return (
    <>
      <PageHeader title="Order Detail" />
      <Container maxWidth="lg" sx={{ my: "36px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card style={{ height: "100%" }}>
              <CardContent>
                <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
                  Shipping Information
                </Typography>
                <Divider />
                <Typography sx={{ fontWeight: "600", mt: "15px" }}>
                  Order ID : {singleOrder.orderId || "N/A"}
                </Typography>
                <Typography sx={{ fontWeight: "600" }}>
                  Order Date : {singleOrder.orderDate || "N/A"}
                </Typography>
                <Typography sx={{ fontWeight: "bold", fontSize: "20px", my: "15px" }}>
                  Shipping Address
                </Typography>
                <Typography>{singleOrder.orderDetails?.fullname || "N/A"}</Typography>
                <Typography>
                  {`${singleOrder.orderDetails?.streetName || "N/A"}, 
                  ${singleOrder.orderDetails?.city || "N/A"} - 
                  ${singleOrder.orderDetails?.zipcode || "N/A"}`}
                </Typography>
                <Typography>{singleOrder.orderDetails?.mobile || "N/A"}</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card style={{ height: "100%" }}>
              <CardContent>
                <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
                  Order Summary
                </Typography>
                <Divider />
                <Box sx={{ display: "flex", justifyContent: "space-between", mt: "15px" }}>
                  <Typography>Sub Total</Typography>
                  <Typography>₹ {singleOrder.orderDetails?.subTotal?.toFixed(2) || "0.00"}</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>Tax @ 18%</Typography>
                  <Typography>
                    ₹ {((singleOrder.orderDetails?.subTotal * 18) / 100 || 0).toFixed(2)}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>Discount</Typography>
                  <Typography>
                    ₹ {singleOrder.orderDetails?.discount?.toFixed(2) || "0.00"}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", mt: "5px" }}>
                  <Typography>Grand Total</Typography>
                  <Typography>
                    ₹ {(
                      (singleOrder.orderDetails?.subTotal || 0) +
                      ((singleOrder.orderDetails?.subTotal * 18) / 100 || 0) -
                      (singleOrder.orderDetails?.discount || 0)
                    ).toFixed(2)}
                  </Typography>
                </Box>
                <Divider />
                <Typography sx={{ fontWeight: "bold", fontSize: "20px", my: "15px" }}>
                  Card Information
                </Typography>
                <Typography>
                  Card Number : **** **** **** {singleOrder.orderDetails?.cardNumber?.slice(-4)}
                </Typography>
                <Typography>Expiry Date : {singleOrder.orderDetails?.expiration }</Typography>
                <Typography>CVV : * * {singleOrder.orderDetails?.cvv?.slice(-1)}</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ bgcolor: "#f5f5f5" }}>
                    <TableCell>Book</TableCell>
                    <TableCell align="center">Price</TableCell>
                    <TableCell align="center">Quantity</TableCell>
                    <TableCell align="center">Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {singleOrder.books?.map((book) => (
                    <TableRow key={book.id}>
                      <TableCell sx={{display:"flex", gap:"5px", alignItems:"center"}}>
                        <img src={book.thumbnail} alt={book.title} width="50" height="70" />
                        <Typography variant="p">{book.title}</Typography>
                      </TableCell>
                      <TableCell align="center">₹ {book.price.toFixed(2)}</TableCell>
                      <TableCell align="center">{book.quantity}</TableCell>
                      <TableCell align="center">₹ {(book.price * book.quantity).toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default OrderViewPage;
