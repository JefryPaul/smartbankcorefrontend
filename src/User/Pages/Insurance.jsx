import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SecurityIcon from "@mui/icons-material/Security";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import HomeIcon from "@mui/icons-material/Home";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";


function Insurance() {
    return (
        <>
            <Header />

            <div
                className="min-h-screen px-6 py-12"
                style={{ backgroundColor: "#F8F3F0" }}
            >
                <div className="max-w-7xl mx-auto">

                    {/* Page Title */}
                    <div className="mb-12">
                        <h1
                            className="text-3xl font-bold flex items-center gap-3"
                            style={{ color: "#2F1B19" }}
                        >
                            <SecurityIcon sx={{ color: "#8B3A3A", fontSize: 36 }} />
                            Insurance Plans
                        </h1>
                        <div className="h-1 w-20 mt-3 rounded-full"
                            style={{ backgroundColor: "#8B3A3A" }}
                        />
                    </div>

                    {/* Insurance Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Health Insurance */}
                        <div
                            className="rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col justify-between"
                            style={{ backgroundColor: "#E8DAD4" }}
                        >
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-full bg-white shadow">
                                        <HealthAndSafetyIcon sx={{ color: "#8B3A3A" }} />
                                    </div>
                                    <h2 className="text-xl font-semibold text-[#2F1B19]">
                                        Health Insurance
                                    </h2>
                                </div>

                                <ul className="space-y-3 text-[#2F1B19] mb-6">
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
                            </div>

                            <Button>
                                <Link to="/healthinsurance" className="w-full py-2.5 rounded-xl font-semibold text-white tracking-wide hover:opacity-90"
                                    style={{ backgroundColor: "#662828" }}>
                                    Apply Now
                                </Link>
                            </Button>
                        </div>

                        {/* Vehicle Insurance */}
                        <div
                            className="rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col justify-between"
                            style={{ backgroundColor: "#E8DAD4" }}
                        >
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-full bg-white shadow">
                                        <DirectionsCarIcon sx={{ color: "#8B3A3A" }} />
                                    </div>
                                    <h2 className="text-xl font-semibold text-[#2F1B19]">
                                        Vehicle Insurance
                                    </h2>
                                </div>

                                <ul className="space-y-3 text-[#2F1B19] mb-6">
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
                            </div>

                            <Button>
                                <Link to="/vehicleinsurance" className="w-full py-2.5 rounded-xl font-semibold text-white tracking-wide hover:opacity-90"
                                    style={{ backgroundColor: "#662828" }}>
                                    Apply Now
                                </Link>
                            </Button>
                        </div>

                        {/* Home Insurance */}
                        <div
                            className="rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col justify-between"
                            style={{ backgroundColor: "#E8DAD4" }}
                        >
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-full bg-white shadow">
                                        <HomeIcon sx={{ color: "#8B3A3A" }} />
                                    </div>
                                    <h2 className="text-xl font-semibold text-[#2F1B19]">
                                        Home Insurance
                                    </h2>
                                </div>

                                <ul className="space-y-3 text-[#2F1B19] mb-6">
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
                            </div>

                            <Button>
                                <Link to="/homeinsurance" className="w-full py-2.5 rounded-xl font-semibold text-white tracking-wide hover:opacity-90"
                                    style={{ backgroundColor: "#662828" }}>
                                    Apply Now
                                </Link>
                            </Button>

                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    );

}

export default Insurance;
