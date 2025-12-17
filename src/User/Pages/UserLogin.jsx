import React from "react";
import { TextField, Button, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";

function UserLogin() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
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
            Login to SmartBank Core
          </h1>

          {/* Email Field */}
          <div className="mb-4">
            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              InputProps={{ style: { backgroundColor: "white", borderRadius: 8 } }}
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              InputProps={{ style: { backgroundColor: "white", borderRadius: 8 } }}
            />
          </div>

          {/* Login Button */}
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
            Login
          </Button>

          

          {/* Register Link */}
          <div className="text-center mt-4" style={{ color: "#2F1B19" }}>
            Don't have an account?{" "}
            <Link to="/userregistration" className="font-semibold" style={{ color: "#8B3A3A" }}>
              Register
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default UserLogin;
