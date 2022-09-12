import React, { useState } from "react";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import { DropzoneDialog } from "material-ui-dropzone";
import KeyboardBackspaceSharpIcon from "@mui/icons-material/KeyboardBackspaceSharp";
import dayjs from "dayjs";
import "../style-2/rules3.css";
import styled from "@emotion/styled";
import {
  Button,
  FormControl,
  IconButton,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { alpha, Box } from "@mui/system";

const title = "Directives";

//   const Directmanage = () => {

const Rules3 = () => {
  const [open, setOpen] = useState({ first: false, sec: false });
  const [post, setPost] = useState("");
  const [add, setAdd] = useState(false);
  const [files, setFiles] = useState("");
  const handleChange = (event) => {
    setPost(event.target.value);
  };
  const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));

  const handleCalender = (newValue) => {
    setValue(newValue);
  };

  const [rowsData, setRowsData] = useState([
    {
      title: "Critiria1",
      amount: "",
      amount1: "",
      
    },
    {
      title: "Critiria2",
      amount: "",
      amount1: "",
     
    },
  ]);

  const addTableRows = (e) => {
    const len = rowsData.length;
    e.preventDefault();
    const rowsInput = {
      title: "Critiria" + (len + 1),
      amount: "",
      amount1: "",
      
    };
    setRowsData([...rowsData, rowsInput]);
  };

  return (
    // <Container>
    //   <Grid
    //     sx={{
    //       bgcolor: "#fff",
    //       height: "65vh",
    //       width: "100%",
    //       margin: "none",
    //     }}
    //   >
    <Box
    component="main"
    sx={{
      // backgroundColor: (theme) =>
      //   theme.palette.mode === "light"
      //     ? theme.palette.grey[100]
      //     : theme.palette.grey[900],
      flexGrow: 1,
      // height: "100vh",
      // overflow: "auto",
      marginTop: "60px",
    }}>

        
        <div className="managment">
          <h4>Management</h4>
        </div>
        <div className="UserTop" style={{ background: "orange" }}>
          <h2>
            {" "}
            <KeyboardBackspaceSharpIcon />
            Rules
          </h2>
          <span>
            <h4>00</h4>
            <h5>Directives</h5>
          </span>
        </div>
        <div className="Directive-entry1">
          <div
            className="rulesleftdiv1"
            style={{ width: "50%", padding: "10px" }}
          >
            <Typography>
              <b>Single Entry</b>
            </Typography>
            <form className="Rulesform1">
              {/* <table cellSpacing={20}> */}
              <div className="rulename1" style={{ width: "50%" }}>
                <span>Rule Name</span>
                <span>Amount Restriction</span>
              </div>
              <div style={{ width: "70%" }}>
                <span>Risk Score</span>

                <input type="range" value="" />
                {/* <button style={{ margin: "0px 10px" }}>Generate</button> */}
              </div>
              {rowsData.map((ele) => {
                return (
                  <div>
                    <span>{ele.title}</span>

                    <span
                      style={{
                        border: "none",
                        borderBottom: "1px solid black",
                      }}
                    >
                      <input style={{border:'none'}} type="text" value={ele.amount} />
                    </span>
                    <span> &gt; </span>
                    <span
                      style={{
                        border: "none !important",
                        borderBottom: "1px solid black",
                      }}
                    >
                      <input style={{border:'none'}} type="text" value={ele.amount1} />
                    </span>

                    <button
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                    >
                      x
                    </button>
                  </div>
                );
              })}
              <div style={{ dispay: "flex", justifyContent: "flex-end" }}>
                <button
                  onClick={addTableRows}
                  style={{ width: "20px", height: "20px", borderRadius: "50%" }}
                >
                  +
                </button>
              </div>

              <div style={{ width: "70%" }}>
                <span>Status</span>

                <span className="status-enabled">
                  <input type="radio" value="enabled" name="status" />
                  <span>Enabled</span>
                </span>
                <span className="status-disabled">
                  <input type="radio" value="disabled" name="status" />
                  <span>Disabled</span>
                </span>
              </div>

              <div
                className="usertable1"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  margin: "4px 10px",
                  height: "40px",
                }}
              >
                <button
                  style={{
                    margin: "4px 10px",
                    width: "60px",
                    borderRadius: "20px",
                  }}
                >
                  Update
                </button>
                <button
                  style={{
                    margin: "4px 10px",
                    width: "60px",
                    borderRadius: "20px",
                  }}
                >
                  Delete
                </button>
              </div>
            </form>
          </div>

          {/* <div className="rightdiv"> */}
          <button
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              borderRadius: "20px",
              width: "30px",
              height: "30px",
              margin: "4px 4px",
            }}
          >
            x
          </button>
          {/* </div> */}
        </div>
      {/* </Grid> */}
    {/* </Container> */}
    </Box>
  );
};

export default Rules3;
