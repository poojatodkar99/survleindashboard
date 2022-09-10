import React, { useState } from "react";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

import { DropzoneDialog } from "material-ui-dropzone";
import { DropzoneArea } from "material-ui-dropzone";
import KeyboardBackspaceSharpIcon from "@mui/icons-material/KeyboardBackspaceSharp";
import dayjs from "dayjs";
import "../style-2/rules2.css";
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

const CustomizeButton = styled(Button)(({ theme }) => ({
  color: "#fff",

  backgroundColor: "rgb(47, 157, 204)",
  margin: "10px 0",
  borderRadius: "15px",

  "&:hover": {
    backgroundColor: alpha("rgb(47, 157, 204)", 0.25),
    color: "rgb(47, 157, 204)",
  },
}));
const CustomizeButtonyellow = styled(Button)(({ theme }) => ({
  color: "#fff",
  backgroundColor: " #ffaa00",
  margin: "2px 0",
  borderRadius: "15px",

  "&:hover": {
    backgroundColor: alpha("#FFC23C", 0.25),
    color: "#ffaa00",
  },
}));
const CustomizeButtonred = styled(Button)(({ theme }) => ({
  color: "#fff",
  backgroundColor: " #cb1a23",
  margin: "10px 0",
  borderRadius: "15px",
  height: "35px",

  "&:hover": {
    backgroundColor: alpha("#cb1a34", 0.25),
    color: "#cb1a23",
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

//   const Directmanage = () => {

const Rules2 = () => {
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
      rulename: "",
      condition: "",
      value: "",
      joinoperations: "",
    },
    {
      title: "Critiria2",
      rulename: "",
      condition: "",
      value: "",
      joinoperations: "",
    },
  ]);

  const addTableRows = (e) => {
    const len = rowsData.length;
    e.preventDefault();
    const rowsInput = {
      title: "Critiria" + (len + 1),
      rulename: "",
      condition: "",
      value: "",
      joinoperations: "",
    };
    setRowsData([...rowsData, rowsInput]);
  };

  return (
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
      }}
    >
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
      <div className="Directive-entry">
        <div className="rulesleftdiv" style={{ width: "50%", padding: "10px" }}>
          <Typography>
            <b>Single Entry</b>
          </Typography>
          <form className="Rulesform">
            {/* <table cellSpacing={20}> */}
            <div className="rulename" style={{ width: "50%" }}>
              <span>Rule Name</span>
              <span>India</span>
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
                  <select name="rulename" value={ele.rulename} id="rule">
                    <option value="manager">Rule Name</option>
                    <option value="Staff">Staff</option>
                  </select>
                  <select name="condition" value={ele.condition} id="condition">
                    <option value="manager">Condition</option>
                    <option value="Staff">Staff</option>
                  </select>
                  <label>{ele.value}</label>
                  <select name="rulename" value={ele.joinoperations} id="rule">
                    <option value="manager">Join Operations</option>
                    <option value="Staff">Staff</option>
                  </select>
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

            <div className="usertablesbtn">
              <button>Add</button>
              <button>Clear</button>
            </div>
          </form>
        </div>
        <div className="middlediv">
          <Typography>
            <b>Bulk Entry</b>
          </Typography>
          <div className="Inputdiv">
            <CustomizeButton onClick={() => setAdd(true)}>
              Browse File
            </CustomizeButton>
            {/* <DropzoneDialog
                acceptedFiles={["image/*", "video/*"]}
                // acceptedFiles={["image/*"]}
                cancelButtonText={"cancel"}
                submitButtonText={"submit"}
                maxFileSize={500000}
                open={add}
                onClose={() => setAdd(false)}
                onSave={(files) => {
                  console.log("Files:", files);
                  setFiles(files);
                  setAdd(false);
                }}
                showPreviews={true}
                showFileNamesInPreview={true}
              /> */}
            <DropzoneArea onChange={(files) => console.log("Files:", files)} />
            <CustomizeButton style={{}} variant="contained" component="label">
              Upload
            </CustomizeButton>
          </div>
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

export default Rules2;
