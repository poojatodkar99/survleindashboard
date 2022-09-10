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
  directives:  String,
  dueby:  String,
  handleon:Date,
  code:  String,
  
 
) {
  return { directives, dueby, code,  };
}

const rows = [
  createData("myuser",   '12/10/22','12/10/22','Standred' ),
  
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{ display: "flex" }}>
              Directives{" "}
              <div>
                <KeyboardArrowDownIcon />
              </div>{" "}
            </TableCell>
            <TableCell align="right">
              {" "}
              Due by <KeyboardArrowDownIcon />
            </TableCell>
            <TableCell align="right">
              Handle by <KeyboardArrowDownIcon />
            </TableCell>
           
            <TableCell align="right">
              Code <KeyboardArrowDownIcon />
            </TableCell>
           
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,i) => (
            <TableRow
              key={row.directives}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.directives}
              </TableCell>
              <TableCell align="right">{row.dueby}</TableCell>
             
              <TableCell align="right">
                {/* <span style={{border:'1px solid black',borderRadius:'10px',padding:'2px 5px',background:i && (row.code==="Imperactive"? 'red':row.code==='Standerd'&&'orange')}}>{row.code}</span>
                {!i && <span style={{border:'1px solid black',borderRadius:'10px',padding:'2px 5px'}}>{row.code}</span>} */}
                {row.dueby}
              </TableCell>
             
              
               {/* <TableCell align="right">{row.Due}</TableCell> */}
              {/* <TableCell align="right">{row.risk}</TableCell>  */}
              <TableCell align="right">
              
                <button
                  style={{
                    borderRadius: "10px",
                    width: "60px",
                    height: "25px",
                    background:'orange'
                  }}
                >
                  Standred
                </button>
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
