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
  RuleName: string,
  RiskScore: string,
  Risk: string,
  Status: string,
 
) {
  return { RuleName, RiskScore, Risk, Status, };
}

const rows = [
  createData("Amount Resistriction", '10', "medium", 'Enabled', ),
  createData("Amount Resistriction", '10', "medium", 'Enabled', ),
  createData("Amount Resistriction", '10', "medium", 'Enabled',),
  createData("Amount Resistriction", '10', "medium", 'Enabled', ),
  createData("Amount Resistriction", '10', "medium", 'Enabled', ),
  createData("Amount Resistriction", '10', "mediun", 'Enabled',),
  createData("Amount Resistriction", '10', "medium", 'Enabled', ),
  createData("Amount Resistriction", '10', "medium", 'Enabled', ),
  createData("Amount Resistriction", '10', "medium", 'Enabled',),
  createData("Amount Resistriction", '10', "medium", 'Enabled', ),
  createData("Amount Resistriction", '10', "medium", 'Enabled', ),
  
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{ display: "flex" }}>
              Rule Name{" "}
              <div>
                <KeyboardArrowDownIcon />
              </div>{" "}
            </TableCell>
            <TableCell align="right">
              {" "}
              Risk Score <KeyboardArrowDownIcon />
            </TableCell>
            <TableCell align="right">
              Risk <KeyboardArrowDownIcon />
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
              key={row.RuleName}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.RuleName}
              </TableCell>
              <TableCell align="right">{row.RiskScore}</TableCell>
              <TableCell align="right">{row.Risk}</TableCell>
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
