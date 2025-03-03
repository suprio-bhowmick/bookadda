import React from "react";
import { Box, Button, Modal, Typography } from "@mui/material";

const ModalComponent = ({ open, onClose, message, onLogin }) => {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-title">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          textAlign: "center",
          width: 300,
        }}
      >
        <Typography id="modal-title" variant="h6" gutterBottom>
          {message}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={onLogin}
          sx={{ mt: 2 }}
        >
          Login
        </Button>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
