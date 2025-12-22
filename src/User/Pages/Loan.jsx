import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { applyLoanAPI, getUserLoansAPI } from "../../services/allAPI";

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
            setMessage("Please enter valid amount and tenure");
            return;
        }

        setLoading(true);
        setMessage("");
        try {
            const reqBody = { userId: user._id, amount, tenure };
            const result = await applyLoanAPI(reqBody);
            if (result.status === 200) {
                setMessage("Loan request submitted successfully!");
                setAmount("");
                setTenure("");
                fetchLoanHistory();
            } else {
                setMessage(result.data || "Failed to submit loan request");
            }
        } catch (err) {
            console.error(err);
            setMessage("Server error while submitting loan request");
        }
        setLoading(false);
    };

    return (
        <>
            <Header />

            <div className="min-h-screen px-6 py-10" style={{ backgroundColor: "#F8F3F0" }}>
                <div className="flex items-center gap-3 mb-8">
                    <h1 className="text-3xl font-bold" style={{ color: "#2F1B19" }}>
                        Apply for Loan
                    </h1>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 mb-10">
                    <h2 className="text-xl font-semibold mb-4" style={{ color: "#2F1B19" }}>
                        Loan Details
                    </h2>

                    {message && <p className="text-red-600 mb-4">{message}</p>}

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="font-medium" style={{ color: "#2F1B19" }}>
                                Loan Amount (₹)
                            </label>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="Enter amount"
                                className="w-full mt-1 p-3 rounded-lg border"
                                style={{ borderColor: "#C7A58C" }}
                            />
                        </div>

                        <div>
                            <label className="font-medium" style={{ color: "#2F1B19" }}>
                                Time Period (months)
                            </label>
                            <input
                                type="number"
                                value={tenure}
                                onChange={(e) => setTenure(e.target.value)}
                                placeholder="Ex: 12"
                                className="w-full mt-1 p-3 rounded-lg border"
                                style={{ borderColor: "#C7A58C" }}
                            />
                        </div>

                        <div>
                            <label className="font-medium" style={{ color: "#2F1B19" }}>
                                Interest Rate (%)
                            </label>
                            <input
                                type="text"
                                value="7"
                                disabled
                                className="w-full mt-1 p-3 rounded-lg border bg-gray-100"
                                style={{ borderColor: "#C7A58C" }}
                            />
                        </div>

                        <div>
                            <label className="font-medium" style={{ color: "#2F1B19" }}>
                                PNR Interest
                            </label>
                            <input
                                type="text"
                                value={((amount * 7 * tenure) / 100).toFixed(2)}
                                disabled
                                className="w-full mt-1 p-3 rounded-lg border bg-gray-100"
                                style={{ borderColor: "#C7A58C" }}
                            />
                        </div>
                    </div>

                    <div className="mt-6">
                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="w-full py-3 rounded-xl font-semibold shadow-md text-white"
                            style={{ backgroundColor: "#8B3A3A" }}
                        >
                            {loading ? "Submitting..." : "Submit Loan Request"}
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h2 className="text-xl font-bold mb-4" style={{ color: "#2F1B19" }}>
                        Loan History
                    </h2>

                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b">
                                <th className="py-2">Amount</th>
                                <th>Status</th>
                                <th>Date</th>
                            </tr>
                        </thead>

                        <tbody>
                            {loanHistory.length === 0 ? (
                                <tr>
                                    <td colSpan="3" className="py-4 text-center text-gray-500">
                                        No loans found
                                    </td>
                                </tr>
                            ) : (
                                loanHistory.map((loan) => (
                                    <tr key={loan._id} className="border-b">
                                        <td>₹{loan.amount}</td>
                                        <td className="capitalize">{loan.status}</td>
                                        <td>{new Date(loan.appliedAt).toLocaleDateString()}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Loan;
