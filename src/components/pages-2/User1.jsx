import React from "react";
import Container from "@mui/material/Container";
import { Box, Button } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import "../style-2/user1.css";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ControlPointIcon from "@mui/icons-material/ControlPoint";


import KeyboardBackspaceSharpIcon from "@mui/icons-material/KeyboardBackspaceSharp";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import Directivemgnttable from "./Directivemgnttable";
import KeyboardArrowUpSharpIcon from "@mui/icons-material/KeyboardArrowUpSharp";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import { IconButton } from "@mui/material";
import Directivemgnt1table from "./Directivemgnt1table";
import CloseIcon from "@mui/icons-material/Close";
import Directivemngttable4 from "./Directivemngttable4";
import User1table from "../pages-2/User1table";

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
  color:'#fff',
  backgroundColor: "rgb(47, 157, 204)",
  margin: "10px 0",
  borderRadius: "15px",

  "&:hover": {
    backgroundColor: alpha("rgb(47, 157, 204)", 0.25),
    color: "rgb(47, 157, 204)",
  },
}));


function User1() {
  return (
    <div>
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
        <div className="managment">
          <h4>Management</h4>
        </div>
        <div className="UserTop">
          <h2>
            {" "}
            <KeyboardBackspaceSharpIcon />
            Users
          </h2>
          <span>
            <h4>00</h4>
            <h5>Directives</h5>
          </span>
        </div>
        <div className="managementbox11">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>{" "}
          {/* <span>
            Add Users{" "}
            <h4
              style={{
                border: "1px solid black",
                borderRadius: "20px",
                width: "25px",
              }}
            >
              <AddIcon />
            </h4>
          </span> */}
           <CustomizeButton endIcon={<ControlPointIcon />} style={{width:'200px',height:'40px',margin:'0px 15px'}}>
            Add Users 
              </CustomizeButton>{" "}
        </div>
        <div>
          <User1table />
        </div>
      </Box>
    </div>
  );
}

export default User1;
