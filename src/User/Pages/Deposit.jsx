import React, { useState, useEffect } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { depositAPI, depositHistoryAPI } from "../../services/allAPI";

function Deposit() {
    const [amount, setAmount] = useState("");
    const [deposits, setDeposits] = useState([]);

    const user = JSON.parse(sessionStorage.getItem("existingUser"));

    const fetchDepositHistory = async () => {
        try {
            const result = await depositHistoryAPI({ userId: user._id });
            if (result.status === 200) {
                setDeposits(result.data);
            }
        } catch (err) {
            console.error("Failed to fetch deposit history:", err);
        }
    };

    useEffect(() => {
        fetchDepositHistory();
    }, []);

    const handleDeposit = async () => {
        if (!amount || amount <= 0) {
            alert("Enter valid amount");
            return;
        }

        try {
            const result = await depositAPI({
                userId: user._id,
                amount: Number(amount)
            });

            if (result.status === 200) {
                const updatedUser = { ...user, balance: result.data.balance };
                sessionStorage.setItem("existingUser", JSON.stringify(updatedUser));
                alert("Deposit Successful");
                setAmount("");

                fetchDepositHistory();
            }
        } catch (err) {
            console.error(err);
            alert("Deposit failed");
        }
    };

    return (
        <>
            <Header />

            <div className="min-h-screen px-6 py-10 flex justify-center" style={{ backgroundColor: "#F8F3F0" }}>
                <div className="w-full max-w-2xl">

                    {/* Page Title */}
                    <h1 className="text-3xl font-bold mb-8" style={{ color: "#2F1B19" }}>
                        Add Money / Deposit
                    </h1>

                    {/* Deposit Form */}
                    <div className="p-6 rounded-2xl shadow-lg mb-8" style={{ backgroundColor: "#E8DAD4" }}>
                        <label className="block font-semibold mb-3 text-lg">Enter Amount:</label>

                        <div className="flex items-center bg-white rounded-xl px-4 py-3 shadow-inner border">
                            <span className="text-xl font-bold mr-2" style={{ color: "#8B3A3A" }}>₹</span>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="0.00"
                                className="w-full outline-none text-lg bg-transparent"
                            />
                        </div>

                        <button
                            onClick={handleDeposit}
                            className="w-full mt-6 py-3 rounded-xl font-semibold text-white shadow-md transition-all hover:scale-[1.02]"
                            style={{ backgroundColor: "#8B3A3A" }}
                        >
                            Proceed to Pay
                        </button>
                    </div>

                    <div className="p-6 rounded-2xl shadow-lg bg-white">
                        <h2 className="text-xl font-bold mb-4" style={{ color: "#2F1B19" }}>
                            Past Deposits
                        </h2>

                        <div className="space-y-4">
                            {deposits.length === 0 && <p className="text-gray-500">No deposits yet.</p>}
                            {deposits.map((transaction) => (
                                <div key={transaction._id} className="flex justify-between items-center p-3 rounded-lg border">
                                    <span className="font-semibold text-lg">₹{transaction.amount}</span>
                                    <span className="flex items-center gap-1 font-semibold"
                                        style={{ color: "green" }}>
                                        <CheckCircleIcon sx={{ fontSize: 20 }} />
                                        {transaction.status}
                                    </span>

                                    <span className="text-gray-700">{new Date(transaction.createdAt).toLocaleDateString()}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
}

export default Deposit;
