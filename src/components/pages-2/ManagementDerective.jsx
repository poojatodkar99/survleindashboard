import React from "react";
import Container from "@mui/material/Container";
import { Grid,Box, Button, alpha} from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import "../style-2/ManagementDerective.css";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExploreIcon from "@mui/icons-material/Explore";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import AccessibilityNewSharpIcon from '@mui/icons-material/AccessibilityNewSharp';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ControlPointIcon from "@mui/icons-material/ControlPoint";

import styled from "@emotion/styled";
import { purple } from "@mui/material/colors";
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


function ManagementDerective() {
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

          {/* <div className="topnavbar">
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
          <div className="mngt">
            <h2>Management</h2>
          </div>
          <div className="mngtnearbox">
            <h6>
              <ExploreIcon /> Directive
            </h6>
          </div>
          <div className="emptyfirst"></div>
          <div className="mngtnearbox1">
            <span>
              {" "}
              <AccountCircleIcon /> <h6> users</h6>
            </span>
           
            
              <CustomizeButton endIcon={<ControlPointIcon />}>
                Add Users
              </CustomizeButton>{" "}
            
            
          </div>
          <div className="emptyfirst1"></div>
          <div className="mngtnearbox2">
            <span>
              {" "}
              <AccessibilityNewSharpIcon /> <h6> Roles</h6>
            </span>
            <CustomizeButton endIcon={<ControlPointIcon />}>
                Add Roles
              </CustomizeButton>{" "}
          </div>
          <div className="emptyfirst2"></div>
          <div className="mngtnearbox3">
            <span>
              {" "}
              <DescriptionOutlinedIcon /> <h6> Rules</h6>
            </span>
            
              <CustomizeButton endIcon={<ControlPointIcon />}>
                Add Rules
              </CustomizeButton>{" "}
            
          </div>
          <div className="emptyfirst3"></div>
        {/* </Grid> */}
      {/* </Container> */}
      </Box>
    </div>
  );
}

export default ManagementDerective;
