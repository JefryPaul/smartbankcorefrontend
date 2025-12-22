import React, { useState } from "react";
import { TextField, Button, Card, CardContent } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI } from "../../services/allAPI";

function UserLogin() {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    const { email, password } = userDetails;

    if (!email || !password) {
      alert("Fill the form completely");
    } else {
      const result = await loginAPI({ email, password });

      if (result.status === 200) {
        alert("Login Successful");

        sessionStorage.setItem(
          "existingUser",
          JSON.stringify(result.data.user)
        );
        sessionStorage.setItem("token", result.data.token);
        sessionStorage.setItem("userId", result.data.userId);


        setUserDetails({ username: "", email: "", password: "" });
        navigate("/home");
      } else if (result.status === 401) {
        alert(result.response.data);
        setUserDetails({ username: "", email: "", password: "" });
      } else {
        alert("Something Went Wrong!!!");
        setUserDetails({ username: "", email: "", password: "" });
      }
    }
  };

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
          <h1
            className="text-2xl font-bold text-center mb-6"
            style={{ color: "#2F1B19" }}
          >
            Login to SmartBank Core
          </h1>

          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            value={userDetails.email}
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
            sx={{ mb: 3, backgroundColor: "white", borderRadius: 1 }}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            value={userDetails.password}
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
            sx={{ mb: 4, backgroundColor: "white", borderRadius: 1 }}
          />

          <Button
            fullWidth
            variant="contained"
            onClick={handleLogin}
            sx={{
              backgroundColor: "#8B3A3A",
              padding: "12px",
              borderRadius: "12px",
              fontSize: "1rem",
              "&:hover": { backgroundColor: "#662828" },
            }}
          >
            Login
          </Button>

          <div className="text-center mt-4" style={{ color: "#2F1B19" }}>
            Don't have an account?{" "}
            <Link
              to="/userregistration"
              className="font-semibold"
              style={{ color: "#8B3A3A" }}
            >
              Register
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default UserLogin;
