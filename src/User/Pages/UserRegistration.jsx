import React from "react";
import { TextField, Button, Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function UserRegistration() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-10"
      style={{ backgroundColor: "#F8F3F0" }}
    >
      <Card
        className="w-full max-w-md rounded-2xl shadow-lg"
        style={{ backgroundColor: "#E8DAD4" }}
      >
        <CardContent>
          {/* Title */}
          <h1
            className="text-2xl font-bold text-center mb-6"
            style={{ color: "#2F1B19" }}
          >
            Create New Account
          </h1>

          {/* Full Name */}
          <div className="mb-4">
            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              InputProps={{ style: { backgroundColor: "white", borderRadius: 8 } }}
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              InputProps={{ style: { backgroundColor: "white", borderRadius: 8 } }}
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <TextField
              fullWidth
              label="Phone"
              type="number"
              variant="outlined"
              InputProps={{ style: { backgroundColor: "white", borderRadius: 8 } }}
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              InputProps={{ style: { backgroundColor: "white", borderRadius: 8 } }}
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              variant="outlined"
              InputProps={{ style: { backgroundColor: "white", borderRadius: 8 } }}
            />
          </div>

          {/* Create Account Button */}
          <Button
            fullWidth
            variant="contained"
            style={{
              backgroundColor: "#8B3A3A",
              padding: "12px",
              borderRadius: "12px",
              fontSize: "1rem",
            }}
          >
            Create Account
          </Button>

          {/* Login link */}
          <div className="text-center mt-4" style={{ color: "#2F1B19" }}>
            Already have an account?{" "}
            <Link to="/login" className="font-semibold" style={{ color: "#8B3A3A" }}>
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default UserRegistration;
