import React from "react";
import "../style-2/transaction.css";
import Container from "@mui/material/Container";
import { Grid, IconButton } from "@mui/material";
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

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "200%",
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
function Transactions() {
  const [open, setOpen] = React.useState({first:false,sec:false});

  const state = {
    series: [
      {
        name: "SAMPLE A",
        data: [
          [16.4, 5.4],
          [21.7, 2],
          [25.4, 3],
          [19, 2],
          [10.9, 1],
          [13.6, 3.2],
          [10.9, 7.4],
          [10.9, 0],
          [10.9, 8.2],
          [16.4, 0],
          [16.4, 1.8],
          [13.6, 0.3],
          [13.6, 0],
          [29.9, 0],
          [27.1, 2.3],
          [16.4, 0],
          [13.6, 3.7],
          [10.9, 5.2],
          [16.4, 6.5],
          [10.9, 0],
          [24.5, 7.1],
          [10.9, 0],
          [8.1, 4.7],
          [19, 0],
          [21.7, 1.8],
          [27.1, 0],
          [24.5, 0],
          [27.1, 0],
          [29.9, 1.5],
          [27.1, 0.8],
          [22.1, 2],
        ],
      },
      {
        name: "SAMPLE B",
        data: [
          [36.4, 13.4],
          [1.7, 11],
          [5.4, 8],
          [9, 17],
          [1.9, 4],
          [3.6, 12.2],
          [1.9, 14.4],
          [1.9, 9],
          [1.9, 13.2],
          [1.4, 7],
          [6.4, 8.8],
          [3.6, 4.3],
          [1.6, 10],
          [9.9, 2],
          [7.1, 15],
          [1.4, 0],
          [3.6, 13.7],
          [1.9, 15.2],
          [6.4, 16.5],
          [0.9, 10],
          [4.5, 17.1],
          [10.9, 10],
          [0.1, 14.7],
          [9, 10],
          [12.7, 11.8],
          [2.1, 10],
          [2.5, 10],
          [27.1, 10],
          [2.9, 11.5],
          [7.1, 10.8],
          [2.1, 12],
        ],
      },
      {
        name: "SAMPLE C",
        data: [
          [21.7, 3],
          [23.6, 3.5],
          [24.6, 3],
          [29.9, 3],
          [21.7, 20],
          [23, 2],
          [10.9, 3],
          [28, 4],
          [27.1, 0.3],
          [16.4, 4],
          [13.6, 0],
          [19, 5],
          [22.4, 3],
          [24.5, 3],
          [32.6, 3],
          [27.1, 4],
          [29.6, 6],
          [31.6, 8],
          [21.6, 5],
          [20.9, 4],
          [22.4, 0],
          [32.6, 10.3],
          [29.7, 20.8],
          [24.5, 0.8],
          [21.4, 0],
          [21.7, 6.9],
          [28.6, 7.7],
          [15.4, 0],
          [18.1, 0],
          [33.4, 0],
          [16.4, 0],
        ],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "scatter",
        zoom: {
          enabled: true,
          type: "xy",
        },
      },
      xaxis: {
        tickAmount: 10,
        labels: {
          formatter: function (val) {
            return parseFloat(val).toFixed(1);
          },
        },
      },
      yaxis: {
        tickAmount: 7,
      },
    },
  };

  const options = {
    series: [
      {
        name: "sales",
        data: [
          {
            x: "2019/01/01",
            y: 400,
          },
          {
            x: "2019/04/01",
            y: 430,
          },
          {
            x: "2019/07/01",
            y: 448,
          },
          {
            x: "2019/10/01",
            y: 470,
          },
          {
            x: "2020/01/01",
            y: 540,
          },
          {
            x: "2020/04/01",
            y: 580,
          },
          {
            x: "2020/07/01",
            y: 690,
          },
          {
            x: "2020/10/01",
            y: 690,
          },
        ],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 380,
      },
      xaxis: {
        type: "category",
        labels: {
          formatter: function (val) {
            // return "Q" + dayjs(val).quarter()
          },
        },
        group: {
          style: {
            fontSize: "10px",
            fontWeight: 700,
          },
          groups: [
            { title: "2019", cols: 4 },
            { title: "2020", cols: 4 },
          ],
        },
      },
      title: {
        text: " ",
      },
      tooltip: {
        x: {
          formatter: function (val) {
            // return "Q" + dayjs(val).quarter() + " " + dayjs(val).format("YYYY")
          },
        },
      },
    },
  };

  return (
    <div>
      <Container>
        <Grid
          d
          sx={{
            bgcolor: "#cfe8fc",
            // height: "96vh",
            width: "100%",
            margin: "none",
          }}
        >
          {" "}
          <div className="transactionnav ">
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
          </div>
          <div className="TransactionTop">
            <h4>Transactions</h4>
            <span>
              <h4>05</h4>
              <h5>Directives</h5>
            </span>
          </div>
          <div className="graphicview">
            <div className="graphicbtn">
              <h4>Graphical Overvies</h4>
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen({...open,first:!open.first})}
              >
                {open.first ? (
                  <KeyboardArrowUpSharpIcon />
                ) : (
                  <KeyboardArrowDownSharpIcon />
                )}
              </IconButton>
            </div>
            <div className="hiddbtn">
              {open.first ? (
                <>
                  <ReactApexChart 
                  className='charts'
                    options={state.options}
                    series={state.series}
                    type="scatter"
                    height={300}
                    // width={450}
                  />
                  <ReactApexChart
                  className='charts'
                    options={options.options}
                    series={options.series}
                    type="bar"
                    height={300}
                    // width={450}
                  />
                </>
              ) : (
                ""
              )}
            </div>
            <div className="graphicbtn1">
              <h4>List Overviews</h4>
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen({...open,sec:!open.sec})}
              >
                {open.sec ? (
                  <KeyboardArrowUpSharpIcon />
                ) : (
                  <KeyboardArrowDownSharpIcon />
                )}
              </IconButton>
            </div>
            <div className="managementbox1">
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
            <div>{open.sec ? <DenseTable /> : ""}</div>
          </div>
        </Grid>
      </Container>
    </div>
  );
}

export default Transactions;
