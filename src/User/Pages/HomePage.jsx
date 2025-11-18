import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import PaidIcon from "@mui/icons-material/Paid";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Link } from "react-router-dom";


function HomePage() {
    return (
        <>
            <Header />

            <div className="min-h-screen px-6 py-10" style={{ backgroundColor: "#F8F3F0" }}>

                {/* Top Section */}
                <div className="flex justify-between items-center mb-10">
                    <h1 className="text-3xl font-bold" style={{ color: "#2F1B19" }}>
                        Welcome Back 👋
                    </h1>


                </div>

                {/*  Dashboard Cards  */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

                    {/* Current Balance */}
                    <div
                        className="rounded-2xl p-6 shadow-lg"
                        style={{ backgroundColor: "#E8DAD4", color: "#2F1B19" }}
                    >
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="text-xl font-semibold">Current Balance</h2>
                            <AccountBalanceWalletIcon sx={{ color: "#8B3A3A" }} />
                        </div>
                        <p className="text-3xl font-bold">₹ 25,500.00</p>
                        <p className="text-sm mt-2">Updated: Today</p>
                    </div>

                    {/* Account Details */}
                    <div
                        className="rounded-2xl p-6 shadow-lg"
                        style={{ backgroundColor: "#E8DAD4", color: "#2F1B19" }}
                    >
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="text-xl font-semibold">Account Details</h2>
                            <RequestQuoteIcon sx={{ color: "#8B3A3A" }} />
                        </div>
                        <p>Account No: <b>****1234</b></p>
                        <p>Type: <b>Savings</b></p>
                    </div>

                    {/* Loan Summary */}
                    <div
                        className="rounded-2xl p-6 shadow-lg"
                        style={{ backgroundColor: "#E8DAD4", color: "#2F1B19" }}
                    >
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="text-xl font-semibold">Loan Summary</h2>
                            <PaidIcon sx={{ color: "#8B3A3A" }} />
                        </div>
                        <p>Active: <b>YES</b></p>
                        <p>EMI: <b>₹ 1,200 / month</b></p>
                    </div>
                </div>

                {/* Quick Actions */}
                <h2 className="text-xl font-bold mb-4" style={{ color: "#2F1B19" }}>
                    Quick Actions
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">

                    {/* Deposit */}
                    <Link to="/deposit">
                        <button
                            className="py-4 rounded-xl font-semibold shadow-md text-white w-full"
                            style={{ backgroundColor: "#8B3A3A" }}
                        >
                            Deposit
                        </button>
                    </Link>

                    {/* Withdraw */}
                    <Link to="/withdrawal">
                        <button
                            className="py-4 rounded-xl font-semibold shadow-md text-white w-full"
                            style={{ backgroundColor: "#662828" }}
                        >
                            Withdraw
                        </button>
                    </Link>

                    {/* Transfer */}
                    <Link to="/transactions">
                        <button
                            className="py-4 rounded-xl font-semibold shadow-md text-white w-full"
                            style={{ backgroundColor: "#B05846" }}
                        >
                            Transfer
                        </button>
                    </Link>

                    {/* Apply Loan */}
                    <Link to="/loan">
                        <button
                            className="py-4 rounded-xl font-semibold shadow-md text-white w-full"
                            style={{ backgroundColor: "#C7A58C", color: "#2F1B19" }}
                        >
                            Apply Loan
                        </button>
                    </Link>
                </div>

                {/* Recent Transactions */}
                <div className="bg-white rounded-2xl p-6 shadow-lg mb-10">
                    <h2 className="text-xl font-bold mb-4" style={{ color: "#2F1B19" }}>
                        Recent Transactions
                    </h2>

                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b">
                                <th className="py-2">Date</th>
                                <th>Type</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="border-b">
                                <td className="py-2">12 Nov</td>
                                <td>Deposit</td>
                                <td className="text-green-600">+2000</td>
                                <td>Success</td>
                            </tr>

                            <tr className="border-b">
                                <td className="py-2">11 Nov</td>
                                <td>Transfer</td>
                                <td className="text-red-600">-500</td>
                                <td>Success</td>
                            </tr>

                            <tr>
                                <td className="py-2">10 Nov</td>
                                <td>Withdrawal</td>
                                <td className="text-red-600">-1000</td>
                                <td>Failed</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* View All Transactions */}
                    <div className="text-center mt-5">
                        <Link to="/transactions">
                            <button
                                className="px-6 py-2 rounded-xl font-semibold shadow"
                                style={{ backgroundColor: "#8B3A3A", color: "white" }}
                            >
                                View All Transactions
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Notifications */}
                <div className="bg-white rounded-2xl p-6 shadow-lg mb-10">
                    <h2 className="text-xl font-bold mb-4" style={{ color: "#2F1B19" }}>
                        Notifications
                    </h2>

                    <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                            <NotificationsActiveIcon sx={{ color: "#8B3A3A" }} />
                            Deposit of ₹2000 received
                        </li>

                        <li className="flex items-center gap-3">
                            <NotificationsActiveIcon sx={{ color: "#8B3A3A" }} />
                            Loan request submitted
                        </li>

                        <li className="flex items-center gap-3">
                            <NotificationsActiveIcon sx={{ color: "#8B3A3A" }} />
                            Profile updated
                        </li>
                    </ul>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default HomePage;
