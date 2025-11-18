import React from "react";
import { TextField, Button, Card, CardContent, Typography } from "@mui/material";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function Transactions() {
    return (
        <>
            <Header />
            <div className="min-h-screen py-10 px-4" style={{ backgroundColor: "#F8F3F0" }}>

                {/* Page Title */}
                <div className="max-w-4xl mx-auto mb-6">
                    <h1 className="text-3xl font-bold" style={{ color: "#2F1B19" }}>
                        Transfer Funds
                    </h1>
                </div>

                {/* Transfer Form */}
                <Card
                    className="max-w-4xl mx-auto mb-10 rounded-2xl shadow-md"
                    style={{ backgroundColor: "#E8DAD4" }}
                >
                    <CardContent>

                        {/* Receiver Account Number */}
                        <div className="mb-6">
                            <Typography className="mb-2 font-semibold" style={{ color: "#2F1B19" }}>
                                Receiver Account No:
                            </Typography>
                            <TextField
                                fullWidth
                                variant="outlined"
                                placeholder="Enter account number"
                                InputProps={{ style: { backgroundColor: "white", borderRadius: 8 } }}
                            />
                        </div>

                        {/* Receiver Name */}
                        <div className="mb-6">
                            <Typography className="mb-2 font-semibold" style={{ color: "#2F1B19" }}>
                                Receiver Name:
                            </Typography>
                            <TextField
                                fullWidth
                                variant="outlined"
                                placeholder="Enter receiver name"
                                InputProps={{ style: { backgroundColor: "white", borderRadius: 8 } }}
                            />
                        </div>

                        {/* Amount */}
                        <div className="mb-6">
                            <Typography className="mb-2 font-semibold" style={{ color: "#2F1B19" }}>
                                Amount:
                            </Typography>
                            <TextField
                                fullWidth
                                variant="outlined"
                                placeholder="₹ Enter amount"
                                InputProps={{ style: { backgroundColor: "white", borderRadius: 8 } }}
                            />
                        </div>

                        {/* Transfer Button */}
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
                            Transfer Money
                        </Button>
                    </CardContent>
                </Card>

                {/* Past Transfers Section */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xl font-bold mb-4" style={{ color: "#2F1B19" }}>
                        Past Transfers
                    </h2>

                    <Card className="rounded-2xl shadow-md" style={{ backgroundColor: "#E8DAD4" }}>
                        <CardContent>

                            <div className="grid grid-cols-4 font-semibold mb-3" style={{ color: "#2F1B19" }}>
                                <span>Amount</span>
                                <span>To</span>
                                <span>Status</span>
                                <span>Date</span>
                            </div>

                            {/* Single Row */}
                            <div className="grid grid-cols-4 py-3 px-2 rounded-xl bg-white">
                                <span className="text-red-600 font-semibold">-₹500</span>
                                <span>Arjun</span>
                                <span className="text-green-600 font-semibold">Success</span>
                                <span>11 Nov</span>
                            </div>

                        </CardContent>
                    </Card>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Transactions;
