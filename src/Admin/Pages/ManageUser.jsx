import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Button,
  Chip,
} from "@mui/material";

function ManageUser() {
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
        Manage Users
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
                    Name
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Email
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Phone
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Account No
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
                <TableRow>
                  <TableCell>John Mathew</TableCell>
                  <TableCell>john@gmail.com</TableCell>
                  <TableCell>9876543210</TableCell>
                  <TableCell>SB-123456</TableCell>
                  <TableCell>
                    <Chip label="Active" color="success" />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      sx={{
                        background: "#8B3A3A",
                        "&:hover": { background: "#662828" },
                        mr: 1,
                      }}
                    >
                      Edit
                    </Button>

                    <Button variant="contained" color="error">
                      Block
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Akhil G</TableCell>
                  <TableCell>akhil@gmail.com</TableCell>
                  <TableCell>9123456789</TableCell>
                  <TableCell>SB-987654</TableCell>
                  <TableCell>
                    <Chip label="Blocked" color="error" />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      sx={{
                        background: "#8B3A3A",
                        "&:hover": { background: "#662828" },
                        mr: 1,
                      }}
                    >
                      Edit
                    </Button>

                    <Button variant="contained" color="success">
                      Unblock
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Sneha M</TableCell>
                  <TableCell>sneha@gmail.com</TableCell>
                  <TableCell>9988776655</TableCell>
                  <TableCell>SB-564738</TableCell>
                  <TableCell>
                    <Chip label="Active" color="success" />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      sx={{
                        background: "#8B3A3A",
                        "&:hover": { background: "#662828" },
                        mr: 1,
                      }}
                    >
                      Edit
                    </Button>

                    <Button variant="contained" color="error">
                      Block
                    </Button>
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

export default ManageUser;
