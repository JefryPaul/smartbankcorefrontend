import React from "react";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: "#F8F3F0" }}
    >
      {/* Card */}
      <div
        className="w-full max-w-md p-8 rounded-2xl shadow-xl"
        style={{ backgroundColor: "#E8DAD4" }}
      >
        {/* Title */}
        <h2
          className="text-3xl font-bold mb-6 text-center"
          style={{ color: "#2F1B19" }}
        >
          Admin Login
        </h2>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold" style={{ color: "#2F1B19" }}>
            Email
          </label>
          <div className="flex items-center gap-2 p-3 rounded-lg shadow-sm"
            style={{ backgroundColor: "white" }}>
            <EmailIcon sx={{ color: "#8B3A3A" }} />
            <input
              type="email"
              placeholder="Enter admin email"
              className="w-full outline-none"
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label className="block mb-1 font-semibold" style={{ color: "#2F1B19" }}>
            Password
          </label>
          <div className="flex items-center gap-2 p-3 rounded-lg shadow-sm"
            style={{ backgroundColor: "white" }}>
            <LockIcon sx={{ color: "#8B3A3A" }} />
            <input
              type="password"
              placeholder="Enter password"
              className="w-full outline-none"
            />
          </div>
        </div>

        {/* Login Button */}
        <button
          className="w-full py-3 rounded-xl font-semibold text-white shadow-md mb-4"
          style={{ backgroundColor: "#8B3A3A" }}
        >
          Login
        </button>

        {/* Back to User Login */}
        <p className="text-center mt-2" style={{ color: "#2F1B19" }}>
          Not an admin?{" "}
          <Link to="/login" className="font-bold" style={{ color: "#8B3A3A" }}>
            User Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
