import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  IconButton,
  Box,
  Container,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateCart, removeFromCart } from "../../Toolkit/cartSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ModalComponent from "../../Components/ModalComponent";
import PageHeader from "../../Components/PageHeader";

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  const userToken = useSelector((state) => state.auth.userToken);
  const [openModal, setOpenModal] = useState(false);

  const grandTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (userToken) {
      navigate("/checkout");
    } else {
      setOpenModal(true);
    }
  };

  return (
    <>
      <PageHeader title="Cart" />
      <Container maxWidth="lg">
        <Box sx={{ margin: "auto", mt: 3 }}>
          {cart.length === 0 ? (
            <Box sx={{ textAlign: "center", mt: 5 }}>
              <ShoppingCartIcon sx={{ fontSize: 60, color: "gray" }} />
              <Typography variant="h6" color="text.secondary" mt={1}>
                Your cart is empty!
              </Typography>
            </Box>
          ) : (
            <>
              <Box sx={{ width: "100%", overflowX: "auto" }}>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow sx={{ bgcolor: "#f5f5f5" }}>
                        <TableCell>Book</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">Quantity</TableCell>
                        <TableCell align="center">Total</TableCell>
                        <TableCell align="center">Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {cart.map((book) => (
                        <TableRow key={book.id}>
                          <TableCell
                            sx={{ display: "flex", alignItems: "center" }}
                          >
                            <img
                              src={book.thumbnail}
                              alt={book.title}
                              width="50"
                              height="70"
                              style={{ marginRight: 10 }}
                            />
                            <Box>
                              <Typography
                                variant="h6"
                                sx={{ fontSize: { xs: "14px", sm: "16px" } }}
                              >
                                {book.title}
                              </Typography>
                              <Typography
                                component="div"
                                sx={{
                                  fontStyle: "italic",
                                  fontSize: { xs: "12px", sm: "14px" },
                                }}
                              >
                                - {book.author}
                              </Typography>
                            </Box>
                          </TableCell>
                          <TableCell align="center">
                            ₹ {book.price.toFixed(2)}
                          </TableCell>
                          <TableCell align="center">
                            <IconButton
                              color="primary"
                              disabled={book.quantity <= 1}
                              onClick={() =>
                                dispatch(
                                  updateCart({ id: book.id, type: "DEC" })
                                )
                              }
                            >
                              <RemoveIcon />
                            </IconButton>
                            {book.quantity}
                            <IconButton
                              color="primary"
                              onClick={() =>
                                dispatch(
                                  updateCart({ id: book.id, type: "INC" })
                                )
                              }
                            >
                              <AddIcon />
                            </IconButton>
                          </TableCell>
                          <TableCell align="center">
                            ₹ {(book.price * book.quantity).toFixed(2)}
                          </TableCell>
                          <TableCell align="center">
                            <IconButton
                              color="error"
                              onClick={() =>
                                dispatch(removeFromCart({ id: book.id }))
                              }
                            >
                              <DeleteIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
              <Box sx={{ textAlign: "right", mt: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Sub Total: ₹ {grandTotal.toFixed(2)}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ px: 4, py: 1.5, marginBottom: "25px" }}
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>
              </Box>
            </>
          )}
          <ModalComponent
            open={openModal}
            onClose={() => setOpenModal(false)}
            message="You need to log in to proceed to checkout."
            onLogin={() => navigate("/login")}
          />
        </Box>
      </Container>
    </>
  );
};

export default CartPage;
