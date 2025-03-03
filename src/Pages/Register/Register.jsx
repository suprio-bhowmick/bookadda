import React, { useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../Toolkit/authSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, isRegister } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(registerUser(data));
  };

  // Redirect and show toast on successful registration
  useEffect(() => {
    if (isRegister) {
      toast.success("Registration successful! Redirecting...", {
        position: "top-right",
        autoClose: 1500, // 2 seconds delay
      });

      setTimeout(() => {
        navigate("/"); // Redirect to shop page
      }, 1600);
    }
  }, [isRegister, navigate]);

  return (
    <Container maxWidth="xl" sx={{my:"25px"}}>
      <Box>
        <Card>
          <CardContent sx={{ padding: 0, paddingBottom: "0px !important" }}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="./assets/image/register.jpg"
                  alt="Register"
                />
              </Grid>
              <Grid item xs={12} md={6} sx={{ padding: "25px" }}>
                <Typography variant="h4" sx={{ marginBottom: "15px" , fontWeight:"600"}}>
                  Register Now
                </Typography>
                <Typography sx={{ marginBottom: "15px" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  ut autem obcaecati voluptate deleniti aliquam velit impedit
                </Typography>

                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Full Name */}
                  <Box sx={{ marginBottom: 2 }}>
                    <label>Your Full Name</label>
                    <TextField
                      {...register("fullName", {
                        required: "Full Name is required",
                        minLength: {
                          value: 3,
                          message: "Full Name must be at least 3 characters",
                        },
                      })}
                      placeholder="Your Full Name"
                      variant="outlined"
                      fullWidth
                      error={!!errors.fullName}
                      helperText={errors.fullName?.message}
                    />
                  </Box>

                  {/* Email Address */}
                  <Box sx={{ marginBottom: 2 }}>
                    <label>Email Address</label>
                    <TextField
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                          message: "Enter a valid email",
                        },
                      })}
                      placeholder="Email Address"
                      variant="outlined"
                      fullWidth
                      error={!!errors.email}
                      helperText={errors.email?.message}
                    />
                  </Box>

                  {/* Mobile Number */}
                  <Box sx={{ marginBottom: 2 }}>
                    <label>Mobile Number</label>
                    <TextField
                      {...register("mobile", {
                        required: "Mobile Number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Enter a valid 10-digit mobile number",
                        },
                      })}
                      placeholder="Mobile Number"
                      variant="outlined"
                      fullWidth
                      error={!!errors.mobile}
                      helperText={errors.mobile?.message}
                    />
                  </Box>

                  {/* Password */}
                  <Box sx={{ marginBottom: 2 }}>
                    <label>Password</label>
                    <TextField
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                      })}
                      placeholder="Password"
                      variant="outlined"
                      fullWidth
                      type="password"
                      error={!!errors.password}
                      helperText={errors.password?.message}
                    />
                  </Box>

                  {/* Submit Button */}
                  <Button
                    disabled={isLoading}
                    type="submit"
                    variant="contained"
                    fullWidth
                  >
                    {isLoading ? "Please wait..." : "Register"}
                  </Button>
                  {error && (
                    <Typography color="error" sx={{ marginTop: 2 }}>
                      {error}
                    </Typography>
                  )}
                </form>
                <Box
                  component={Link}
                  to="/login"
                  sx={{
                    textDecoration: "none",
                    marginTop: "10px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Typography color="primary">
                    Already Register? Login Now
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>

      {/* Toast Notification Container */}
      <ToastContainer />
    </Container>
  );
}

export default Register;
