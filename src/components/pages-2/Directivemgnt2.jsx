import React from "react";
import "../style-2/directivemgnt2.css";
// import Worksheet from "../Worksheet";


import { alpha, Box } from "@mui/system";
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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styled from "@emotion/styled";
import { purple } from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
// import EnhancedTable from "../Table";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CancelIcon from "@mui/icons-material/Cancel";
import dayjs from "dayjs";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
// import Auto from "../FormsUI/Auto";
import { useState } from "react";
import { DropzoneDialog } from "material-ui-dropzone";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData1(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows1 = [
  createData1("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData1("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData1("Eclair", 262, 16.0, 24, 6.0),
  createData1("Cupcake", 305, 3.7, 67, 4.3),
  createData1("Gingerbread", 356, 16.0, 49, 3.9),
];

function createData(name, calories, fat, carbs) {
  return {
    name,
    calories,
    fat,
    carbs,
  };
}
const headCells = [
  {
    id: "Username",
    numeric: false,
    disablePadding: true,
    label: "Username",
  },
  {
    id: "Email",
    numeric: true,
    disablePadding: false,
    label: "Email",
  },
  {
    id: "Role",
    numeric: true,
    disablePadding: false,
    label: "Role",
  },
  {
    id: "Due",
    numeric: true,
    disablePadding: false,
    label: "Due",
  },
  // {
  //   id: "Status",
  //   numeric: true,
  //   disablePadding: false,
  //   label: "Status",
  // },
];

const rows = [
  createData("pooja", "poojatokar@gmail.com", "Designer", "12/10/2022"),
  createData(
    "pooja",
    "poojatokar@gmail.com",
    "software Developer",
    "12/10/2022"
  ),
  createData(
    "pooja",
    "poojatokar@gmail.com",
    "software Developer",
    "12/10/2022"
  ),
  createData("pooja", "poojatokar@gmail.com", "Designerr", "12/10/2022"),
  createData(
    "pooja",
    "poojatokar@gmail.com",
    "software Developer",
    "12/10/2022"
  ),
  createData(
    "pooja",
    "poojatokar@gmail.com",
    "software Developer",
    "12/10/2022"
  ),
  createData(
    "pooja",
    "poojatokar@gmail.com",
    "software Developer",
    "12/10/2022"
  ),
  createData("pooja", "poojatokar@gmail.com", "manager", "12/10/2022"),
  createData(
    "pooja",
    "poojatokar@gmail.com",
    "software Developer",
    "12/10/2022"
  ),
  createData(
    "pooja",
    "poojatokar@gmail.com",
    "software Developer",
    "12/10/2022"
  ),
  createData("pooja", "poojatokar@gmail.com", "manager", "12/10/2022"),
  createData(
    "pooja",
    "poojatokar@gmail.com",
    "software Developer",
    "12/10/2022"
  ),
];
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
const Directmanage = () => {
  const [open, setOpen] = useState({ first: false, sec: false });
  const [post, setPost] = useState("");
  const [add , setAdd]=useState(false);
  const [files,setFiles]=useState('');
  const handleChange = (event) => {
    setPost(event.target.value);
  };
  const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));

  const handleCalender = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
     <div className="Directive-entry">
          <div className="leftdiv">
            <Typography>
              <b>Single Entry</b>
            </Typography>
            <div className="Inputdiv">
              {" "}
              <Typography sx={{width:"70px"}}>Role</Typography>
              <FormControl sx={{ minWidth:"250px"}}>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                 sx={{width:"250px"}}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={post}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="Inputdiv">
              <Typography sx={{width:"70px"}}>Directive</Typography>
              <TextField
              sx={{width:"250px"}}
                id="outlined-basic"
                label="Directive"
                variant="outlined"
              />
            </div>
            <div className="Inputdiv">
              <Typography sx={{width:"70px"}}>Due By</Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                              sx={{width:"250px"}}

                  label="Date desktop"
                  inputFormat="MM/DD/YYYY"
                  value={value}
                  onChange={handleCalender}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
            <div className="Inputdiv">
              <Typography sx={{width:"70px"}}>Filter</Typography>
             
            </div>

            <div className="Inputdiv">
              <Typography sx={{width:"70px"}}>Code</Typography>
              <Stack direction="row" spacing={2}>
                {" "}
                <CustomizeButtonyellow variant="contained" color="success">
                  standard
                </CustomizeButtonyellow>
                <CustomizeButtonred>imperative</CustomizeButtonred>{" "}
              </Stack>
            </div>
            <div className="Inputdiv">
              <Stack direction="row" alignItems="center" spacing={1}>
                <CustomizeButton>Update</CustomizeButton>

                <CustomizeButtonred>Cancle</CustomizeButtonred>
              </Stack>
            </div>
          </div>
          <div className="middlediv"> 
          <Typography>
              <b>Bulk Entry</b>
            </Typography>
            <div className="Inputdiv"><CustomizeButton onClick={() => setAdd(true)}>Browse File</CustomizeButton>
              <DropzoneDialog
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
              />
              <CustomizeButton style={{}} variant="contained" component="label">
                Upload
              </CustomizeButton></div>
          </div>
          {/* <div className="rightdiv"> */}
           <button style={{borderRadius:'20px' ,width:'30px',height:'30px' ,margin:'4px 4px'}}>x</button>
        {/* </div> */}
          </div>
          
    </>
  );
};

export default Directmanage;
