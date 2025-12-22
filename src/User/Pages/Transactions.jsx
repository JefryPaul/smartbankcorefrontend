import React, { useState, useEffect } from "react";
import { TextField, Button, Card, CardContent, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { transferAPI, transferHistoryAPI } from "../../services/allAPI";

function Transactions() {
    const [receiverAccount, setReceiverAccount] = useState("");
    const [receiverName, setReceiverName] = useState("");
    const [amount, setAmount] = useState("");
    const [transfers, setTransfers] = useState([]);

    const existingUser = JSON.parse(sessionStorage.getItem("existingUser"));
    const userId = existingUser?._id;


    const getAmountDisplay = (t) => {
        const user = JSON.parse(sessionStorage.getItem("existingUser"));

        if (t.fromAccount === user.accountNumber) {
            return { sign: "-", color: "text-red-600" };
        } else {
            return { sign: "+", color: "text-green-600" };
        }
    };


    // Fetch past transfers
    const fetchTransfers = async () => {
        if (!userId) return;
        try {
            const result = await transferHistoryAPI({ userId });
            if (result.status === 200) {
                setTransfers(result.data);
            }
        } catch (err) {
            console.error("Failed to fetch transfers:", err);
        }
    };

    useEffect(() => {
        fetchTransfers();
    }, []);

    const handleTransfer = async () => {
        if (!receiverAccount || !receiverName || !amount || amount <= 0) {
            alert("Enter valid transfer details");
            return;
        }

        try {
            const result = await transferAPI({
                userId,
                receiverAccount,
                amount: Number(amount),
            });

            if (result.status === 200) {
                alert("Transfer Successful");

                const updatedUser = { ...existingUser, balance: result.data.balance };
                sessionStorage.setItem("existingUser", JSON.stringify(updatedUser));

                setReceiverAccount("");
                setReceiverName("");
                setAmount("");

                fetchTransfers();
            }
        } catch (err) {
            console.error("Transfer failed:", err);
            alert(err.response?.data || "Transfer failed");
        }
    };

    const getStatus = (status) => {
        switch (status) {
            case "success":
                return { color: "green", icon: <CheckCircleIcon sx={{ fontSize: 20 }} /> };
            case "failed":
                return { color: "red", icon: <CancelIcon sx={{ fontSize: 20 }} /> };
            case "pending":
            default:
                return { color: "orange", icon: <HourglassEmptyIcon sx={{ fontSize: 20 }} /> };
        }
    };

    return (
        <>
            <Header />
            <div className="min-h-screen py-10 px-4" style={{ backgroundColor: "#F8F3F0" }}>
                <div className="max-w-4xl mx-auto mb-6">
                    <h1 className="text-3xl font-bold" style={{ color: "#2F1B19" }}>
                        Transfer Funds
                    </h1>
                </div>

                <Card className="max-w-4xl mx-auto mb-10 rounded-2xl shadow-md" style={{ backgroundColor: "#E8DAD4" }}>
                    <CardContent>
                        <div className="mb-6">
                            <Typography className="mb-2 font-semibold" style={{ color: "#2F1B19" }}>
                                Receiver Account No:
                            </Typography>
                            <TextField
                                fullWidth
                                variant="outlined"
                                placeholder="Enter account number"
                                value={receiverAccount}
                                onChange={(e) => setReceiverAccount(e.target.value)}
                                InputProps={{ style: { backgroundColor: "white", borderRadius: 8 } }}
                            />
                        </div>

                        <div className="mb-6">
                            <Typography className="mb-2 font-semibold" style={{ color: "#2F1B19" }}>
                                Receiver Name:
                            </Typography>
                            <TextField
                                fullWidth
                                variant="outlined"
                                placeholder="Enter receiver name"
                                value={receiverName}
                                onChange={(e) => setReceiverName(e.target.value)}
                                InputProps={{ style: { backgroundColor: "white", borderRadius: 8 } }}
                            />
                        </div>

                        <div className="mb-6">
                            <Typography className="mb-2 font-semibold" style={{ color: "#2F1B19" }}>
                                Amount:
                            </Typography>
                            <TextField
                                fullWidth
                                variant="outlined"
                                placeholder="₹ Enter amount"
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                InputProps={{ style: { backgroundColor: "white", borderRadius: 8 } }}
                            />
                        </div>

                        <Button
                            fullWidth
                            variant="contained"
                            style={{ backgroundColor: "#8B3A3A", padding: "12px", fontSize: "1.1rem", borderRadius: "12px" }}
                            onClick={handleTransfer}
                        >
                            Transfer Money
                        </Button>
                    </CardContent>
                </Card>

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

                            {transfers.length === 0 && (
                                <div className="py-3 px-2 bg-white rounded-xl text-center">No transfers yet</div>
                            )}

                            {transfers.map((t) => {
                                const status = getStatus(t.status);
                                return (
                                    <div key={t._id} className="grid grid-cols-4 py-3 px-2 rounded-xl bg-white mb-2">
                                        {(() => {
                                            const amt = getAmountDisplay(t);
                                            return (
                                                <span className={`${amt.color} font-semibold`}>
                                                    {amt.sign}₹{t.amount}
                                                </span>
                                            );
                                        })()}
                                        <span>{t.toAccount}</span>
                                        <span className={`font-semibold`} style={{ color: status.color }}>
                                            {status.icon} {t.status.charAt(0).toUpperCase() + t.status.slice(1)}
                                        </span>
                                        <span>{new Date(t.createdAt).toLocaleDateString()}</span>
                                    </div>
                                );
                            })}
                        </CardContent>
                    </Card>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Transactions;
