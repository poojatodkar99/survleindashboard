import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function createData(
  transid: number,
  custid: number,
  custname: string,
  riskscore: string,
  risk: number,
  result:String,
) {
  return { transid, custid, custname, riskscore, risk,result };
}

const rows = [
  createData('32321', 10, 'Dipali', 'low', 'consult'),
  createData('32323', 13, 'Monika', 'medium', 'consult'),
  createData('32325', 23, 'Pooja', 'low', 'consult'),
 
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{display:"flex"}}>Transaction ID <div><KeyboardArrowDownIcon/></div> </TableCell>
            <TableCell align="right"> Customer ID <KeyboardArrowDownIcon/></TableCell>
            <TableCell align="right">Customer Name <KeyboardArrowDownIcon/></TableCell>
            <TableCell align="right">Risk Score<KeyboardArrowDownIcon/></TableCell>
            <TableCell align="right">Risk</TableCell>
            <TableCell align="right">Result <KeyboardArrowDownIcon/></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.transid}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.transid}
              </TableCell>
              <TableCell align="right">{row.custid}</TableCell>
              <TableCell align="right">{row.custname}</TableCell>
              <TableCell align="right">{row.riskscore}</TableCell>
              <TableCell align="right">{row.risk}</TableCell>
              <TableCell align="right"><button style={{borderRadius:"10px",width:'60px',height:'25px'}}>View</button></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
