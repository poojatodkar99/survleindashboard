import React from "react";
import Container from "@mui/material/Container";
import { Grid, Box } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import "../style-2/directivemgnt1.css";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import KeyboardBackspaceSharpIcon from "@mui/icons-material/KeyboardBackspaceSharp";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import Directivemgnttable from "../pages-2/Directivemgnttable";
import KeyboardArrowUpSharpIcon from "@mui/icons-material/KeyboardArrowUpSharp";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import { IconButton } from "@mui/material";
import Directivemgnt1table from "../pages-2/Directivemgnt1table";
import CloseIcon from "@mui/icons-material/Close";
import Directivemngttable4 from "../pages-2/Directivemngttable4";

function Directivemgnt1() {
  const [open, setOpen] = React.useState({
    first: false,
    sec: false,
    third: false,
  });

  return (
    <div>
      {/* <Container>
        <Grid
          sx={{
            bgcolor: "#cfe8fc",
            height: "65vh",
            width: "100%",
            margin: "none",
          }}
        >
          {" "} */}
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
        <div className="managment">
          <h4>Management</h4>
        </div>
        <div className="managementbox">
          <KeyboardBackspaceSharpIcon /> <span>Directive</span>
        </div>
        <div className="currentdirective">
          <div className="currentgraphicbtn">
            <h4>Current Directives for Myuser_21</h4>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen({ ...open, first: !open.first })}
            >
              {open.first ? (
                <KeyboardArrowUpSharpIcon />
              ) : (
                <KeyboardArrowDownSharpIcon />
              )}
            </IconButton>
          </div>
          {open.first ? (
            <div>
              <Directivemgnt1table />
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="currentdirective">
          <div className="currentgraphicbtn">
            <h4>Add Directives for Myuser_21</h4>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen({ ...open, sec: !open.sec })}
            >
              {open.sec ? (
                <KeyboardArrowUpSharpIcon />
              ) : (
                <KeyboardArrowDownSharpIcon />
              )}
            </IconButton>
          </div>
          {open.sec ? (
            <div className="adddirective">
              <div className="directivecontainer">
                <header>Add Directive</header>
                <h5>
                  <CloseIcon />
                </h5>
              </div>
              <div className="middirectivecont">
                <div>
                  {" "}
                  <span>User Name</span> <span>MyUser</span>
                </div>
                <div>
                  {" "}
                  <span>Role</span> <span>Manager</span>
                </div>
                <div>
                  {" "}
                  <span>Directive</span>{" "}
                  <span>Fetch Transaction Report by last 6 month</span>
                </div>
                <div>
                  {" "}
                  <span>Due By</span> <span>DD/MM/YY</span>
                </div>
                <div>
                  {" "}
                  <span>Code</span>
                  <span>Standred</span>
                </div>
              </div>
              <div className="lastdirective">
                <button>Update</button>
                <button>Delete</button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="currentdirective">
          <div className="currentgraphicbtn">
            <h4>Handled Directives by Myuser_21</h4>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen({ ...open, third: !open.third })}
            >
              {open.third ? (
                <KeyboardArrowUpSharpIcon />
              ) : (
                <KeyboardArrowDownSharpIcon />
              )}
            </IconButton>
          </div>
        
        {open.third ? (
          <div>
            <Directivemngttable4 />
          </div>
        ) : (
          ""
        )}
</div>
        {/* </Grid> */}
        {/* </Container> */}
      </Box>
    </div>
  );
}

export default Directivemgnt1;
