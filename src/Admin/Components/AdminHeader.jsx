import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";

function AdminHeader() {
  return (
    <header
      className="w-full shadow-md px-6 py-4 flex items-center justify-between"
      style={{ backgroundColor: "#8B3A3A" }}
    >
      {/* Left Side – Logo + Title */}
      <div className="flex items-center gap-3">
        <MenuIcon className="text-white cursor-pointer" />

        <h2 className="text-xl font-bold text-white tracking-wide">
          SmartBank Admin Panel
        </h2>
      </div>

      {/* Right Side – Admin Profile */}
      <div className="flex items-center gap-3 cursor-pointer">
        <AccountCircleIcon sx={{ color: "white", fontSize: 32 }} />

        <div className="text-sm text-white leading-tight">
          <p className="font-semibold">Admin</p>
          <p className="opacity-80 text-xs">admin@smartbank.com</p>
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;
