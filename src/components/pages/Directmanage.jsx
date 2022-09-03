import React from "react";
import "../style/Directmanage.css";
import Worksheet from "../Worksheet";

import "../style/Worksheet.css";
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
import EnhancedTable from "../Table";
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
import Auto from "../FormsUI/Auto";
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
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: "rgb(47, 157, 204)",
  margin: "10px 0",
  borderRadius: "15px",

  "&:hover": {
    backgroundColor: alpha("rgb(47, 157, 204)", 0.25),
    color: "rgb(47, 157, 204)",
  },
}));
const CustomizeButtonyellow = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: " #ffaa00",
  margin: "2px 0",
  borderRadius: "15px",

  "&:hover": {
    backgroundColor: alpha("#FFC23C", 0.25),
    color: "#ffaa00",
  },
}));
const CustomizeButtonred = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
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
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
          marginTop: "60px",
        }}
      >
        <div className="main-container1">
          <div className="directive_title">
            <div className="title_child1">
              <IconButton aria-label="arrow">
                <ArrowBackIcon />
              </IconButton>
              <Typography fontSize={40} fontFamily={"fantasy"}>
                {" "}
                Directive Management
              </Typography>
            </div>
          </div>
          <div className="seachbtn-wrapper">
            <div>
              {" "}
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>{" "}
            </div>
            <div>
              <CustomizeButton endIcon={<ControlPointIcon />}>
                Add Roles
              </CustomizeButton>{" "}
            </div>
          </div>
          <div className="table_directive">
            <EnhancedTable rows={rows} headCells={headCells} title={title} />
          </div>
        </div>
        <div className="main-container2">
          <div className="current-directive">
            <span>Current Directive for Myuser_21</span>

            <IconButton
              onClick={() => setOpen({ ...open, first: !open.first })}
            >
              {open.first ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </div>
          <div>
            {open.first && (
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                      <StyledTableCell align="right">Calories</StyledTableCell>
                      <StyledTableCell align="right">
                        Fat&nbsp;(g)
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        Carbs&nbsp;(g)
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        Protein&nbsp;(g)
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows1.map((row) => (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                          {row.name}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.calories}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.fat}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.carbs}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.protein}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </div>
        </div>
        <div className="main-container2">
          <div className="current-directive">
            <span>Add Directive for Myuser_21</span>

            <IconButton onClick={() => setOpen({ ...open, sec: !open.sec })}>
              {open.sec ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </div>
          {open.sec && (
            <div className="add-directive">
              <div className="addDir-Title">
                <Typography>
                  <b>Add Directive</b>
                </Typography>

                <IconButton
                  onClick={() => setOpen({ ...open, sec: !open.sec })}
                >
                  <CancelIcon />
                </IconButton>
              </div>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell> User Name</TableCell>
                    <TableCell> My user</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell> Role</TableCell>
                    <TableCell> Manager</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell> Directive</TableCell>
                    <TableCell>
                      {" "}
                      Fetch Transaction Report of Last 6 months
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell> Due By</TableCell>
                    <TableCell> DD/MM/YYYY</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell> code</TableCell>
                    <TableCell>
                      <Stack direction="row" spacing={2}>
                        {" "}
                        <CustomizeButtonyellow
                          variant="contained"
                          color="success"
                        >
                          standard
                        </CustomizeButtonyellow>
                        <CustomizeButtonred>imperative</CustomizeButtonred>{" "}
                      </Stack>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="btnfinal">
                <Stack direction="row" alignItems="center" spacing={1}>
                  <CustomizeButton>Update</CustomizeButton>

                  <CustomizeButtonred>delete</CustomizeButtonred>
                </Stack>
              </div>
            </div>
          )}
        </div>
        <div className="Directive-entry">
          <div className="leftdiv">
            <Typography>
              <b>Single Entry</b>
            </Typography>
            <div className="Inputdiv">
              {" "}
              <Typography>Role</Typography>
              <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
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
              <Typography>Directive</Typography>
              <TextField
                id="outlined-basic"
                label="Directive"
                variant="outlined"
              />
            </div>
            <div className="Inputdiv">
              <Typography>Due By</Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  label="Date desktop"
                  inputFormat="MM/DD/YYYY"
                  value={value}
                  onChange={handleCalender}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
            <div className="Inputdiv">
              <Typography>Filter</Typography>
              <Auto />
            </div>

            <div className="Inputdiv">
              <Typography>Code</Typography>
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
          <div className="middlediv"> </div>
          <div className="rightdiv">
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
        </div>
      </Box>
    </>
  );
};

export default Directmanage;
