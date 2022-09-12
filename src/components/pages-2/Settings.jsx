import React from "react";
import "../style-2/settings.css";

import { Box, IconButton } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowUpSharpIcon from "@mui/icons-material/KeyboardArrowUpSharp";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import ReactApexChart from "react-apexcharts";

import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import DenseTable from "./DenceTable";

function Settings() {
  const [open, setOpen] = React.useState({
    first: false,
    sec: false,
    thi: false,
    four: false,
  });

  return (
    <>
      {/* <Container>
        <Grid
          d
          sx={{
            // bgcolor: "#cfe8fc",
            // height: "96vh",
            width: "100%",
            margin: "none",
          }} */}
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
        {" "}
        {/* <div className="voilationsnav ">
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
          </div>  */}
        <div className="voilationsTop">
          <h4>Settings</h4>
        </div>
        <div className="settingview">
          <div className="settingsform">
            <h4>Messaging Configuration</h4>
            <div>
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
          </div>
          <div className="hiddbtn">
            {open.first ? (
              <div className="container">
                <div>
                  <label>SMTP Provider</label>
                  <span>
                    <input type="text" />
                  </span>
                </div>
                <div>
                  <label>Port</label>
                  <span>
                    <input type="text" />
                  </span>
                </div>
                <div>
                  <label>Email</label>
                  <span>
                    <input type="text" />
                  </span>
                </div>
                <div>
                  <label>Password</label>
                  <span>
                    <input type="password" />
                  </span>
                </div>
                <div className="settingbtns">
                  <button>update</button>
                  <button>Clear</button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="settingsbtn1">
            <h4>Addministration Configuration</h4>
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
          <div className="hiddbtn">
            {open.sec ? <div className="container">and</div> : ""}
          </div>
          <div className="settingsbtn2">
            <h4>easy access</h4>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen({ ...open, thi: !open.thi })}
            >
              {open.thi ? (
                <KeyboardArrowUpSharpIcon />
              ) : (
                <KeyboardArrowDownSharpIcon />
              )}
            </IconButton>
          </div>

          <div>{open.thi ? <h5>abcd</h5> : ""}</div>
        </div>
        <div className="settingsbtn3">
          <h4>Activity Log</h4>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen({ ...open, four: !open.four })}
          >
            {open.four ? (
              <KeyboardArrowUpSharpIcon />
            ) : (
              <KeyboardArrowDownSharpIcon />
            )}
          </IconButton>
        </div>
        <div>{open.four ? <h5>abcd</h5> : ""}</div>
        {/* </Grid> */}
        {/* </Container> */}
      </Box>
    </>
  );
}

export default Settings;
