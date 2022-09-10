import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function createData(
  username: string,
  Email: string,
  role: string,
  Status: Date,
 
) {
  return { username, Email, role, Status, };
}

const rows = [
  createData("myuser", 'myuser@123', "QA", 'Enabled', ),
  createData("myuser", 'myuser@321', "Developer", 'Enabled', ),
  createData("myuser", 'myuser@987', "UI/UX", 'Enabled',),
  createData("myuser", 'myuser@123', "QA", 'Enabled', ),
  createData("myuser", 'myuser@321', "Developer", 'Enabled', ),
  createData("myuser", 'myuser@987', "UI/UX", 'Enabled',),
  createData("myuser", 'myuser@123', "QA", 'Enabled', ),
  createData("myuser", 'myuser@321', "Developer", 'Enabled', ),
  createData("myuser", 'myuser@987', "UI/UX", 'Enabled',),
  createData("myuser", 'myuser@123', "QA", 'Enabled', ),
  createData("myuser", 'myuser@321', "Developer", 'Enabled', ),
  
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{ display: "flex" }}>
              UserName{" "}
              <div>
                <KeyboardArrowDownIcon />
              </div>{" "}
            </TableCell>
            <TableCell align="right">
              {" "}
              Email <KeyboardArrowDownIcon />
            </TableCell>
            <TableCell align="right">
              Role <KeyboardArrowDownIcon />
            </TableCell>
            <TableCell align="right">
              Status
              <KeyboardArrowDownIcon />
            </TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.username}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.username}
              </TableCell>
              <TableCell align="right">{row.Email}</TableCell>
              <TableCell align="right">{row.role}</TableCell>
              <TableCell align="right"><span style={{color:row.Status==="Enabled"? 'green':" "}}>{row.Status}</span>
              
              </TableCell>
              <TableCell align="right">{row.risk}</TableCell>
              <TableCell align="right">
                <button
                  style={{
                    borderRadius: "10px",
                    width: "60px",
                    height: "25px",
                  }}
                >
                  View
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
