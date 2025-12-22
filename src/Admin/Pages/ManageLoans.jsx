import React, { useEffect, useState } from "react";
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
import { getAllLoansAPI, updateLoanStatusAPI } from "../../services/allAPI";

function ManageLoans() {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLoans = async () => {
    try {
      setLoading(true);
      const res = await getAllLoansAPI();
      if (res.status === 200) {
        setLoans(res.data);
      }
    } catch (err) {
      console.error("Failed to fetch loans:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLoans();
  }, []);

  const handleLoanStatus = async (loanId, status) => {
    try {
      const res = await updateLoanStatusAPI(loanId, status);
      if (res.status === 200) {
        fetchLoans();
      }
    } catch (err) {
      console.error("Failed to update loan status:", err);
    }
  };

  return (
    <div
      className="p-6 font-sans"
      style={{ background: "#F8F3F0", minHeight: "100vh" }}
    >
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
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center">
                      Loading...
                    </TableCell>
                  </TableRow>
                ) : loans.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center">
                      No loan requests found
                    </TableCell>
                  </TableRow>
                ) : (
                  loans.map((loan) => (
                    <TableRow key={loan._id}>
                      <TableCell>{loan.userId?.username}</TableCell>
                      <TableCell>{loan.userId?.email}</TableCell>
                      <TableCell>₹ {loan.amount}</TableCell>
                      <TableCell>{loan.tenure} months</TableCell>
                      <TableCell>
                        <Chip
                          label={loan.status.charAt(0).toUpperCase() + loan.status.slice(1)}
                          color={
                            loan.status === "pending"
                              ? "warning"
                              : loan.status === "approved"
                                ? "success"
                                : "error"
                          }
                        />
                      </TableCell>
                      <TableCell>
                        {loan.status === "pending" ? (
                          <>
                            <Button
                              variant="contained"
                              sx={{
                                mr: 1,
                                background: "#8B3A3A",
                                "&:hover": { background: "#662828" },
                              }}
                              onClick={() => handleLoanStatus(loan._id, "approved")}
                            >
                              Approve
                            </Button>

                            <Button
                              variant="contained"
                              color="error"
                              onClick={() => handleLoanStatus(loan._id, "rejected")}
                            >
                              Reject
                            </Button>
                          </>
                        ) : (
                          <Typography
                            variant="body2"
                            sx={{ fontWeight: "bold", color: "#2F1B19" }}
                          >
                            Processed
                          </Typography>
                        )}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </div>
  );
}

export default ManageLoans;
