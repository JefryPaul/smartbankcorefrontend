import React from "react";
import AdminHeader from "../Components/AdminHeader";
import AdminSidebar from "../Components/AdminSidebar";

function AdminDashboard() {
  return (
    <>
      {/* Header */}
      <AdminHeader />

      <div className="flex">
        {/* Sidebar */}
        <AdminSidebar />

        {/* Main Content Area */}
        <div
          className="flex-1 p-6"
          style={{
            backgroundColor: "#F8F3F0",
            minHeight: "100vh",
          }}
        >
          <h1 className="text-3xl font-bold mb-6" style={{ color: "#662828" }}>
            Admin Dashboard
          </h1>

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Total Users */}
            <div
              className="p-6 rounded-xl shadow"
              style={{ backgroundColor: "#E8DAD4" }}
            >
              <h2 className="text-xl font-semibold" style={{ color: "#8B3A3A" }}>
                Total Users
              </h2>
              <p className="text-3xl mt-3 font-bold" style={{ color: "#2F1B19" }}>
                120
              </p>
            </div>

            {/* Total Transactions */}
            <div
              className="p-6 rounded-xl shadow"
              style={{ backgroundColor: "#E8DAD4" }}
            >
              <h2 className="text-xl font-semibold" style={{ color: "#8B3A3A" }}>
                Total Transactions
              </h2>
              <p className="text-3xl mt-3 font-bold" style={{ color: "#2F1B19" }}>
                3,450+
              </p>
            </div>

            {/* Pending Loans */}
            <div
              className="p-6 rounded-xl shadow"
              style={{ backgroundColor: "#E8DAD4" }}
            >
              <h2 className="text-xl font-semibold" style={{ color: "#8B3A3A" }}>
                Pending Loans
              </h2>
              <p className="text-3xl mt-3 font-bold" style={{ color: "#2F1B19" }}>
                18
              </p>
            </div>
          </div>

          {/* Recent Activity Section */}
          <div className="mt-10">
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "#662828" }}
            >
              Recent Activities
            </h2>

            <div
              className="p-6 rounded-xl shadow"
              style={{ backgroundColor: "#E8DAD4" }}
            >
              <ul className="space-y-3">
                <li style={{ color: "#2F1B19" }}> New user registered: John</li>
                <li style={{ color: "#2F1B19" }}>
                  Transaction approved: ₹25,000
                </li>
                <li style={{ color: "#2F1B19" }}>
                  Loan request received from: Meera
                </li>
                <li style={{ color: "#2F1B19" }}>
                  User account updated: Priya
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
