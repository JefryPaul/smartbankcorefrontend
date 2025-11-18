import React from "react";
import { TextField, Button, Card, CardContent, Typography } from "@mui/material";

function Withdrawal() {
    return (
        <div
            className="min-h-screen py-10 px-5"
            style={{ backgroundColor: "#F8F3F0" }}
        >
            {/* Title */}
            <div className="max-w-3xl mx-auto mb-6">
                <h1 className="text-3xl font-bold" style={{ color: "#2F1B19" }}>
                    Withdraw Money
                </h1>
            </div>

            {/* Withdraw Form */}
            <Card
                className="max-w-3xl mx-auto rounded-2xl shadow-md mb-10"
                style={{ backgroundColor: "#E8DAD4" }}
            >
                <CardContent>
                    {/* Amount Input */}
                    <div className="mb-6">
                        <Typography className="mb-2 font-semibold" style={{ color: "#2F1B19" }}>
                            Enter Amount:
                        </Typography>
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="₹ Enter amount"
                            InputProps={{
                                style: { backgroundColor: "white", borderRadius: 8 },
                            }}
                        />
                    </div>

                    {/* Withdraw Button */}
                    <Button
                        fullWidth
                        variant="contained"
                        style={{
                            backgroundColor: "#8B3A3A",
                            padding: "12px",
                            fontSize: "1.1rem",
                            borderRadius: "12px",
                        }}
                    >
                        Withdraw Money
                    </Button>
                </CardContent>
            </Card>

            {/* Past Withdrawals */}
            <div className="max-w-3xl mx-auto">
                <h2 className="text-xl font-bold mb-4" style={{ color: "#2F1B19" }}>
                    Past Withdrawals
                </h2>

                <Card
                    className="rounded-2xl shadow-md"
                    style={{ backgroundColor: "#E8DAD4" }}
                >
                    <CardContent>
                        {/* Header Row */}
                        <div
                            className="grid grid-cols-3 font-semibold mb-3"
                            style={{ color: "#2F1B19" }}
                        >
                            <span>Amount</span>
                            <span>Status</span>
                            <span>Date</span>
                        </div>

                        {/* Example Record */}
                        <div className="grid grid-cols-3 py-3 px-2 rounded-xl bg-white">
                            <span className="text-red-600 font-semibold">-₹1000</span>
                            <span className="text-green-600 font-semibold">Success</span>
                            <span>10 Nov</span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default Withdrawal;
