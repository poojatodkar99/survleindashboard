import React from "react";


import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Box, Typography } from "@mui/material";


const Fullcalender = () => {
    const events = [{ title: "today's event", date: new Date() }];

  return (
    <>    <div className="main-container">

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
        
    <div  style={{height:"100px",backgroundColor:"#D1d1d2",position:"sticky",top:"60px"}}>
        <Typography sx={{fontSize:"40px",fontFamily:"monospace"}}>Calendar </Typography>
    </div>
    <div style={{margin:"30px"}}>
     <FullCalendar
     height={680}
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin]}
        // events={events}
      />
      </div>
</Box>
</div>

    </>
  )
}

export default Fullcalender