import React, { useState, useEffect } from "react";
import {
    TextField,
    Button,
    Card,
    CardContent,
    Typography,
    Divider,
    Chip
} from "@mui/material";
import { withdrawAPI, withdrawHistoryAPI } from "../../services/allAPI";
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; 

import Header from "../Components/Header";




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
        <>


            <Header />


            <div
                className="min-h-screen px-6 py-12 flex justify-center"
                style={{ backgroundColor: "#F8F3F0" }}
            >
                <div className="w-full max-w-2xl space-y-8">

                    {/* Page Title */}
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        sx={{ color: "#2F1B19" }}
                    >
                        Withdraw Money
                    </Typography>

                    {/* ================= WITHDRAW FORM ================= */}
                    <Card
                        sx={{
                            borderRadius: 4,
                            backgroundColor: "#FFFFFF",
                            boxShadow: "0 8px 24px rgba(0,0,0,0.08)"
                        }}
                    >
                        <CardContent>
                            <Typography variant="h6" fontWeight="600" mb={2}>
                                Enter Withdrawal Amount
                            </Typography>

                            <Divider className="mb-4" />

                            <TextField
                                fullWidth
                                type="number"
                                placeholder="0.00"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <Typography
                                            fontWeight="bold"
                                            sx={{ color: "#8B3A3A", mr: 1 }}
                                        >
                                            ₹
                                        </Typography>
                                    )
                                }}
                            />

                            <Button
                                fullWidth
                                onClick={handleWithdraw}
                                sx={{
                                    mt: 4,
                                    py: 1.5,
                                    backgroundColor: "#8B3A3A",
                                    color: "#fff",
                                    fontWeight: "600",
                                    borderRadius: 3,
                                    "&:hover": {
                                        backgroundColor: "#662828"
                                    }
                                }}
                            >
                                Withdraw Money
                            </Button>
                        </CardContent>
                    </Card>

                    {/* ================= PAST WITHDRAWALS ================= */}
                    <Card
                        sx={{
                            borderRadius: 4,
                            backgroundColor: "#FFFFFF",
                            boxShadow: "0 8px 24px rgba(0,0,0,0.06)"
                        }}
                    >
                        <CardContent>
                            <Typography variant="h6" fontWeight="600" mb={2}>
                                Past Withdrawals
                            </Typography>

                            <Divider className="mb-4" />

                            <div className="space-y-3">
                                {withdrawals.length === 0 && (
                                    <Typography color="text.secondary">
                                        No withdrawals yet.
                                    </Typography>
                                )}

                                {withdrawals.map((transaction) => {
                                    const { color, icon } = getStatusStyle(transaction.status);

                                    return (
                                        <div
                                            key={transaction._id}
                                            className="flex justify-between items-center p-4 rounded-xl border bg-[#FAF7F5]"
                                        >
                                            <Typography fontWeight="600" color="error">
                                                -₹{transaction.amount}
                                            </Typography>

                                            <Chip
                                                label={transaction.status}
                                                size="small"
                                                sx={{
                                                    fontWeight: 500,
                                                    color,
                                                    borderColor: color
                                                }}
                                                variant="outlined"
                                            />

                                            <Typography color="text.secondary" variant="body2">
                                                {new Date(transaction.createdAt).toLocaleDateString()}
                                            </Typography>
                                        </div>
                                    );
                                })}
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </div>
        </>
    );
}

export default Withdrawal;
