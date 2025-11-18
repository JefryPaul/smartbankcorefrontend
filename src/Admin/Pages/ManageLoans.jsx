import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  Chip,
} from "@mui/material";

function ManageLoans() {
  return (
    <div
      className="p-6 font-sans"
      style={{ background: "#F8F3F0", minHeight: "100vh" }}
    >
      {/* Page Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#662828",
          mb: 3,
        }}
      >
        Manage Loan Requests
      </Typography>

      {/* Loan Table Card */}
      <Card
        sx={{
          borderRadius: 3,
          background: "#E8DAD4",
          boxShadow: "0 4px 20px rgba(0,0,0,0.09)",
        }}
      >
        <CardContent>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ background: "#8B3A3A" }}>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    User
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Email
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Amount
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Tenure
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Status
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {/* -------------------- Row 1 -------------------- */}
                <TableRow>
                  <TableCell>John Mathew</TableCell>
                  <TableCell>john@gmail.com</TableCell>
                  <TableCell>₹ 50,000</TableCell>
                  <TableCell>24 months</TableCell>
                  <TableCell>
                    <Chip label="Pending" color="warning" />
                  </TableCell>

                  <TableCell>
                    <Button
                      variant="contained"
                      sx={{
                        mr: 1,
                        background: "#8B3A3A",
                        "&:hover": { background: "#662828" },
                      }}
                    >
                      Approve
                    </Button>

                    <Button variant="contained" color="error">
                      Reject
                    </Button>
                  </TableCell>
                </TableRow>

                {/* -------------------- Row 2 -------------------- */}
                <TableRow>
                  <TableCell>Akhil G</TableCell>
                  <TableCell>akhil@gmail.com</TableCell>
                  <TableCell>₹ 100,000</TableCell>
                  <TableCell>36 months</TableCell>
                  <TableCell>
                    <Chip label="Approved" color="success" />
                  </TableCell>

                  <TableCell>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: "bold", color: "#2F1B19" }}
                    >
                      ✔ Processed
                    </Typography>
                  </TableCell>
                </TableRow>

                {/* -------------------- Row 3 -------------------- */}
                <TableRow>
                  <TableCell>Sneha M</TableCell>
                  <TableCell>sneha@gmail.com</TableCell>
                  <TableCell>₹ 75,000</TableCell>
                  <TableCell>12 months</TableCell>
                  <TableCell>
                    <Chip label="Rejected" color="error" />
                  </TableCell>

                  <TableCell>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: "bold", color: "#2F1B19" }}
                    >
                      ✔ Processed
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </div>
  );
}

export default ManageLoans;
