import React, { useState, useEffect } from "react";
import {
    TextField,
    Button,
    Card,
    CardContent,
    Typography
} from "@mui/material";
import { withdrawAPI, withdrawHistoryAPI } from "../../services/allAPI";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


function Withdrawal() {
    const [amount, setAmount] = useState("");
    const [withdrawals, setWithdrawals] = useState([]);
    const existingUser = JSON.parse(sessionStorage.getItem("existingUser"));
    const userId = existingUser?._id;

    const fetchWithdrawHistory = async () => {
        try {
            const result = await withdrawHistoryAPI({ userId });
            if (result.status === 200) {
                setWithdrawals(result.data);
            }
        } catch (err) {
            console.error("Failed to fetch withdrawal history:", err);
        }
    };

    useEffect(() => {
        fetchWithdrawHistory();
    }, []);

    const handleWithdraw = async () => {
        if (!amount || amount <= 0) {
            alert("Enter valid amount");
            return;
        }

        try {
            const result = await withdrawAPI({
                userId,
                amount: Number(amount)
            });

            if (result.status === 200) {
                const updatedUser = {
                    ...existingUser,
                    balance: result.data.balance
                };
                sessionStorage.setItem("existingUser", JSON.stringify(updatedUser));
                alert("Withdrawal Successful");
                setAmount("");

                fetchWithdrawHistory();
            }
        } catch (err) {
            console.error(err);
            alert("Withdrawal failed");
        }
    };

    const getStatusStyle = (status) => {
        if (status) {
            return { color: "green", icon: <CheckCircleIcon sx={{ fontSize: 20 }} /> };
        }
    };

    return (
        <div className="min-h-screen py-10 px-5" style={{ backgroundColor: "#F8F3F0" }}>
            <div className="max-w-3xl mx-auto mb-6">
                <h1 className="text-3xl font-bold" style={{ color: "#2F1B19" }}>
                    Withdraw Money
                </h1>
            </div>

            <Card
                className="max-w-3xl mx-auto rounded-2xl shadow-md mb-10"
                style={{ backgroundColor: "#E8DAD4" }}
            >
                <CardContent>
                    <Typography className="mb-2 font-semibold">Enter Amount:</Typography>

                    <TextField
                        fullWidth
                        type="number"
                        placeholder="₹ Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        InputProps={{ style: { backgroundColor: "white", borderRadius: 8 } }}
                    />

                    <Button
                        fullWidth
                        variant="contained"
                        onClick={handleWithdraw}
                        style={{
                            backgroundColor: "#8B3A3A",
                            padding: "12px",
                            fontSize: "1.1rem",
                            borderRadius: "12px",
                            marginTop: "20px"
                        }}
                    >
                        Withdraw Money
                    </Button>
                </CardContent>
            </Card>

            <div className="max-w-3xl mx-auto">
                <h2 className="text-xl font-bold mb-4">Past Withdrawals</h2>

                <Card className="rounded-2xl shadow-md">
                    <CardContent>
                        <div className="grid grid-cols-3 font-semibold mb-3">
                            <span>Amount</span>
                            <span>Status</span>
                            <span>Date</span>
                        </div>

                        {withdrawals.length === 0 && (
                            <p className="text-gray-500">No withdrawals yet.</p>
                        )}

                        {withdrawals.map((transaction) => {
                            const { color, icon } = getStatusStyle(transaction.status);
                            return (
                                <div
                                    key={transaction._id}
                                    className="grid grid-cols-3 py-3 px-2 rounded-xl bg-white mb-2"
                                >
                                    <span className="text-red-600 font-semibold">-₹{transaction.amount}</span>
                                    <span className="font-semibold" style={{ color }}>
                                        {icon} {transaction.status}
                                    </span>
                                    <span>{new Date(transaction.createdAt).toLocaleDateString()}</span>
                                </div>
                            );
                        })}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default Withdrawal;
