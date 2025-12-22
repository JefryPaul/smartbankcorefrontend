import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function ApplyInsurance() {
    const { type } = useParams();

    const [formData, setFormData] = useState({
        nominee: "",
        coverageAmount: "",
        duration: ""
    });

    const insuranceTitle = {
        health: "Health Insurance",
        vehicle: "Vehicle Insurance",
        home: "Home Insurance"
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <Header />

            <div
                className="min-h-screen px-6 py-10"
                style={{ backgroundColor: "#F8F3F0" }}
            >
                <div className="max-w-3xl mx-auto">

                    <h1 className="text-3xl font-bold mb-8 text-[#2F1B19]">
                        Apply for {insuranceTitle[type]}
                    </h1>

                    <div
                        className="p-6 rounded-2xl shadow-lg"
                        style={{ backgroundColor: "#E8DAD4" }}
                    >
                        <div className="mb-4">
                            <label className="font-semibold block mb-2">
                                Nominee Name
                            </label>
                            <input
                                type="text"
                                name="nominee"
                                value={formData.nominee}
                                onChange={handleChange}
                                className="w-full p-3 rounded-xl outline-none"
                                placeholder="Enter nominee name"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="font-semibold block mb-2">
                                Coverage Amount (₹)
                            </label>
                            <input
                                type="number"
                                name="coverageAmount"
                                value={formData.coverageAmount}
                                onChange={handleChange}
                                className="w-full p-3 rounded-xl outline-none"
                                placeholder="Eg: 500000"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="font-semibold block mb-2">
                                Duration (Years)
                            </label>
                            <select
                                name="duration"
                                value={formData.duration}
                                onChange={handleChange}
                                className="w-full p-3 rounded-xl outline-none"
                            >
                                <option value="">Select Duration</option>
                                <option value="1">1 Year</option>
                                <option value="3">3 Years</option>
                                <option value="5">5 Years</option>
                            </select>
                        </div>

                        <button
                            className="w-full py-3 rounded-xl font-semibold text-white"
                            style={{ backgroundColor: "#8B3A3A" }}
                        >
                            Submit Application
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default ApplyInsurance;
