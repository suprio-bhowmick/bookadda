import React, { useEffect } from "react";
import PageHeader from "../../Components/PageHeader";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout, userProfile } from "../../Toolkit/authSlice";
import Loader from "../../Components/Loader";

function ProfilePage() {
  const dispatch = useDispatch();
  const { isLoading, profile, error } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(userProfile());
  }, []);
  const handleLogout = () => {
    dispatch(logout());
  };

  if (isLoading) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Loader />
      </Container>
    );
  }

  return (
    <>
      <PageHeader title="Profile" />
      <Container maxWidth="lg" sx={{ my: "25px" }}>
        <Box sx={{ width: "100%", maxWidth: "560px", margin: "auto" }}>
          <Box>
            <img
              src="/assets/image/profile.jpg"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "100%",
                margin: "15px auto",
                display: "block",
              }}
            />
          </Box>
          <Card>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Your Profile
              </Typography>
              <Typography>{profile.fullName}</Typography>
              <Typography>{profile.email}</Typography>
              <Typography>{profile.mobile}</Typography>
              <Button variant="contained" onClick={() => handleLogout()}>
                Log Out
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
}

export default ProfilePage;
