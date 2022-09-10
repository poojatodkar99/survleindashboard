import React from "react";
import Container from "@mui/material/Container";
import { Box, TableRow ,Typography} from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import "../style-2/user3.css";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

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

function User3() {
  const [open, setOpen] = React.useState({ sec: false });
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
    }}>

      {/* <Container>
        <Grid
          sx={{
            bgcolor: "#cfe8fc",
            height: "60vh",
            width: "100%",
            margin: "none",
          }}
        > */}
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
          <div className="UserTop">
            <h4>
              {" "}
              <KeyboardBackspaceSharpIcon />
              User
            </h4>
            <span>
              <h4>00</h4>
              <h5>Directives</h5>
            </span>
          </div>
          <div className="currentdirective">
            <div className="userirective">
              <div className="directivecontainer">
                <header><b>Entry Edit</b></header>
                <h5>
                  <CloseIcon />
                </h5>
              </div>
              <div className="leftdiv">
         
          <form className="Userform">
            <table cellSpacing={20}>
              <tr>
                <td>User Name</td>
                <td>My User</td>
              </tr>
              <tr>
                <td>Password</td>
                <td>
                  <input type="name" value="" />
                  <button style={{margin:'0px 10px'}}>Generate</button>
                </td>
              </tr>
              <tr>
                <td>Role</td>
                <td>
                  <select name="manager" id="manager">
                    <option value="manager">Manager</option>
                    <option value="Staff">Staff</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Status</td>
                <td>
                  <span className="status-enabled">
                    <input type="radio" value='enabled' name="status" />
                    <span>Enabled</span>
                  </span>
                  <span className="status-disabled">
                    <input type="radio" value="disabled" name="status" />
                    <span>Disabled</span>
                  </span>
                </td>
              </tr>
            </table>
            
          </form>
        </div>
              <div className="lastdirective">
                <button>Update</button>
                <button>Delete</button>
              </div>
            </div>
          </div>
        {/* </Grid> */}
      {/* </Container> */}
      </Box>
    </div>
  );
}

export default User3;
