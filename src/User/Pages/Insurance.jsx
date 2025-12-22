import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SecurityIcon from "@mui/icons-material/Security";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import HomeIcon from "@mui/icons-material/Home";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";


function Insurance() {
    return (
        <>
            <Header />

            <div
                className="min-h-screen px-6 py-10"
                style={{ backgroundColor: "#F8F3F0" }}
            >
                <div className="max-w-6xl mx-auto">

                    <h1
                        className="text-3xl font-bold mb-10 flex items-center gap-2"
                        style={{ color: "#2F1B19" }}
                    >
                        <SecurityIcon sx={{ color: "#8B3A3A", fontSize: 32 }} />
                        Insurance Plans
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        <div
                            className="rounded-2xl p-6 shadow-lg"
                            style={{ backgroundColor: "#E8DAD4" }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <HealthAndSafetyIcon sx={{ color: "#8B3A3A" }} />
                                <h2 className="text-xl font-semibold text-[#2F1B19]">
                                    Health Insurance
                                </h2>
                            </div>

                            <ul className="space-y-2 text-[#2F1B19] mb-5">
                                <li className="flex items-center gap-2">
                                    <CheckCircleIcon sx={{ color: "green", fontSize: 18 }} />
                                    Cashless hospitalization
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircleIcon sx={{ color: "green", fontSize: 18 }} />
                                    Annual health checkups
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircleIcon sx={{ color: "green", fontSize: 18 }} />
                                    Coverage up to ₹10 Lakhs
                                </li>
                            </ul>

                            <Link to="/insurance/apply/health">
                                <button className="w-full py-2 rounded-xl font-semibold text-white"
                                    style={{ backgroundColor: "#8B3A3A" }}>
                                    Apply Now
                                </button>
                            </Link>
                        </div>

                        <div
                            className="rounded-2xl p-6 shadow-lg"
                            style={{ backgroundColor: "#E8DAD4" }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <DirectionsCarIcon sx={{ color: "#8B3A3A" }} />
                                <h2 className="text-xl font-semibold text-[#2F1B19]">
                                    Vehicle Insurance
                                </h2>
                            </div>

                            <ul className="space-y-2 text-[#2F1B19] mb-5">
                                <li className="flex items-center gap-2">
                                    <CheckCircleIcon sx={{ color: "green", fontSize: 18 }} />
                                    Accident & theft coverage
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircleIcon sx={{ color: "green", fontSize: 18 }} />
                                    Third-party liability
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircleIcon sx={{ color: "green", fontSize: 18 }} />
                                    Instant policy issuance
                                </li>
                            </ul>

                            <Link to="/insurance/apply/vehicle">
                                <button className="w-full py-2 rounded-xl font-semibold text-white"
                                    style={{ backgroundColor: "#662828" }}>
                                    Apply Now
                                </button>
                            </Link>
                        </div>

                        <div
                            className="rounded-2xl p-6 shadow-lg"
                            style={{ backgroundColor: "#E8DAD4" }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <HomeIcon sx={{ color: "#8B3A3A" }} />
                                <h2 className="text-xl font-semibold text-[#2F1B19]">
                                    Home Insurance
                                </h2>
                            </div>

                            <ul className="space-y-2 text-[#2F1B19] mb-5">
                                <li className="flex items-center gap-2">
                                    <CheckCircleIcon sx={{ color: "green", fontSize: 18 }} />
                                    Fire & natural disaster cover
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircleIcon sx={{ color: "green", fontSize: 18 }} />
                                    Theft protection
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircleIcon sx={{ color: "green", fontSize: 18 }} />
                                    Affordable yearly premium
                                </li>
                            </ul>

                            <Link to="/insurance/apply/home">
                                <button className="w-full py-2 rounded-xl font-semibold text-white"
                                    style={{ backgroundColor: "#B05846" }}>
                                    Apply Now
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Insurance;
