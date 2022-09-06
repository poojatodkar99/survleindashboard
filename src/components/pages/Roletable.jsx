import {
  IconButton,
  Typography,
  Box,
  alpha,
  Button,
  InputBase,
} from "@mui/material";
import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "../style/Role.css";
import styled from "@emotion/styled";
import { purple } from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Addrole from "./Role/Addrole";
import Modalpopup from "./Modalpopup";
import Editentry from "./Role/Editentry";

function createData(name, roles, status ) {
  return { name, roles, status };
}

const rows = [
  createData("Manager",['User module','Master module','Risk module','Transaction module'], ['enable','enable','enable','disable'], ),
  createData("Coder",['User module','Master module','Risk module','Transaction module'], ['enable','enable','enable','disable'], ),
  createData("HR", ['User module','Master module','Risk module','Transaction module'], ['enable','enable','enable','disable'],),
  createData("Sales", ['User module','Master module','Risk module','Transaction module'], ['enable','enable','enable','disable'], ),
];

const CustomizeButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: "rgb(47, 157, 204)",
  margin: "10px 0",
  borderRadius: "15px",

  "&:hover": {
    backgroundColor: alpha("rgb(47, 157, 204)", 0.25),
    color: "rgb(47, 157, 204)",
  },
}));
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha("#fff", 0.6),
  "&:hover": {
    backgroundColor: alpha("rgb(47, 157, 204)", 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  margin: "10px 0",
  // width: '300px',
  borderRadius: "20px",
  border: "1px solid rgb(47, 157, 204)",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    // width: 'auto',
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
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Roletable = () => {const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [show, setShow] = useState(<></>);




  return (
    <>
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
          marginTop: "60px",
        }}
      >
              <Modalpopup show={show} open={open} handleClose={handleClose} />

        <div className="main-container1">
          <div className="Role_title">
            <div className="title_child1">
              <IconButton aria-label="arrow">
                <ArrowBackIcon />
              </IconButton>
              <Typography fontSize={40} fontFamily={"fantasy"}>
                {" "}
                Roles
              </Typography>
            </div>
          </div>
          <div className="seachbtn-wrapper">
            <div>
              {" "}
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>{" "}
            </div>
            <div>
              <CustomizeButton endIcon={<ControlPointIcon />} 
                onClick={() => {
                  setShow(<Addrole handleClose={handleClose} />);
                  handleOpen();
                }}>
                Add Roles
              </CustomizeButton>{" "}
            </div>
          </div>
          <div style={{margin:"10px"}}>
          <TableContainer component={Paper} >
            <Table
              sx={{ minWidth: 650  }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Role Name</TableCell>
                  <TableCell align="center">Roles</TableCell>
                  <TableCell align="right">Status</TableCell>
                  <TableCell align="right"></TableCell>
                 
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.roles.map((role, index) => {
              return (
                <div key={index}>
                   {role}
                </div>
              );
            })}
            
            </TableCell>
                    <TableCell align="right">{row.status.map((status, index) => {
              return (
                <li key={index}>
                   {status}
                </li>
              );
            })}</TableCell>
                    {/* <TableCell align="right">{row.carbs}</TableCell> */}
                    <TableCell align="right"><CustomizeButton   onClick={() => {
                  setShow(<Editentry handleClose={handleClose} />);
                  handleOpen();}}>view</CustomizeButton></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Roletable;
