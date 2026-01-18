import React, { useState, useEffect } from "react";
import { TextField, Button, Card, CardContent, Typography, Divider } from "@mui/material";
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

            <div
                className="min-h-screen px-6 py-12 flex justify-center"
                style={{ backgroundColor: "#F8F3F0" }}
            >
                <div className="w-full max-w-2xl space-y-8">

                    {/* Page Title */}
                    <h1
                        className="text-3xl font-bold"
                        style={{ color: "#2F1B19" }}
                    >
                        Transfer Funds
                    </h1>

                    {/* ================= TRANSFER FORM ================= */}
                    <Card
                        sx={{
                            borderRadius: 4,
                            backgroundColor: "#FFFFFF",
                            boxShadow: "0 8px 24px rgba(0,0,0,0.08)"
                        }}
                    >
                        <CardContent>

                            <Typography variant="h6" fontWeight="600" mb={2}>
                                Transfer Details
                            </Typography>

                            <Divider className="mb-4" />

                            {/* Receiver Account */}
                            <div className="mb-4">
                                <Typography fontWeight="600" mb={1} color="#2F1B19">
                                    Receiver Account No
                                </Typography>
                                <TextField
                                    fullWidth
                                    placeholder="Enter account number"
                                    value={receiverAccount}
                                    onChange={(e) => setReceiverAccount(e.target.value)}
                                />
                            </div>

                            {/* Receiver Name */}
                            <div className="mb-4">
                                <Typography fontWeight="600" mb={1} color="#2F1B19">
                                    Receiver Name
                                </Typography>
                                <TextField
                                    fullWidth
                                    placeholder="Enter receiver name"
                                    value={receiverName}
                                    onChange={(e) => setReceiverName(e.target.value)}
                                />
                            </div>

                            {/* Amount */}
                            <div className="mb-6">
                                <Typography fontWeight="600" mb={1} color="#2F1B19">
                                    Amount
                                </Typography>
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
                            </div>

                            <Button
                                fullWidth
                                onClick={handleTransfer}
                                sx={{
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
                                Transfer Money
                            </Button>
                        </CardContent>
                    </Card>

                    {/* ================= PAST TRANSFERS ================= */}
                    <Card
                        sx={{
                            borderRadius: 4,
                            backgroundColor: "#FFFFFF",
                            boxShadow: "0 8px 24px rgba(0,0,0,0.06)"
                        }}
                    >
                        <CardContent>

                            <Typography variant="h6" fontWeight="600" mb={2}>
                                Past Transfers
                            </Typography>

                            <Divider className="mb-4" />

                            <div className="space-y-3">
                                {transfers.length === 0 && (
                                    <Typography color="text.secondary">
                                        No transfers yet.
                                    </Typography>
                                )}

                                {transfers.map((t) => {
                                    const status = getStatus(t.status);
                                    const amt = getAmountDisplay(t);

                                    return (
                                        <div
                                            key={t._id}
                                            className="flex justify-between items-center p-4 rounded-xl border bg-[#FAF7F5]"
                                        >
                                            <span className={`${amt.color} font-semibold`}>
                                                {amt.sign}₹{t.amount}
                                            </span>

                                            <span className="font-medium text-gray-700">
                                                {t.toAccount}
                                            </span>

                                            <span
                                                className="font-semibold"
                                                style={{ color: status.color }}
                                            >
                                                {status.icon} {t.status.charAt(0).toUpperCase() + t.status.slice(1)}
                                            </span>

                                            <span className="text-gray-500 text-sm">
                                                {new Date(t.createdAt).toLocaleDateString()}
                                            </span>
                                        </div>
                                    );
                                })}
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
