import React, { useState } from "react";
import { TextField, Button, Card, CardContent } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { registerAPI } from "../../services/allAPI";

function UserRegistration() {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const HandleRegister = async () => {
    const { username, email, password } = userDetails;

    if (!username || !email || !password) {
      alert("Fill the form completely");
    } else {
      const result = await registerAPI(userDetails);

      if (result.status === 200) {
        alert("Registered successfully");
        setUserDetails({ username: "", email: "", password: "" });
        navigate("/userlogin");
      } else if (result.status === 404) {
        alert(result.response.data);
        setUserDetails({ username: "", email: "", password: "" });
      } else {
        alert("Something Went Wrong");
        setUserDetails({ username: "", email: "", password: "" });
      }
    }
  };

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
          <h1
            className="text-2xl font-bold text-center mb-6"
            style={{ color: "#2F1B19" }}
          >
            Create New Account
          </h1>

          <TextField
            fullWidth
            label="Full Name"
            variant="outlined"
            value={userDetails.username}
            onChange={(e) =>
              setUserDetails({ ...userDetails, username: e.target.value })
            }
            sx={{ mb: 2, backgroundColor: "white", borderRadius: 1 }}
          />

          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            value={userDetails.email}
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
            sx={{ mb: 2, backgroundColor: "white", borderRadius: 1 }}
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
            sx={{ mb: 3, backgroundColor: "white", borderRadius: 1 }}
          />

          <Button
            fullWidth
            variant="contained"
            onClick={HandleRegister}
            sx={{
              backgroundColor: "#8B3A3A",
              padding: "12px",
              borderRadius: "12px",
              fontSize: "1rem",
              "&:hover": { backgroundColor: "#662828" },
            }}
          >
            Create Account
          </Button>

          <div className="text-center mt-4" style={{ color: "#2F1B19" }}>
            Already have an account?{" "}
            <Link
              to="/userlogin"
              className="font-semibold"
              style={{ color: "#8B3A3A" }}
            >
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default UserRegistration;
