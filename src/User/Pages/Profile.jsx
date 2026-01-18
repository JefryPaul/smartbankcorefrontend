import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  Divider,
  Chip,
  Grid,
  Stack,
} from "@mui/material";

import VerifiedIcon from "@mui/icons-material/Verified";
import EditIcon from "@mui/icons-material/Edit";
import LockIcon from "@mui/icons-material/Lock";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import PaymentsIcon from "@mui/icons-material/Payments";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import SecurityIcon from "@mui/icons-material/Security";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

function Profile() {
  return (
    <div className="min-h-screen bg-[#F8F3F0]">

      {/* ================= COVER ================= */}
      <div className="h-52 bg-[#662828]"></div>

      {/* ================= BASIC IDENTITY ================= */}
      <div className="relative px-6 md:px-20">
        <Card
          className="absolute -top-24 flex items-center gap-6 p-6 w-full md:w-[650px]"
          sx={{ borderRadius: 4, boxShadow: 6 }}
        >
          <Avatar
            src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
            sx={{ width: 110, height: 110 }}
          />

          <div className="flex-1">
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="h5" fontWeight="bold">
                Jefry Paul
              </Typography>
              <VerifiedIcon className="text-blue-500" />
            </Stack>

            <Typography color="text.secondary">
              Customer ID: CUST10234
            </Typography>

            <Stack direction="row" spacing={1} mt={1}>
              <Chip label="Savings Account" />
              <Chip label="Active" color="success" />
              <Chip label="KYC Verified" color="primary" />
            </Stack>
          </div>
        </Card>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="pt-40 px-6 md:px-20 space-y-6">

        {/* ================= ACCOUNT SUMMARY ================= */}
        <Card sx={{ borderRadius: 4 }}>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h6" fontWeight="bold">
              Account Summary
            </Typography>

            <Divider className="my-3" />

            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} md={4}>
                <Typography color="text.secondary">Account Number</Typography>
                <Typography fontWeight="bold">**** **** 2345</Typography>
              </Grid>

              <Grid item xs={12} md={4}>
                <Typography color="text.secondary">Available Balance</Typography>
                <Typography fontWeight="bold" color="#8B3A3A">
                  ₹ 24,500
                </Typography>
              </Grid>

              <Grid item xs={12} md={4}>
                <Typography color="text.secondary">Branch / IFSC</Typography>
                <Typography fontWeight="bold">FISAT001</Typography>
              </Grid>

              <Grid item xs={12} md={4}>
                <Typography color="text.secondary">Account Opened</Typography>
                <Typography>12 Jan 2023</Typography>
              </Grid>

              <Grid item xs={12} md={4}>
                <Typography color="text.secondary">Last Login</Typography>
                <Typography>26 Dec 2025, 10:45 AM</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>


        {/* ================= TRANSACTION CONTROLS ================= */}
        <Card sx={{ borderRadius: 4 }}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold">Quick Transactions</Typography>
            <Divider className="my-3" />

            <Grid container spacing={3}>
              <Grid item xs={12} md={3}><ActionCard icon={<PaymentsIcon />} label="Deposit" /></Grid>
              <Grid item xs={12} md={3}><ActionCard icon={<LocalAtmIcon />} label="Withdraw" /></Grid>
              <Grid item xs={12} md={3}><ActionCard icon={<SwapHorizIcon />} label="Transfer" /></Grid>
              <Grid item xs={12} md={3}>
                <Typography color="text.secondary">Daily Limit</Typography>
                <Typography fontWeight="bold">₹ 50,000</Typography>
                <Typography color="text.secondary">Remaining: ₹ 32,000</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* ================= LOAN SECTION ================= */}
        <Card sx={{ borderRadius: 4 }}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold">Loan Details</Typography>
            <Divider className="my-3" />

            <Typography>Loan Type: Personal Loan</Typography>
            <Typography>Loan Amount: ₹ 2,00,000</Typography>
            <Typography>EMI: ₹ 5,200 / month</Typography>
            <Typography>Next Due Date: 05 Jan 2026</Typography>
            <Chip label="Approved" color="success" className="mt-2" />
          </CardContent>
        </Card>

        {/* ================= INSURANCE ================= */}
        <Card sx={{ borderRadius: 4 }}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold">Insurance</Typography>
            <Divider className="my-3" />

            <Stack direction="row" spacing={2} alignItems="center">
              <HealthAndSafetyIcon sx={{ fontSize: 40, color: "#8B3A3A" }} />
              <div>
                <Typography fontWeight="bold">Health Insurance</Typography>
                <Typography>Coverage: ₹ 5,00,000</Typography>
                <Typography>Expiry: Dec 2026</Typography>
              </div>
            </Stack>
          </CardContent>
        </Card>

        {/* ================= SECURITY ================= */}
        <Card sx={{ borderRadius: 4 }}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold">Security & Privacy</Typography>
            <Divider className="my-3" />

            <Stack spacing={2}>
              <Button startIcon={<LockIcon />} variant="contained"
                sx={{ backgroundColor: "#8B3A3A", "&:hover": { backgroundColor: "#662828" } }}>
                Change Password
              </Button>

              <Button startIcon={<SecurityIcon />} variant="outlined">
                Change Transaction PIN
              </Button>
            </Stack>
          </CardContent>
        </Card>

        {/* ================= KYC ================= */}
        <Card sx={{ borderRadius: 4 }}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold">KYC & Verification</Typography>
            <Divider className="my-3" />

            <Typography>Status: Verified</Typography>
            <Typography>Address: *****, Kerala</Typography>

            <Button variant="outlined" className="mt-3">
              Update KYC
            </Button>
          </CardContent>
        </Card>

        {/* ================= PREFERENCES ================= */}
        <Card sx={{ borderRadius: 4 }}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold">Preferences</Typography>
            <Divider className="my-3" />

            <Typography>Language: English</Typography>
            <Typography>Notifications: Enabled</Typography>
            <Typography>Theme: Light</Typography>
          </CardContent>
        </Card>

        {/* ================= SUPPORT ================= */}
        <Card sx={{ borderRadius: 4 }}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold">Support</Typography>
            <Divider className="my-3" />

            <Button startIcon={<SupportAgentIcon />} variant="outlined">
              Contact Support
            </Button>
          </CardContent>
        </Card>

        {/* ================= LOGOUT ================= */}
        <Card sx={{ borderRadius: 4 }}>
          <CardContent className="flex justify-center">
            <Button
              startIcon={<LogoutIcon />}
              color="error"
              variant="contained"
            >
              Logout
            </Button>
          </CardContent>
        </Card>

      </div>

      {/* ================= ACTION ================= */}
      <div className="flex justify-center mt-10 pb-10">
        <Button startIcon={<EditIcon />} variant="outlined">
          Edit Profile
        </Button>
      </div>
    </div>
  );
}

/* ---------- Reusable Action Card ---------- */
const ActionCard = ({ icon, label }) => (
  <div className="p-4 rounded-xl bg-[#E8DAD4] flex items-center gap-3 cursor-pointer hover:scale-105 transition">
    {icon}
    <Typography fontWeight="bold">{label}</Typography>
  </div>
);

export default Profile;
