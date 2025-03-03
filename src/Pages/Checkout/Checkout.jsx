import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { orderPlace, processOrder } from "../../Toolkit/orderSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../Toolkit/cartSlice";
import PageHeader from "../../Components/PageHeader";

function CheckoutPage() {
  const { cart } = useSelector((state) => state.cart);
  const [discount, setDiscount] = useState(0);
  const [discountCode, setDiscountCode] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOrderComplete, isLoading } = useSelector((state) => state.order);
  console.log("Is order: ", isOrderComplete);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // useEffect(() => {
  //   if (isOrderComplete && !isLoading) {
  //     toast.success("Order successful! Redirecting...", {
  //       position: "top-right",
  //       autoClose: 1500, // 1.5 seconds delay
  //     });

  //     setTimeout(() => {
  //       processOrder();
  //       navigate("/order"); // Redirect to dashboard
  //     }, 1600);
  //   }
  // }, [isOrderComplete, isLoading]);

  const subTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const handleDiscount = () => {
    if (discount === 0) {
      if (discountCode === "FLAT10") {
        setError(null);
        setDiscount((subTotal * 10) / 100);
      } else {
        setError("Invalid coupon code");
      }
    } else {
      setDiscount(0);
      setDiscountCode("");
    }
  };

  const onSubmit = async (data) => {
    console.log("Order Data : ", data);
    let orderData = { ...data, subTotal, discount, discountCode };

    try {
      await dispatch(orderPlace(orderData)).unwrap(); // Ensure success before redirecting
      
      toast.success("Order placed successfully! Redirecting...", {
        position: "top-right",
        autoClose: 1500,
      });

      setTimeout(() => {
        dispatch(clearCart());
        navigate("/order"); // Redirect after successful dispatch
      }, 1600);
    } catch (error) {
      toast.error("Order failed. Please try again.", {
        position: "top-right",
        autoClose: 2000,
      });
      console.error("Order placement failed:", error);
    }
  };

  return (
    <>
    <PageHeader title="Checkout" />
    <Container maxWidth="xl" sx={{my :"36px"}}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          <Card>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Typography variant="h6" sx={{ marginBottom: "15px" }}>
                  Shipping Information
                </Typography>

                <Grid container spacing={1}>
                  <Grid item xs={12} lg={6}>
                    <Box sx={{ marginBottom: 2 }}>
                      <label>Your Full Name</label>
                      <TextField
                        {...register("fullname", {
                          required: "Your Full Name is required",
                        })}
                        placeholder="Your Full Name"
                        variant="outlined"
                        fullWidth
                        error={!!errors.fullname}
                        helperText={errors.fullname?.message}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <Box sx={{ marginBottom: 2 }}>
                      <label>Mobile Number</label>
                      <TextField
                        {...register("mobile", {
                          required: "Mobile number is required",
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Mobile number must be valid",
                          },
                        })}
                        placeholder="Mobile Number"
                        variant="outlined"
                        fullWidth
                        error={!!errors.mobile}
                        helperText={errors.mobile?.message}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box sx={{ marginBottom: 2 }}>
                      <label>Street Name</label>
                      <TextField
                        {...register("streetName", {
                          required: "Street name is required",
                        })}
                        placeholder="Street Name"
                        variant="outlined"
                        fullWidth
                        error={!!errors.streetName}
                        helperText={errors.streetName?.message}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <Box sx={{ marginBottom: 2 }}>
                      <label>Town / City</label>
                      <TextField
                        {...register("city", {
                          required: "Town / City is required",
                        })}
                        placeholder="Street Name"
                        variant="outlined"
                        fullWidth
                        error={!!errors.streetName}
                        helperText={errors.streetName?.message}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <Box sx={{ marginBottom: 2 }}>
                      <label>Zipcode</label>
                      <TextField
                        {...register("zipcode", {
                          required: "Zipcode is required",
                        })}
                        placeholder="6 digit postal code"
                        variant="outlined"
                        fullWidth
                        error={!!errors.zipcode}
                        helperText={errors.zipcode?.message}
                      />
                    </Box>
                  </Grid>
                </Grid>
                <Typography variant="h6" sx={{ marginBottom: "15px" }}>
                  Payment Information
                </Typography>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Box sx={{ marginBottom: 2 }}>
                      <label>Card Number</label>
                      <TextField
                        {...register("cardNumber", {
                          required: "Card Number is required",
                          pattern: {
                            value: /^(\d{4} \d{4} \d{4} \d{4})$/,
                            message:
                              "Enter a valid 16-digit card number (XXXX XXXX XXXX XXXX)",
                          },
                        })}
                        placeholder="1234 5678 9012 3456"
                        variant="outlined"
                        fullWidth
                        inputProps={{ maxLength: 19 }} // Ensures proper spacing
                        onInput={(e) => {
                          let value = e.target.value
                            .replace(/\D/g, "")
                            .substring(0, 16);
                          value = value.replace(/(\d{4})/g, "$1 ").trim(); // Adds space after every 4 digits
                          e.target.value = value;
                        }}
                        error={!!errors.cardNumber}
                        helperText={errors.cardNumber?.message}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={12} lg={6}>
                    <Box sx={{ marginBottom: 2 }}>
                      <label>Expiration</label>
                      <TextField
                        {...register("expiration", {
                          required: "Expiration is required",
                          pattern: {
                            value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                            message: "Enter a valid expiration date (MM/YY)",
                          },
                        })}
                        placeholder="MM/YY"
                        variant="outlined"
                        fullWidth
                        inputProps={{ maxLength: 5 }}
                        onInput={(e) => {
                          let value = e.target.value
                            .replace(/\D/g, "")
                            .substring(0, 4);
                          if (value.length >= 2)
                            value =
                              value.substring(0, 2) + "/" + value.substring(2);
                          e.target.value = value;
                        }}
                        error={!!errors.expiration}
                        helperText={errors.expiration?.message}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={12} lg={6}>
                    <Box sx={{ marginBottom: 2 }}>
                      <label>CVV</label>
                      <TextField
                        {...register("cvv", {
                          required: "CVV is required",
                          pattern: {
                            value: /^\d{3}$/,
                            message: "Enter a valid 3 or 4-digit CVV",
                          },
                        })}
                        placeholder="3  digits CVV"
                        variant="outlined"
                        fullWidth
                        inputProps={{ maxLength: 3 }}
                        error={!!errors.cvv}
                        helperText={errors.cvv?.message}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <Box sx={{ marginBottom: 2 }}>
                      <Button variant="contained" type="submit" size="large">
                        Place Order
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4} style={{ height: "auto" }}>
          <Card style={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h5">Your Cart</Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "5px",
                }}
              >
                <Typography>Sub Total</Typography>
                <Typography>₹ {subTotal.toFixed(2)}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "5px",
                }}
              >
                <Typography>Tax @ 18%</Typography>
                <Typography>₹ {((subTotal * 18) / 100).toFixed(2)}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "5px",
                }}
              >
                <Typography>Discount</Typography>
                <Typography>₹ {discount.toFixed(2)}</Typography>
              </Box>
              <Divider />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "5px",
                  marginTop: "5px",
                }}
              >
                <Typography>Grand Total</Typography>
                <Typography>
                  ₹ {(subTotal + (subTotal * 18) / 100 - discount).toFixed(2)}
                </Typography>
              </Box>
              <Box
                sx={{
                  marginBottom: "10px",
                  marginTop: "10px",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="Use FLAT10 to get 10% discount"
                    size="small"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    disabled={discount !== 0}
                    sx={{
                      "& fieldset": {
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                      }, // Removes border-radius on the right
                    }}
                  />
                  <Button
                    variant="contained"
                    onClick={handleDiscount}
                    sx={{
                      height: "40px",
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0, // Removes border-radius on the left
                    }}
                  >
                    {discount !== 0 ? "Remove" : "Apply"}
                  </Button>
                </Box>
                <Typography variant="small" color="error">
                  {error}
                </Typography>
              </Box>
              <Divider />
              {cart?.map((book, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      margin: "25px 0",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <img
                        src={book.thumbnail}
                        width="30px"
                        height="45px"
                        alt={book.title}
                      />
                      <Box>
                        <Typography>{book.title}</Typography>
                        <Typography>
                          (₹ {book.price.toFixed(2)} x {book.quantity})
                        </Typography>
                      </Box>
                    </Box>
                    <Typography>
                      ₹ {`${(book.price * book.quantity).toFixed(2)}`}
                    </Typography>
                  </Box>
                );
              })}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <ToastContainer />
    </Container>
    </>
  );
}

export default CheckoutPage;
