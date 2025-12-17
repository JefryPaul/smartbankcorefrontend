import React from "react";
import { Link } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LogoutIcon from "@mui/icons-material/Logout"; 
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


function AdminSidebar() {
  return (
    <aside
      className="h-screen w-64 flex flex-col shadow-xl"
      style={{ backgroundColor: "#662828" }}
    >
      {/* Sidebar Header */}
      <div className="py-6 text-center border-b border-[#8B3A3A]">
        <h2 className="text-2xl font-bold text-white tracking-wide">
          Admin Panel
        </h2>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-4 py-6 space-y-3 text-white">
        <Link
          to="/admindashboard"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#8B3A3A] transition"
        >
          <DashboardIcon />
          <span className="font-medium">Dashboard</span>
        </Link>

        <Link
          to="/manageuser"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#8B3A3A] transition"
        >
          <PeopleIcon />
          <span className="font-medium">Manage Users</span>
        </Link>

        <Link
          to="/managetransactions"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#8B3A3A] transition"
        >
          <SwapHorizIcon />
          <span className="font-medium">Manage Transactions</span>
        </Link>

        <Link
          to="/manageloans"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#8B3A3A] transition"
        >
          <CurrencyRupeeIcon />
          <span className="font-medium">Manage Loans</span>
        </Link>
      </nav>

      {/* Logout */}
      <div className="px-4 pb-6">
        <button
          className="flex items-center gap-3 w-full p-3 rounded-lg bg-[#8B3A3A] hover:bg-[#B05846] text-white transition"
        >
          <LogoutIcon />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default AdminSidebar;
