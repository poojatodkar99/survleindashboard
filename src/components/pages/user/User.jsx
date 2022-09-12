import React from 'react';
import Container from "@mui/material/Container";
import { Box,Button,Grid, IconButton, Typography } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../user/User.css"

import KeyboardBackspaceSharpIcon from "@mui/icons-material/KeyboardBackspaceSharp";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { purple } from '@mui/material/colors';
import ControlPointIcon from '@mui/icons-material/ControlPoint';






function createData(
  username,
  Email,
  role,
  Status,
 
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



const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
      border: "1px solid black",
      borderRadius: "20px",
    },
  }));
  
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  const CustomizeButton = styled(Button)(({ theme }) => ({
    // color: theme.palette.getContrastText(purple[500]),
    color:"#fff",
    backgroundColor: "rgb(47, 157, 204)",
    // margin: "10px 0",
    borderRadius: "15px",
    fontSize:"12px",
  
    "&:hover": {
      backgroundColor: alpha("rgb(47, 157, 204)", 0.25),
      color: "rgb(47, 157, 204)",
    },
  }));
  

function User() {
  return (
    <Box
    component="main"
    sx={{
      backgroundColor: (theme) =>
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[900],
      flexGrow: 1,
      // height: "100vh",
      // overflow: "auto",
      marginTop: "65px",
    }}
  >        
      {/* <Container> */}
        <Grid
          sx={{
            // bgcolor: "#cfe8fc",
            height: "60vh",
            width: "100%",
            margin: "none",
          }}
        >
         
          <div style={{padding:"10px",backgroundColor:"#1976d288"}}>
            <Typography variant='h5' >Management</Typography>
          </div>
      
          <div style={{padding:"10px",backgroundColor:"#B24BF3", display:"flex",justifyContent:"space-between"}}>
            <div>
          <IconButton>
              <KeyboardBackspaceSharpIcon fontSize={'large'} />

              </IconButton>
            <Typography   sx={{fontFamily:"fantasy",fontSize:"40px"}}>
              {" "}
              
              Users
            </Typography>
            </div>
            <span style={{fontSize:"30px",fontFamily:"fantas"}}>
              <h4>00</h4>
              <h5>Directives</h5>
            </span>
            
          </div>
         
      

          <div style={{display:"flex",justifyContent:"space-between",margin:"40px",}}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>{" "}
           <div>
           <CustomizeButton  endIcon={<ControlPointIcon />}>Add Users </CustomizeButton>
           </div>
          </div>
         <div>
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
                <CustomizeButton  size='small'>View</CustomizeButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            {/* <User1table/> */}
         </div>
        </Grid>
      {/* </Container> */}
</Box>


);
}

export default User;
