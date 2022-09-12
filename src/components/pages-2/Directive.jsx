import React from "react";
import Container from "@mui/material/Container";
import { Grid,Box } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import "../style-2/directive.css";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import KeyboardBackspaceSharpIcon from "@mui/icons-material/KeyboardBackspaceSharp";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";

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

function Directive() {
  return (
    <div>
      {/* <Container> */}
        {/* <Grid */}
          {/* sx={{
            bgcolor: "#cfe8fc",
            height: "65vh",
            width: "100%",
            margin: "none",
          }}
        >
          {" "} */}
          {/* <div className="topnav">
            <span>
              <CalendarTodayOutlinedIcon />
            </span>
            <span>
              <NotificationsActiveOutlinedIcon />
            </span>
            <span>
              <ListAltOutlinedIcon />
            </span>
            <span>
              <SettingsOutlinedIcon />
            </span>
            <span>
              <AccountCircleIcon />
            </span>
          </div> */}
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
    }}>

          <div className="managment">
            <h4>Management</h4>
          </div>
          <div className="managementbox">
            <KeyboardBackspaceSharpIcon /> <span>Directive</span>
          </div>
          <div className="managementbox1">
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>{" "}
            <span>Directive Management</span>
          </div>
          <div className="managment1">
            <h5>Pending Directive</h5>
          </div>
          <div className="managementbox1">
            <ul class="a">
              <li>Check Financial year 2021 sales report</li>
              <li>Create new Rules</li>
              <li>Update Worksheet of Rajesh</li>
              <li>Add Names to watchlist</li>
            </ul>
          </div>
          <div className="managment2">
            <h5>Alert Directive</h5>
          </div>
          <div className="managementbox2">
            <ul class="a">
              <li>Check Financial year 2021 sales report</li>
              <li>Create new Rules</li>
            </ul>
          </div>
          <div className="managment3">
            <h5>Resolve Directives</h5>
          </div>
          <div className="managementbox3">
            <ul class="a">
              <li> Update Worksheet</li>
              <li> Add Previleges to Roles</li>
            </ul>
          </div>
          </Box>
        {/* </Grid> */}
      {/* </Container> */}
    </div>
    
  );
}

export default Directive;
