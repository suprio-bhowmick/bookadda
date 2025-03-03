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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userLogin } from "../../Toolkit/authSlice";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, isLoggedIn } = useSelector((state) => state.auth);
  // console.log(isLoading, userToken)
  // useEffect(() => {
  //   if (userToken && !isLoading) {
  //     navigate("/profile");

  //   }
  // }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(userLogin(data));
  }; 

  // Redirect and show toast on successful login
  useEffect(() => {
    if (isLoggedIn) {
      toast.success("Login successful! Redirecting...", {
        position: "top-right",
        autoClose: 1500, 
      });

      setTimeout(() => {
        navigate("/shop"); 
      }, 1600);
    }
  }, [isLoggedIn, navigate]);

  return (
    <Container maxWidth="xl" sx={{my:"25px"}}>
      <Box>
        <Card>
          <CardContent sx={{ padding: 0, paddingBottom: "0px !important" }}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="./assets/image/login.jpg"
                  alt="Login"
                />
              </Grid>
              <Grid item xs={12} md={6} sx={{ padding: "25px" }}>
                <Typography variant="h4" sx={{ marginBottom: "8px" , fontWeight:"600"}}>
                  Login Now
                </Typography>
                <Typography sx={{ marginBottom: "15px" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  ut autem obcaecati voluptate deleniti aliquam velit impedit
                </Typography>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <Box sx={{ marginBottom: 2 }}>
                    <label>Email Address</label>
                    <TextField
                      {...register("email", {
                        required: "Email Address is required",
                        
                      })}
                      placeholder="Email Address"
                      variant="outlined"
                      fullWidth
                      error={!!errors.email}
                      helperText={errors.email?.message}
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
                    {isLoading ? "Logging in..." : "Login"}
                  </Button>
                  {error && (
                    <Typography color="error" sx={{ marginTop: 2 }}>
                      {error}
                    </Typography>
                  )}
                </form>
                <Box component={Link} to="/register" sx={{textDecoration:"none", marginTop:"10px",display:"flex", justifyContent:"center"}}>
                  <Typography color="primary">New User? Register Now</Typography>
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

export default LoginPage;
