import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { applyLoanAPI, getUserLoansAPI } from "../../services/allAPI";

import {
    Card,
    CardContent,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableContainer,
    Divider,
    Button, 
    TextField
} from "@mui/material";

function Loan() {
    const [user, setUser] = useState(() => {
        return JSON.parse(sessionStorage.getItem("existingUser")) || {};
    });

    const [amount, setAmount] = useState("");
    const [tenure, setTenure] = useState("");
    const [loanHistory, setLoanHistory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const fetchLoanHistory = async () => {
        if (!user?._id) return;
        try {
            const result = await getUserLoansAPI(user._id);
            if (result.status === 200) {
                setLoanHistory(result.data);
            }
        } catch (err) {
            console.error("Failed to fetch loan history:", err);
        }
    };

    useEffect(() => {
        fetchLoanHistory();
    }, [user?._id]);

    const handleSubmit = async () => {
        if (!amount || !tenure) {
            alert("Please enter valid amount and tenure");
            return;
        }

        setLoading(true);

        try {
            const reqBody = { userId: user._id, amount, tenure };
            const result = await applyLoanAPI(reqBody);

            if (result.status === 200) {
                alert("Loan request submitted successfully!");
                setAmount("");
                setTenure("");
                fetchLoanHistory();
            } else {
                alert("Failed to submit loan request");
            }
        } catch (err) {
            console.error(err);
            alert("Server error while submitting loan request");
        }

        setLoading(false);
    };


    return (
        <>
            <Header />

            <div
                className="min-h-screen px-6 py-12 flex justify-center"
                style={{ backgroundColor: "#F8F3F0" }}
            >
                <div className="w-full max-w-3xl space-y-8">

                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        sx={{ color: "#2F1B19" }}
                    >
                        Apply for Loan
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
                                Loan Details
                            </Typography>

                            <Divider className="mb-4" />

                            {message && (
                                <Typography color="error" mb={3}>
                                    {message}
                                </Typography>
                            )}

                            <div className="grid md:grid-cols-2 gap-5">

                                <TextField
                                    label="Loan Amount (₹)"
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    fullWidth
                                />

                                <TextField
                                    label="Time Period (months)"
                                    type="number"
                                    value={tenure}
                                    onChange={(e) => setTenure(e.target.value)}
                                    fullWidth
                                />

                                <TextField
                                    label="Interest Rate (%)"
                                    value="7"
                                    disabled
                                    fullWidth
                                />

                                <TextField
                                    label="PNR Interest"
                                    value={((amount * 7 * tenure) / 100).toFixed(2)}
                                    disabled
                                    fullWidth
                                />

                            </div>

                            <Button
                                fullWidth
                                onClick={handleSubmit}
                                disabled={loading}
                                sx={{
                                    mt: 4,
                                    py: 1.5,
                                    fontWeight: "600",
                                    borderRadius: 3,
                                    backgroundColor: "#8B3A3A",
                                    "&:hover": {
                                        backgroundColor: "#662828"
                                    }
                                }}
                            >
                                {loading ? "Submitting..." : "Submit Loan Request"}
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
                                Loan History
                            </Typography>

                            <Divider className="mb-4" />

                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow sx={{ backgroundColor: "#F8F3F0" }}>
                                            <TableCell sx={{ fontWeight: "bold" }}>Amount</TableCell>
                                            <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
                                            <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
                                        </TableRow>
                                    </TableHead>

                                    <TableBody>
                                        {loanHistory.length === 0 ? (
                                            <TableRow>
                                                <TableCell colSpan={3} align="center">
                                                    <Typography color="text.secondary" py={3}>
                                                        No loans found
                                                    </Typography>
                                                </TableCell>
                                            </TableRow>
                                        ) : (
                                            loanHistory.map((loan) => (
                                                <TableRow
                                                    key={loan._id}
                                                    hover
                                                    sx={{
                                                        "&:hover": {
                                                            backgroundColor: "#FAF7F5"
                                                        }
                                                    }}
                                                >
                                                    <TableCell>₹{loan.amount}</TableCell>
                                                    <TableCell sx={{ textTransform: "capitalize" }}>
                                                        {loan.status}
                                                    </TableCell>
                                                    <TableCell>
                                                        {new Date(loan.appliedAt).toLocaleDateString()}
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        )}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </CardContent>
                    </Card>

                </div>
            </div>

            <Footer />
        </>
    );

}

export default Loan;
