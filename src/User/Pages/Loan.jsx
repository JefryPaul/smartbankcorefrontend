import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import PaidIcon from "@mui/icons-material/Paid";

function Loan() {
    return (
        <>
            <Header />

            <div className="min-h-screen px-6 py-10" style={{ backgroundColor: "#F8F3F0" }}>

                {/* Page Title */}
                <div className="flex items-center gap-3 mb-8">
                    {/* <PaidIcon sx={{ fontSize: 40, color: "#8B3A3A" }} /> */}
                    <h1 className="text-3xl font-bold" style={{ color: "#2F1B19" }}>
                        Apply for Loan
                    </h1>
                </div>

                {/* Loan Form */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-10">
                    <h2 className="text-xl font-semibold mb-4" style={{ color: "#2F1B19" }}>
                        Loan Details
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">

                        {/* Loan Amount */}
                        <div>
                            <label className="font-medium" style={{ color: "#2F1B19" }}>
                                Loan Amount (₹)
                            </label>
                            <input
                                type="number"
                                placeholder="Enter amount"
                                className="w-full mt-1 p-3 rounded-lg border"
                                style={{ borderColor: "#C7A58C" }}
                            />
                        </div>

                        {/* Time Period */}
                        <div>
                            <label className="font-medium" style={{ color: "#2F1B19" }}>
                                Time Period (months)
                            </label>
                            <input
                                type="number"
                                placeholder="Ex: 12"
                                className="w-full mt-1 p-3 rounded-lg border"
                                style={{ borderColor: "#C7A58C" }}
                            />
                        </div>

                        {/* Interest Rate */}
                        <div>
                            <label className="font-medium" style={{ color: "#2F1B19" }}>
                                Interest Rate (%)
                            </label>
                            <input
                                type="text"
                                value=""
                                disabled
                                className="w-full mt-1 p-3 rounded-lg border bg-gray-100"
                                style={{ borderColor: "#C7A58C" }}
                            />
                        </div>

                        {/* PNR Interest */}
                        <div>
                            <label className="font-medium" style={{ color: "#2F1B19" }}>
                                PNR Interest (Auto)
                            </label>
                            <input
                                type="text"
                                value=""
                                disabled
                                className="w-full mt-1 p-3 rounded-lg border bg-gray-100"
                                style={{ borderColor: "#C7A58C" }}
                            />
                        </div>
                    </div>

                    {/* Button */}
                    <div className="mt-6">
                        <button
                            className="w-full py-3 rounded-xl font-semibold shadow-md text-white"
                            style={{ backgroundColor: "#8B3A3A" }}
                        >
                            Submit Loan Request
                        </button>
                    </div>
                </div>

                {/* Loan History */}
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
                            <tr>
                                <td className="py-2">₹50,000</td>
                                <td>Pending</td>
                                <td>12 Nov</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Loan;
