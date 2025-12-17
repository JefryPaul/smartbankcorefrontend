import { AppBar, Toolbar, IconButton, Button, Tooltip } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";


function Header() {
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: "#8B3A3A", // Primary Mahogany
                boxShadow: "0 3px 10px rgba(0,0,0,0.15)",
            }}
        >
            <Toolbar className="flex justify-between items-center">

                {/* Left Section */}
                <div className="flex items-center gap-3">
                    <IconButton size="large" sx={{ color: "#F8F3F0" }}>
                        <AccountBalanceIcon sx={{ fontSize: 32 }} />
                    </IconButton>

                    <Link
                        to="/"
                        className="text-[26px] font-bold"
                        style={{ color: "#F8F3F0", textDecoration: "none" }}
                    >
                        SmartBank Core
                    </Link>
                </div>

                {/* Center Navigation */}
                {/* <div className="hidden md:flex gap-6 text-lg">
                    <Link
                        to="/"
                        style={{ color: "#F8F3F0", textDecoration: "none" }}
                        className="hover:text-[#C7A58C] transition"
                    >
                        Home
                    </Link>

                    <Tooltip
                        title="SmartBank helps you manage accounts, transfer funds, apply for loans, and access secure digital banking."
                        arrow
                    >
                        <span
                            className="cursor-pointer hover:text-[#C7A58C] transition"
                            style={{ color: "#F8F3F0" }}
                        >
                            About
                        </span>
                    </Tooltip>

                    <span
                        className="cursor-pointer hover:text-[#C7A58C] transition"
                        style={{ color: "#F8F3F0" }}
                    >
                        Contact
                    </span>
                </div> */}

                {/* Right Section */}
                <div className="flex items-center gap-4">

                    {/* User Login */}
                    <Link to="/userlogin">
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "#B05846",
                                "&:hover": { backgroundColor: "#662828" },
                                borderRadius: "20px",
                                paddingX: 3,
                                textTransform: "none",
                                fontWeight: 600,
                                color: "#F8F3F0",
                            }}
                        >
                            Login
                        </Button>
                    </Link>

                    {/* Create Account */}
                    <Link to="/userregistration">
                        <Button
                            variant="outlined"
                            sx={{
                                borderColor: "#F8F3F0",
                                color: "#F8F3F0",
                                "&:hover": { borderColor: "#C7A58C", color: "#C7A58C" },
                                borderRadius: "20px",
                                paddingX: 3,
                                textTransform: "none",
                                fontWeight: 600,
                            }}
                        >
                            Create Account
                        </Button>
                    </Link>

                    {/* Admin Button */}
                    {/* <Link to="/admindashboard">
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "#662828", // Dark Primary
                                "&:hover": { backgroundColor: "#4A1E1E" },
                                borderRadius: "12px",
                                textTransform: "none",
                                color: "#F8F3F0",
                            }}
                        >
                            Admin
                        </Button>
                    </Link> */}

                    <Link to="/profile">
                        <AccountCircleIcon
                            sx={{ fontSize: 50, color: "#ffffffff" }}
                            className="cursor-pointer transition transform hover:scale-110 hover:opacity-90 active:scale-90 active:opacity-70"
                        />
                    </Link>



                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
