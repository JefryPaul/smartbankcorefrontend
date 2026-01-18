import React, { useState, useEffect } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { depositAPI, depositHistoryAPI } from "../../services/allAPI";

import { Card, CardContent, Typography, TextField, Button, Divider, Chip } from "@mui/material";

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

            <div
                className="min-h-screen px-6 py-12 flex justify-center"
                style={{ backgroundColor: "#F8F3F0" }}
            >
                <div className="w-full max-w-2xl space-y-8">

                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        sx={{ color: "#2F1B19" }}
                    >
                        Add Money / Deposit
                    </Typography>

                    <Card
                        sx={{
                            borderRadius: 4,
                            backgroundColor: "#FFFFFF",
                            boxShadow: "0 8px 24px rgba(0,0,0,0.08)"
                        }}
                    >
                        <CardContent>
                            <Typography variant="h6" fontWeight="600" mb={2}>
                                Enter Deposit Amount
                            </Typography>

                            <Divider className="mb-4" />

                            <TextField
                                fullWidth
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="0.00"
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
                                onClick={handleDeposit}
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
                                Deposit
                            </Button>
                        </CardContent>
                    </Card>

                    <Card
                        sx={{
                            borderRadius: 4,
                            backgroundColor: "#FFFFFF",
                            boxShadow: "0 8px 24px rgba(0,0,0,0.06)"
                        }}
                    >
                        <CardContent>
                            <Typography variant="h6" fontWeight="600" mb={2}>
                                Past Deposits
                            </Typography>

                            <Divider className="mb-4" />

                            <div className="space-y-3">
                                {deposits.length === 0 && (
                                    <Typography color="text.secondary">
                                        No deposits yet.
                                    </Typography>
                                )}

                                {deposits.map((transaction) => (
                                    <div
                                        key={transaction._id}
                                        className="flex justify-between items-center p-4 rounded-xl border bg-[#FAF7F5]"
                                    >
                                        <Typography fontWeight="600">
                                            ₹{transaction.amount}
                                        </Typography>

                                        <Chip
                                            icon={<CheckCircleIcon />}
                                            label={transaction.status}
                                            color="success"
                                            size="small"
                                        />

                                        <Typography color="text.secondary" variant="body2">
                                            {new Date(transaction.createdAt).toLocaleDateString()}
                                        </Typography>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </div>

            <Footer />
        </>
    );
}

export default Deposit;
