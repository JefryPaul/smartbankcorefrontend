import React, { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Divider,
  Typography,
  Modal,
  Box,
  TextField,
} from "@mui/material";

function Profile() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div
      className="p-6 flex justify-center"
      style={{ background: "#F8F3F0", minHeight: "100vh" }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 600,
          borderRadius: 3,
          background: "#E8DAD4",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <CardContent>
          {/* Profile Header */}
          <div className="flex flex-col items-center">
            <Avatar
              sx={{
                width: 110,
                height: 110,
                bgcolor: "#8B3A3A",
                fontSize: 40,
              }}
            >
              U
            </Avatar>

            <Typography
              variant="h5"
              sx={{ mt: 2, fontWeight: "bold", color: "#662828" }}
            >
              User Name
            </Typography>

            <Typography variant="body1" sx={{ color: "#2F1B19" }}>
              useremail@gmail.com
            </Typography>

            <Button
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: "#8B3A3A",
                "&:hover": { backgroundColor: "#662828" },
                borderRadius: "20px",
                paddingX: 3,
                textTransform: "none",
                fontWeight: 600,
              }}
              onClick={handleOpen} // open modal
            >
              Edit Profile
            </Button>
          </div>

          <Divider sx={{ my: 4 }} />

          {/* Account Details */}
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#662828", mb: 2 }}
          >
            Account Details
          </Typography>

          <div className="space-y-3">
            <div className="flex justify-between">
              <Typography sx={{ color: "#2F1B19", fontWeight: 500 }}>
                Account Number:
              </Typography>
              <Typography sx={{ color: "#2F1B19" }}>
                1234 5678 9101
              </Typography>
            </div>

            <div className="flex justify-between">
              <Typography sx={{ color: "#2F1B19", fontWeight: 500 }}>
                Account Type:
              </Typography>
              <Typography sx={{ color: "#2F1B19" }}>Savings</Typography>
            </div>

            <div className="flex justify-between">
              <Typography sx={{ color: "#2F1B19", fontWeight: 500 }}>
                Current Balance:
              </Typography>
              <Typography sx={{ color: "#2F1B19" }}>₹ 45,000</Typography>
            </div>

            <div className="flex justify-between">
              <Typography sx={{ color: "#2F1B19", fontWeight: 500 }}>
                Joined On:
              </Typography>
              <Typography sx={{ color: "#2F1B19" }}>12 Jan 2024</Typography>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ---------------- Modal (Design Only) ---------------- */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            width: "90%",
            maxWidth: 450,
            bgcolor: "#E8DAD4",
            p: 4,
            borderRadius: 3,
            boxShadow: "0 4px 25px rgba(0,0,0,0.3)",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#662828", mb: 3 }}
          >
            Edit Profile
          </Typography>

          <div className="space-y-4">
            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  background: "#F8F3F0",
                },
              }}
            />

            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  background: "#F8F3F0",
                },
              }}
            />

            <TextField
              fullWidth
              label="Phone Number"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  background: "#F8F3F0",
                },
              }}
            />
          </div>

          <div className="flex justify-end gap-3 mt-5">
            <Button
              variant="contained"
              onClick={handleClose}
              sx={{
                backgroundColor: "#B05846",
                "&:hover": { backgroundColor: "#662828" },
                borderRadius: "20px",
                textTransform: "none",
                fontWeight: 600,
                paddingX: 3,
              }}
            >
              Save
            </Button>

            <Button
              variant="outlined"
              onClick={handleClose}
              sx={{
                borderColor: "#662828",
                color: "#662828",
                "&:hover": {
                  borderColor: "#8B3A3A",
                  backgroundColor: "rgba(139,58,58,0.1)",
                },
                borderRadius: "20px",
                textTransform: "none",
                fontWeight: 600,
                paddingX: 3,
              }}
            >
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Profile;
