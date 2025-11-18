import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  Chip,
} from "@mui/material";

function ManageTransactions() {
  return (
    <div
      className="p-6"
      style={{ backgroundColor: "#F8F3F0", minHeight: "100vh" }}
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
        Manage Transactions
      </Typography>

      {/* Transactions Table (Static, UI Only) */}
      <Card
        sx={{
          borderRadius: 3,
          backgroundColor: "#E8DAD4",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        }}
      >
        <CardContent>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#8B3A3A" }}>
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
                    Type
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Status
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Date
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {/* Row 1 */}
                <TableRow>
                  <TableCell>John Mathew</TableCell>
                  <TableCell>john@gmail.com</TableCell>
                  <TableCell>₹ 1,500</TableCell>
                  <TableCell>
                    <Chip label="Credit" color="success" />
                  </TableCell>
                  <TableCell>
                    <Chip label="Success" color="success" />
                  </TableCell>
                  <TableCell>12 Nov</TableCell>
                </TableRow>

                {/* Row 2 */}
                <TableRow>
                  <TableCell>Akhil G</TableCell>
                  <TableCell>akhil@gmail.com</TableCell>
                  <TableCell>₹ 2,000</TableCell>
                  <TableCell>
                    <Chip label="Debit" color="error" />
                  </TableCell>
                  <TableCell>
                    <Chip label="Failed" color="error" />
                  </TableCell>
                  <TableCell>11 Nov</TableCell>
                </TableRow>

                {/* Row 3 */}
                <TableRow>
                  <TableCell>Sneha M</TableCell>
                  <TableCell>sneha@gmail.com</TableCell>
                  <TableCell>₹ 5,000</TableCell>
                  <TableCell>
                    <Chip label="Credit" color="success" />
                  </TableCell>
                  <TableCell>
                    <Chip label="Pending" color="warning" />
                  </TableCell>
                  <TableCell>10 Nov</TableCell>
                </TableRow>

                {/* Row 4 */}
                <TableRow>
                  <TableCell>Rahul S</TableCell>
                  <TableCell>rahul@gmail.com</TableCell>
                  <TableCell>₹ 800</TableCell>
                  <TableCell>
                    <Chip label="Debit" color="error" />
                  </TableCell>
                  <TableCell>
                    <Chip label="Success" color="success" />
                  </TableCell>
                  <TableCell>09 Nov</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </div>
  );
}

export default ManageTransactions;
