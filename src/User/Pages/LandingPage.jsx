import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import { ArrowForward, Security, Payments, AccountBalance } from '@mui/icons-material' 
import { Button } from "@mui/material";


function LandingPage() {
    return (
        <>
            <Header />

            <div className="h-[520px] flex items-center justify-center bg-cover bg-center relative"
                style={{
                    backgroundImage:
                        'url("https://img.freepik.com/premium-vector/banking-service-background-bank-building-icon-made-with-currency-symbols-dollar-euro-yen-pound-icons_127544-803.jpg?semt=ais_incoming&w=740&q=80")',
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 text-center text-white px-5">
                    <h1 className="text-5xl font-bold mb-4" style={{ color: '#F8F3F0' }}>
                        Welcome to SmartBank Core
                    </h1>
                    <p className="text-xl mb-8" style={{ color: '#E8DAD4' }}>
                        Secure. Fast. Modern Banking at Your Fingertips.
                    </p>

                    <Link to="/userregistration">
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "#8B3A3A",
                                "&:hover": { backgroundColor: "#662828" },
                                borderRadius: "30px",
                                px: 4,
                                py: 1.5,
                                textTransform: "none",
                                fontWeight: 600,
                                color: "#F8F3F0",
                                fontSize: "18px",
                            }}
                        >
                            Get Started <ArrowForward className="ml-2" />
                        </Button>
                    </Link>



                </div>
            </div>

            <section className="py-16 bg-[#F8F3F0] text-center">
                <h2 className="text-3xl font-semibold mb-3" style={{ color: '#2F1B19' }}>
                    Why Choose SmartBank?
                </h2>
                <p className="text-lg mb-10" style={{ color: '#2F1B19' }}>
                    A modern banking platform built for security, speed, and reliability.
                </p>

                <div className="grid md:grid-cols-3 gap-8 px-10 md:px-32">
                    <div className="shadow-lg p-8 rounded-xl bg-white hover:scale-105 transition">
                        <Security sx={{ fontSize: 60, color: '#8B3A3A' }} />
                        <h3 className="text-xl font-semibold mt-4">Advanced Security</h3>
                        <p className="mt-2 text-gray-600">
                            Your data is protected using bank-grade encryption technologies.
                        </p>
                    </div>

                    <div className="shadow-lg p-8 rounded-xl bg-white hover:scale-105 transition">
                        <Payments sx={{ fontSize: 60, color: '#8B3A3A' }} />
                        <h3 className="text-xl font-semibold mt-4">Instant Payments</h3>
                        <p className="mt-2 text-gray-600">
                            Deposit, withdraw, and transfer funds instantly anytime.
                        </p>
                    </div>

                    <div className="shadow-lg p-8 rounded-xl bg-white hover:scale-105 transition">
                        <AccountBalance sx={{ fontSize: 60, color: '#8B3A3A' }} />
                        <h3 className="text-xl font-semibold mt-4">Easy Account Management</h3>
                        <p className="mt-2 text-gray-600">
                            Track your balance, transactions, and loans with ease.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-[#E8DAD4]">
                <div className="md:grid grid-cols-2 gap-10 px-10 md:px-32 items-center">
                    <div>
                        <h3 className="text-2xl font-semibold mb-3" style={{ color: '#2F1B19' }}>
                            Banking Made Smarter
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            SmartBank brings premium digital banking with a focus on simplicity,
                            speed, and security. Manage accounts, loans, transfers, and much more
                            with just a few clicks.
                        </p>
                        <p className="text-gray-700 mt-3 leading-relaxed">
                            With our smart dashboard and advanced fraud detection, your money is
                            always protected.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg"
                            alt="Bank"
                            className="rounded-xl shadow-xl w-[420px]"
                        />
                    </div>
                </div>
            </section>

            <section className="py-16 text-center bg-[#662828] text-white">
                <h2 className="text-3xl font-semibold mb-3">Start Your Smart Banking Journey</h2>
                <p className="mb-6 text-lg">Join thousands of users who trust SmartBank daily.</p>

                <Link to="/userregistration">
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#C7A58C",
                            "&:hover": { backgroundColor: "#B89A80" },
                            borderRadius: "30px",
                            px: 5,
                            py: 1.5,
                            textTransform: "none",
                            fontWeight: 600,
                            color: "#2F1B19",
                            fontSize: "18px",
                        }}
                    >
                        Create an Account
                    </Button>
                </Link>


            </section>

            <Footer />
        </>
    )
}

export default LandingPage
