import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/material";
import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Calenderdate = () => {
  const [open, setOpen] = useState({ first: false, sec: false });
    const currDirective = [
        "Checking Financial Year 2021 Sales Report",
        "Create a new rules",
        "Update Worksheet for Rajesh",
        "Add Names to Watchlist",
    ]
    const handleDirective=['Update Worksheet ','Add Privillages to Roles']
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
          // height: "100vh",
          // overflow: "auto",
          marginTop: "60px",
        }}
      >
        <div
          style={{
            height: "100px",
            backgroundColor: "#D1d1d2",
            position: "sticky",
            top: "60px",
          }}
        >
          <Typography sx={{ fontSize: "40px", fontFamily: "monospace" }}>
            Calendar{" "}
          </Typography>
        </div>
        <div
          style={{
            borderRadius: "15px",
            border: "2px solid black",
            overflow: "hidden",
            margin: "80px",
          }}
        >
          <div
            style={{
              padding: "20px",
              backgroundColor: "#3b91ed",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <IconButton aria-label="delete">
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h4" sx={{ color: "#fff" }}>
              {" "}
              20th March,2022{" "}
            </Typography>
          </div>
          <div className="current-directive">
            <span>Current Directive for Myuser_21</span>

            <IconButton
              onClick={() => setOpen({ ...open, first: !open.first })}
            >
              {open.first ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </div>
          <div style={{margin:"8px"}}>

            {open.first && (
              <ul style={{padding:"30px"}}>
               { currDirective.map((ele,i) => {
                return<li key={i}>{ele}</li>
               })
                }
              </ul>
            )}
          </div>
          <div className="current-directive">
            <span>Current Directive for Myuser_21</span>

            <IconButton
              onClick={() => setOpen({ ...open, sec: !open.sec })}
            >
              {open.sec ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </div>
          <div style={{margin:"5px"}} >
            {open.sec && (
              <ul style={{padding:"30px"}}>
                
               {  handleDirective.map((ele,i)=>(<li key={i}> {ele}</li>))

               }
               

              </ul>
            )}
          </div>
        </div>
      </Box>
    </>
  );
};

export default Calenderdate;
