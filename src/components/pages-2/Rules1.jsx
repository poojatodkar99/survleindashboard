import React from "react";

import { Button, Grid, Typography } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import "../style-2/rules1.css";
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
import Rules1table from "../pages-2/Rules1table";
import { Box } from "@mui/system";

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
  color: "#fff",
  backgroundColor: "rgb(47, 157, 204)",
  margin: "10px 0",
  borderRadius: "15px",

  "&:hover": {
    backgroundColor: alpha("rgb(47, 157, 204)", 0.25),
    color: "rgb(47, 157, 204)",
  },
}));

function Rules1() {
  return (
    <div>
      <Box
        component="main"
        sx={{
          flexGrow: 1,

          marginTop: "65px",
          padding:"0 3px"
        }}
      >
        <div className="UserTop" style={{ backgroundColor: "#FFB200",padding:"40px",height:"100px" }}>
          {" "}
          <div>
            <IconButton>
              <KeyboardBackspaceSharpIcon />
            </IconButton>
            <Typography sx={{ fontFamily: "fantasy", fontSize: "40px" }}>
              Rules
            </Typography>
          </div>
          <Typography sx={{ fontSize: "30px" }}>
            Directives
          </Typography>
        </div>
        <div className="rules">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search???"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>{" "}
          <CustomizeButton
            endIcon={<ControlPointIcon />}
            style={{ width: "250px", height: "40px", margin: "0px 15px" }}
          >
            Add Users
          </CustomizeButton>{" "}
        </div>
        <div>
          <Rules1table />
        </div>
      </Box>
    </div>
  );
}

export default Rules1;
