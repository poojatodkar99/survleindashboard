import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Customizetable from "./Customizetable";
import EnhancedTable from "../Table";
import styled from "@emotion/styled";
import { alpha, Button, InputBase, Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import "../style/Countries.css";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { purple } from "@mui/material/colors";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Modalpopup from "./Modalpopup";
import Organize from "./Organize";
import Addentry from "./Addentry";
import { useNavigate } from "react-router-dom";

// import EnhancedTable from '../../Table';

// function createData(head,name, calories, fat, carbs, protein) {
//   return {head, name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('name','Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('calories','Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('fat','Eclair', 262, 16.0, 24, 6.0),
//   createData('carbs','Cupcake', 305, 3.7, 67, 4.3),
//   createData('protein','Gingerbread', 356, 16.0, 49, 3.9),
// ];
function createData(name, calories, fat, carbs, protein) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}
const headCells = [
  {
    id: "Country",
    numeric: false,
    disablePadding: true,
    label: "Country",
  },
  {
    id: "Country Code",
    numeric: true,
    disablePadding: false,
    label: "Country Code",
  },
  {
    id: "Risk Score",
    numeric: true,
    disablePadding: false,
    label: "Risk Score",
  },
  {
    id: "Risk",
    numeric: true,
    disablePadding: false,
    label: "Risk",
  },
  {
    id: "Status",
    numeric: true,
    disablePadding: false,
    label: "Status",
  },
];

const rows = [
  createData("Delivery Channel", "Web/Mobile App	", 1),
  createData("Product", "Others", 4),
  createData("Client Legal Type	", "Individual", 1),
  createData("Customer Type	", "Employed", 1),
  createData("Business Activity", "Taxi", 4),
  createData("Client Structure	", "Beneficial Ownership is clear	", 1),
  createData(
    "Individuals or Family Members who hold/ have held a public position",
    "Does not hold a public position	",
    1
  ),
  //   createData('position', 'Does not hold a public position	',1 ),
  createData("Registered Business address", "Australia", 1),
  createData("Country of Residence	", "Australia", 1),
  createData(
    "Country of Business interest/ Trading partner/Trading address	",
    "Australia",
    3
  ),
];
const title = "Countries";

const CustomizeButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: "#ea6",
  margin: "10px 0",
  borderRadius: "15px",

  "&:hover": {
    backgroundColor: alpha("#ea6", 0.25),
    color: "#ea6",
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha("#fff", 0.6),
  "&:hover": {
    backgroundColor: alpha("#ea6", 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  margin: "10px 0",
  // width: '300px',
  borderRadius: "20px",
  border: "1px solid #ea6",
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

const Countries = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const navigate = useNavigate()
  const handleClose = () => setOpen(false);

  const [show, setShow] = useState(<></>);

  return (
    <>
      <Modalpopup show={show} open={open} handleClose={handleClose} />
      <div className="country-title" >
        <div style={{ marginLeft: "10px" }}>
          <IconButton
            aria-label="arrowback"
            onClick={() => {
              props.setActive(false);
              props.setPresentComp(null);
              navigate("/cards")
            }}
          >
            <ArrowBackIcon />
          </IconButton>

          <div style={{ color: "#fff" }}>
            <span className="span-text">Countries</span>
          </div>
        </div>
        <div>
          {" "}
          <span className="span-text" style={{ margin: "10px" }}>
            Directives
          </span>
          <div>
            <Tooltip title="Organize">
              <IconButton
                sx={{
                  float: "right",
                }}
                onClick={() => {
                  setShow(<Organize />);
                  handleOpen();
                }}
                aria-label="delete"
                size="large"
              >
                <FilterListIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
      <div
        style={{
          margin: "50px 0",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        <div>
          <CustomizeButton
            variant="contained"
            endIcon={<AddCircleOutlineIcon />}
            onClick={() => {
              setShow(<Addentry handleClose={handleClose} />);
              handleOpen();
            }}
          >
            Add
          </CustomizeButton>
        </div>
      </div>

      <EnhancedTable rows={rows} headCells={headCells} title={title} />
    </>
  );
};

export default Countries;
