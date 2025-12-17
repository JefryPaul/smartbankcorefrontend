import React, { useState } from "react";
import PaidIcon from "@mui/icons-material/Paid";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Deposit() {
    const [amount, setAmount] = useState("");

    return (

        <> 

        <Header />

            <div
                className="min-h-screen px-6 py-10 flex justify-center"
                style={{ backgroundColor: "#F8F3F0" }}
            >
                <div className="w-full max-w-2xl">

                    {/* Page Title */}
                    <h1
                        className="text-3xl font-bold mb-8 flex items-center gap-2"
                        style={{ color: "#2F1B19" }}
                    >
                        {/* <PaidIcon sx={{ color: "#8B3A3A" }} /> */}
                        Add Money / Deposit
                    </h1>

                    {/* Deposit Form */}
                    <div
                        className="p-6 rounded-2xl shadow-lg mb-8"
                        style={{ backgroundColor: "#E8DAD4", color: "#2F1B19" }}
                    >
                        <label className="block font-semibold mb-3 text-lg">
                            Enter Amount:
                        </label>

                        <div className="flex items-center bg-white rounded-xl px-4 py-3 shadow-inner border border-gray-300">
                            <span className="text-xl font-bold mr-2" style={{ color: "#8B3A3A" }}>
                                ₹
                            </span>

                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="0.00"
                                className="w-full outline-none text-lg bg-transparent"
                            />
                        </div>

                        <button
                            className="w-full mt-6 py-3 rounded-xl font-semibold text-white shadow-md transition-all hover:scale-[1.02]"
                            style={{ backgroundColor: "#8B3A3A" }}
                        >
                            Proceed to Pay
                        </button>
                    </div>

                    {/* Past Deposits */}
                    <div className="p-6 rounded-2xl shadow-lg bg-white">
                        <h2
                            className="text-xl font-bold mb-4"
                            style={{ color: "#2F1B19" }}
                        >
                            Past Deposits
                        </h2>

                        <div className="space-y-4">

                            {/* Row 1 */}
                            <div className="flex justify-between items-center p-3 rounded-lg border">
                                <span className="font-semibold text-lg">₹2000</span>
                                <span className="flex items-center gap-1 text-green-600 font-semibold">
                                    <CheckCircleIcon sx={{ fontSize: 20 }} /> Success
                                </span>
                                <span className="text-gray-700">12 Nov</span>
                            </div>

                            {/* Row 2 */}
                            <div className="flex justify-between items-center p-3 rounded-lg border">
                                <span className="font-semibold text-lg">₹1000</span>
                                <span className="flex items-center gap-1 text-green-600 font-semibold">
                                    <CheckCircleIcon sx={{ fontSize: 20 }} /> Success
                                </span>
                                <span className="text-gray-700">05 Nov</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div> 

            <Footer />
        </>
    );
}

export default Deposit;
