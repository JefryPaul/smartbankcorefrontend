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
                backgroundColor: "#8B3A3A",
                boxShadow: "0 3px 10px rgba(0,0,0,0.15)",
            }}
        >
            <Toolbar className="flex justify-between items-center">

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

                

                <div className="flex items-center gap-4">

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
