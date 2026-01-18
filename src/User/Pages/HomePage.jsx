import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

import {
    Card,
    CardContent,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip,
    TableContainer,
    Divider,
    Button
} from "@mui/material";

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import PersonIcon from "@mui/icons-material/Person";
import DownloadIcon from "@mui/icons-material/Download";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";


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
            const result = await getUserAPI({ userId: user._id });
            if (result.status === 200) {
                sessionStorage.setItem("existingUser", JSON.stringify(result.data));
                setUser(result.data);
            }
        };
        fetchUser();
    }, [user?._id]);

    useEffect(() => {
        const fetchTransactions = async () => {
            if (!user?._id) return;
            const result = await getUserTransactionsAPI(user._id);
            if (result.status === 200) {
                setTransactions(result.data);
            }
        };
        fetchTransactions();
    }, [user?._id]);

    const getAmountStyle = (transaction) => {
        if (transaction.type === "deposit") {
            return { sign: "+", color: "success" };
        }
        if (transaction.type === "withdraw") {
            return { sign: "-", color: "error" };
        }
        if (transaction.type === "transfer") {
            return transaction.fromAccount === accountNumber
                ? { sign: "-", color: "error" }
                : { sign: "+", color: "success" };
        }
    };

    const downloadPDF = async () => {
        const input = document.getElementById("result")
        const canvas = await html2canvas(input, { scale: 2 })
        const imgData = canvas.toDataURL("image/png")


        const pdf = new jsPDF("P", "mm", "a4")
        const pdfWidth = pdf.internal.pageSize.getWidth()
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width
        pdf.addImage(imgData, "png", 0, 0, pdfWidth, pdfHeight)
        pdf.save("Bank_Statement.pdf")
    }

    return (
        <>
            <Header />

            <div className="min-h-screen px-6 py-10" style={{ backgroundColor: "#F8F3F0" }}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                    <SummaryCard
                        title="Current Balance"
                        value={`₹ ${balance}`}
                        icon={<AccountBalanceWalletIcon sx={{ color: "#8B3A3A" }} />}
                    />

                    <SummaryCard
                        title="Account Details"
                        value={`Acc No: ${accountNumber}`}
                        subValue="Savings"
                        icon={<PersonIcon sx={{ color: "#8B3A3A" }} />}
                    />

                    <SummaryCard
                        title="Loan Summary"
                        value="Active: YES"
                        subValue="EMI: ₹1200 / month"
                        icon={<CurrencyRupeeIcon sx={{ color: "#8B3A3A" }} />}
                    />

                    <SummaryCard
                        title="Insurance"
                        value="ACTIVE"
                        subValue="Health Insurance"
                        icon={<HealthAndSafetyIcon sx={{ color: "#8B3A3A" }} />}
                    />
                </div>

                <Typography variant="h6" fontWeight="bold" mb={2}>
                    Quick Actions
                </Typography>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
                    <Link to="/deposit"><Action icon={<ArrowDownwardIcon />} label="Deposit" /></Link>
                    <Link to="/withdrawal"><Action icon={<ArrowDownwardIcon sx={{ transform: "rotate(180deg)" }} />} label="Withdraw" /></Link>
                    <Link to="/transactions"><Action icon={<SwapHorizIcon />} label="Transfer" /></Link>
                    <Link to="/loan"><Action icon={<CurrencyRupeeIcon />} label="Loan" /></Link>
                    <Link to="/insurance"><Action icon={<HealthAndSafetyIcon />} label="Insurance" /></Link>
                </div>

                <Card
                    sx={{
                        borderRadius: 3,
                        boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                        border: "1px solid #eee"
                    }}
                >
                    <div id="result">
                        <CardContent>
                            <Typography
                                variant="h6"
                                fontWeight="600"
                                mb={2}
                                sx={{ color: "#2F1B19" }}
                            >
                                Recent Transactions
                            </Typography>

                            <TableContainer sx={{ borderRadius: 2 }}>
                                <Table>
                                    <TableHead>
                                        <TableRow sx={{ backgroundColor: "#F8F3F0" }}>
                                            <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
                                            <TableCell sx={{ fontWeight: "bold" }}>Type</TableCell>
                                            <TableCell sx={{ fontWeight: "bold" }}>Amount</TableCell>
                                            <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
                                        </TableRow>
                                    </TableHead>

                                    <TableBody>
                                        {transactions.length === 0 ? (
                                            <TableRow>
                                                <TableCell colSpan={4} align="center">
                                                    <Typography
                                                        variant="body2"
                                                        sx={{ color: "text.secondary", py: 3 }}
                                                    >
                                                        No transactions found
                                                    </Typography>
                                                </TableCell>
                                            </TableRow>
                                        ) : (
                                            transactions.map((tx) => {
                                                const amt = getAmountStyle(tx);

                                                return (
                                                    <TableRow
                                                        key={tx._id}
                                                        hover
                                                        sx={{
                                                            transition: "background-color 0.2s",
                                                            "&:hover": {
                                                                backgroundColor: "#FAF7F5"
                                                            }
                                                        }}
                                                    >
                                                        <TableCell>
                                                            {new Date(tx.createdAt).toLocaleDateString()}
                                                        </TableCell>

                                                        <TableCell sx={{ textTransform: "capitalize" }}>
                                                            {tx.type}
                                                        </TableCell>

                                                        <TableCell>
                                                            <Chip
                                                                label={`${amt.sign} ₹${tx.amount}`}
                                                                color={amt.color}
                                                                size="small"
                                                                sx={{ fontWeight: "500" }}
                                                            />
                                                        </TableCell>

                                                        <TableCell sx={{ textTransform: "capitalize" }}>
                                                            <Chip
                                                                label={tx.status}
                                                                size="small"
                                                                variant="outlined"
                                                            />
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            })
                                        )}
                                    </TableBody>
                                </Table>
                            </TableContainer>


                            <Divider sx={{ my: 3 }} />




                        </CardContent>
                    </div>

                    <div className="flex justify-center">
                        <Button
                            onClick={downloadPDF}
                            startIcon={<DownloadIcon />}
                            sx={{
                                backgroundColor: "#8B3A3A",
                                color: "#fff",
                                px: 4,
                                py: 1,
                                borderRadius: 2,
                                textTransform: "none",
                                fontWeight: "600",
                                "&:hover": {
                                    backgroundColor: "#662828",
                                },
                            }}
                        >
                            Download Bank Statement
                        </Button>
                    </div>
                </Card>

            </div>

            <Footer />
        </>
    );
}


const SummaryCard = ({ title, value, subValue, icon }) => (
    <Card sx={{ borderRadius: 3, background: "#E8DAD4" }}>
        <CardContent>
            <div className="flex justify-between items-center mb-2">
                <Typography fontWeight="bold">{title}</Typography>
                {icon}
            </div>
            <Typography variant="h6" fontWeight="bold">{value}</Typography>
            {subValue && <Typography variant="body2">{subValue}</Typography>}
        </CardContent>
    </Card>
);

const Action = ({ icon, label }) => (
    <div
        className="
      flex flex-col items-center justify-center gap-2 p-5
      rounded-2xl cursor-pointer text-white
      transition-all duration-200 ease-in-out
      shadow-md hover:shadow-lg
      hover:-translate-y-1
      active:translate-y-0 active:scale-95
      select-none
    "
        style={{ backgroundColor: "#8B3A3A" }}
    >
        <div className="text-2xl">{icon}</div>
        <span className="font-semibold">{label}</span>
    </div>
);


export default HomePage;
