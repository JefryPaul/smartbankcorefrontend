import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Link } from "react-router-dom";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import PersonIcon from "@mui/icons-material/Person";
import { getUserAPI, getUserTransactionsAPI } from "../../services/allAPI";

function HomePage() {

    const [user, setUser] = useState(() => {
        return JSON.parse(sessionStorage.getItem("existingUser")) || {};
    });

    const [transactions, setTransactions] = useState([]);

    const balance = user?.balance ?? 0;
    const accountNumber = user?.accountNumber ?? "----";

    useEffect(() => {
        const fetchUser = async () => {
            if (!user?._id) return;
            try {
                const result = await getUserAPI({ userId: user._id });
                if (result.status === 200) {
                    sessionStorage.setItem("existingUser", JSON.stringify(result.data));
                    setUser(result.data);
                }
            } catch (err) {
                console.error("Failed to fetch user:", err);
            }
        };
        fetchUser();
    }, [user?._id]);

    useEffect(() => {
        const fetchTransactions = async () => {
            if (!user?._id) return;
            try {
                const result = await getUserTransactionsAPI(user._id);
                if (result.status === 200) {
                    setTransactions(result.data); // latest 5
                }
            } catch (err) {
                console.error("Failed to fetch transactions:", err);
            }
        };
        fetchTransactions();
    }, [user?._id]);

    const getAmountStyle = (transaction) => {
        if (transaction.type === "deposit") {
            return { sign: "+", color: "text-green-600" };
        }

        if (transaction.type === "withdraw") {
            return { sign: "-", color: "text-red-600" };
        }

        if (transaction.type === "transfer") {
            if (transaction.fromAccount === accountNumber) {
                return { sign: "-", color: "text-red-600" };
            }
            return { sign: "+", color: "text-green-600" };
        }
    };


    return (
        <>
            <Header />

            <div className="min-h-screen px-6 py-10" style={{ backgroundColor: "#F8F3F0" }}>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

                    <div className="rounded-2xl p-6 shadow-lg" style={{ backgroundColor: "#E8DAD4" }}>
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="text-xl font-semibold">Current Balance</h2>
                            <AccountBalanceWalletIcon sx={{ color: "#8B3A3A" }} />
                        </div>
                        <p className="text-3xl font-bold">₹ {balance}</p>
                    </div>

                    <div className="rounded-2xl p-6 shadow-lg" style={{ backgroundColor: "#E8DAD4" }}>
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="text-xl font-semibold">Account Details</h2>
                            <PersonIcon sx={{ color: "#8B3A3A" }} />
                        </div>
                        <p>Account No: <b>{accountNumber}</b></p>
                        <p>Type: <b>Savings</b></p>
                    </div>

                    <div className="rounded-2xl p-6 shadow-lg" style={{ backgroundColor: "#E8DAD4" }}>
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="text-xl font-semibold">Loan Summary</h2>
                            <CurrencyRupeeIcon sx={{ color: "#8B3A3A" }} />
                        </div>
                        <p>Active: <b>YES</b></p>
                        <p>EMI: <b>₹ 1,200 / month</b></p>
                    </div>

                    <div className="rounded-2xl p-6 shadow-lg" style={{ backgroundColor: "#E8DAD4" }}>
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="text-xl font-semibold">Insurance</h2>
                            <HealthAndSafetyIcon sx={{ color: "#8B3A3A" }} />
                        </div>
                        <p>Status: <b>ACTIVE</b></p>
                        <p>Policy: <b>Health Insurance</b></p>
                    </div>
                </div>

                <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">

                    <Link to="/deposit"><Action icon={<ArrowDownwardIcon />} label="Deposit" /></Link>
                    <Link to="/withdrawal"><Action icon={<ArrowDownwardIcon style={{ transform: "rotate(180deg)" }} />} label="Withdraw" /></Link>
                    <Link to="/transactions"><Action icon={<SwapHorizIcon />} label="Transfer" /></Link>
                    <Link to="/loan"><Action icon={<CurrencyRupeeIcon />} label="Loan" /></Link>
                    <Link to="/insurance"><Action icon={<HealthAndSafetyIcon />} label="Insurance" /></Link>

                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg mb-10">
                    <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>

                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b">
                                <th>Date</th>
                                <th>Type</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {transactions.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="py-4 text-center text-gray-500">
                                        No transactions found
                                    </td>
                                </tr>
                            ) : (
                                transactions.map(transaction => {
                                    const amt = getAmountStyle(transaction);
                                    return (
                                        <tr key={transaction._id} className="border-b">
                                            <td>{new Date(transaction.createdAt).toLocaleDateString()}</td>
                                            <td className="capitalize">{transaction.type}</td>
                                            <td className={`${amt.color} font-semibold`}>
                                                {amt.sign}₹{transaction.amount}
                                            </td>
                                            <td className="capitalize">{transaction.status}</td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <Footer />
        </>
    );
}

const Action = ({ icon, label }) => (
    <div className="flex flex-col items-center justify-center gap-2 p-5 rounded-2xl shadow-md text-white cursor-pointer"
        style={{ backgroundColor: "#8B3A3A" }}>
        {icon}
        <span className="font-semibold">{label}</span>
    </div>
);

export default HomePage;
