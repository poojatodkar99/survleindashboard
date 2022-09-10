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
  Due: Date,
 
) {
  return { username, Email, role, Due, };
}

const rows = [
  createData("myuser", 'myuser@123', "QA", '12/10/22', ),
  createData("myuser", 'myuser@321', "Developer", '01/12/22', ),
  createData("myuser", 'myuser@987', "UI/UX", '10/12/22',),
  createData("myuser", 'myuser@123', "QA", '12/10/22', ),
  createData("myuser", 'myuser@321', "Developer", '01/12/22', ),
  createData("myuser", 'myuser@987', "UI/UX", '10/12/22',),
  createData("myuser", 'myuser@123', "QA", '12/10/22', ),
  createData("myuser", 'myuser@321', "Developer", '01/12/22', ),
  createData("myuser", 'myuser@987', "UI/UX", '10/12/22',),
  createData("myuser", 'myuser@123', "QA", '12/10/22', ),
  createData("myuser", 'myuser@321', "Developer", '01/12/22', ),
  
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
              Due
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
              <TableCell align="right">{row.Due}</TableCell>
              <TableCell align="right">{row.risk}</TableCell>
              <TableCell align="right">
                <button
                  style={{
                    borderRadius: "10px",
                    width: "60px",
                    height: "25px",
                  }}
                >
                  Update
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
