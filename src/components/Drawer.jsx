import React, { useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
// import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { MainListItems, SecondaryListItems } from "./ListItems";
import Chart from "./Chart";
import Scatterchart from "./Scatterchart";
import Piechart from "./Piechart";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Chart1 from "./Chart1";
import Cards from "./Cards";
import Worksheet from "./Worksheet";
import Directive from "./pages/Directive";
import Directmanage from "./pages/Directmanage";
import Dropzone from "react-dropzone-uploader";
import Roletable from "./pages/Roletable";
import Fullcalender from "./pages/Fullcalender";
import { Stack } from "@mui/system";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import RuleIcon from "@mui/icons-material/Rule";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

import SettingsIcon from "@mui/icons-material/Settings";
import User from "./pages/user/User";
import Settingsamit from "./pages-2/Settingsamit";
import Settings from "./pages-2/Settings";
import Notifications from "./pages-2/Notifications";
import Transactions from "./pages-2/Transactions";
import Voilations from "./pages-2/Voilations";
import Rules1 from "./pages-2/Rules1";
import "../components/style-2/drawer.css";
import logo from "./images/logo.svg"

// import Deposits from './Deposits';
// import Orders from './Orders';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link to="https://mui.com/">Your Website</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 180;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "sticky",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function DashboardContent() {
  const [shownotif, setShownotif] = useState(false);

  const [open, setOpen] = React.useState(false);
  // const [component, setComponent] = React.useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  const component = (
    <>
      {/* <Toolbar /> */}
      {/* <Container maxWidth="lg" sx={{ mt: 1, mb: 2 }}> */}
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={7} lg={7}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              // height: 240,
            }}
          >
            <Piechart />
            {/* <Chart /> */}
            <Scatterchart />
            <Scatterchart />
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={5} lg={5}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              // height: 240,
            }}
          >
            <Chart />

            {/* <Deposits /> */}
            <h4>Directives</h4>
            {/* <div className="directivetable"> */}
            <table className="directivetable" >
              <tr>
                <td style={{ borderBottom: "1px solid black" }}>
                  <span>Create New Rules</span>
                  <span>
                    <input type="radio" name="rbtn" class="green" />

                    <input type="radio" name="rbtn" class="orange" />

                    <input type="radio" name="rbtn" class="red" />
                  </span>
                </td>
              </tr>
              <tr>
                <td style={{ borderBottom: "1px solid black" }}>
                  <span> Add Names to Watchlist</span>
                  <span>
                    <input type="radio" name="rbtn1" class="green" />

                    <input type="radio" name="rbtn1" class="orange" />

                    <input type="radio" name="rbtn1" class="red" />
                  </span>
                </td>
              </tr>
              <tr>
                <td style={{ borderBottom: "1px solid black" }}>
                  <span> Fetch Transaction Report of Last Month</span>
                  <span>
                    <input type="radio" name="rbtn2" class="green" />
                    <input type="radio" name="rbtn2" class="orange" />
                    <input type="radio" name="rbtn2" class="red" />
                  </span>
                </td>
              </tr>
              <tr>
                <td style={{ borderBottom: "1px solid black" }}>
                  <span> Fetch Transaction Report of Last 6 Months</span>
                  <span>
                    <input type="radio" name="rbtn3" class="green" />
                    <input type="radio" name="rbtn3" class="orange" />
                    <input type="radio" name="rbtn3" class="red" />
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span> Fetch Transaction Report of 2020</span>
                  <span>
                    <input type="radio" name="rbtn4" class="green" />
                    <input type="radio" name="rbtn4" class="orange" />
                    <input type="radio" name="rbtn4" class="red" />
                  </span>
                </td>
              </tr>
            </table>
            {/* </div> */}
          </Paper>
        </Grid>
        {/* Recent Orders */}

      </Grid>
      {/* <Copyright sx={{ pt: 4 }} /> */}
      {/* </Container> */}
    </>
  );

  // const paths = ['dashboard', 'orders', 'customers', 'reports', 'integrations']
  // const ShowComp = (comp)=>{
  //   console.log(comp)
  //   switch(comp){
  //     case 'dashboard':
  //       setComponent(
  //       <Box
  //       component="main"
  //       sx={{
  //         backgroundColor: (theme) =>
  //           theme.palette.mode === 'light'
  //             ? theme.palette.grey[100]
  //             : theme.palette.grey[900],
  //         flexGrow: 1,
  //         height: '100vh',
  //         overflow: 'auto',
  //       }}
  //     >
  //       <Toolbar />
  //       <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
  //         <Grid container spacing={3}>
  //           {/* Chart */}
  //           <Grid item xs={12} md={8} lg={8}>
  //             <Paper
  //               sx={{
  //                 p: 2,
  //                 display: 'flex',
  //                 flexDirection: 'column',
  //                 // height: 240,
  //               }}
  //             >
  //               <Piechart/>
  //               {/* <Chart /> */}
  //               <Scatterchart />
  //               <Scatterchart />
  //             </Paper>
  //           </Grid>
  //           {/* Recent Deposits */}
  //           <Grid item xs={12} md={4} lg={4}>
  //             <Paper
  //               sx={{
  //                 p: 2,
  //                 display: 'flex',
  //                 flexDirection: 'column',
  //                 // height: 240,
  //               }}
  //             >
  //               <Chart/>
  //               {/* <Deposits /> */}
  //             </Paper>
  //           </Grid>
  //           {/* Recent Orders */}
  //           <Grid item xs={12}>
  //             <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
  //               {/* <Orders /> */}
  //             </Paper>
  //           </Grid>
  //         </Grid>
  //         <Copyright sx={{ pt: 4 }} />
  //       </Container>
  //     </Box>)
  //     break;
  //     case 'orders':
  //       setComponent(<h1>Orders</h1>)
  //       break;
  //   }
  // }

  return (
    <>
      {shownotif && <Notifications close={setShownotif} />}
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: "flex", height: '100vh' }}>
          <CssBaseline />
          <AppBar style={{ position: 'fixed', height: '60px', background: '#f5f5f5' }} open={open}>
            <Toolbar
              sx={{
                pr: "24px", // keep right padding when drawer closed
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: "36px",
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon color="primary" />
              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="primary"
                noWrap
                sx={{ flexGrow: 1,display:'flex' ,alignItems:'center'}}
              >
                <img width={150} src={logo} alt="" srcset="" style={{display:open?'none':'block'}} />
              </Typography>
              <Stack className="nav-icons" direction="row" alignContent={'center'} spacing={3}>
                <Link to={"/user-calendar"}>
                  <IconButton color="inherit">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                      width="20.000000px" height={'20px'} viewBox="0 0 685.000000 681.000000"
                      preserveAspectRatio="xMidYMid meet">

                      <g transform="translate(0.000000,681.000000) scale(0.100000,-0.100000)"
                        stroke="none">
                        <path d="M1510 6200 l0 -540 -704 0 -704 0 -4 -1087 c-1 -599 -1 -1852 0
-2786 l4 -1697 3324 0 3324 0 0 2785 0 2785 -720 0 -720 0 0 540 0 540 -280 0
-280 0 0 -540 0 -540 -1340 0 -1340 0 0 540 0 540 -280 0 -280 0 0 -540z m550
-820 l0 -280 1345 0 1345 0 0 280 0 280 280 0 280 0 0 -280 0 -280 445 0 445
0 0 -695 0 -695 -2775 0 -2775 0 0 695 0 695 428 2 427 3 3 278 2 277 275 0
275 0 0 -280z m4138 -3482 l-3 -1253 -2770 0 -2770 0 -3 1253 -2 1252 2775 0
2775 0 -2 -1252z"/>
                      </g>
                    </svg>
                    {/* <HomeRepairServiceIcon  /> */}
                  </IconButton>
                </Link>
                <IconButton color="inherit" onClick={(e) => setShownotif(!shownotif)}>
                  <Badge badgeContent={4} color={"info"}>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                      width="20.000000px" height={'20px'} viewBox="0 0 576.000000 703.000000"
                      preserveAspectRatio="xMidYMid meet">

                      <g transform="translate(0.000000,703.000000) scale(0.100000,-0.100000)"
                        stroke="none">
                        <path d="M2692 6949 c-1225 -88 -2259 -1026 -2512 -2278 -56 -279 -53 -179
-57 -1978 l-4 -1663 276 0 275 0 0 1605 c0 1058 4 1639 11 1703 96 890 691
1652 1509 1933 684 236 1436 113 2020 -329 103 -79 308 -280 390 -382 206
-260 361 -567 439 -873 36 -139 58 -268 71 -417 6 -71 10 -717 10 -1677 l0
-1563 270 0 270 0 0 1613 c0 1022 -4 1651 -10 1720 -54 572 -269 1104 -628
1557 -93 117 -317 342 -432 434 -443 353 -955 554 -1520 596 -150 11 -213 11
-378 -1z"/>
                        <path d="M1900 983 c0 -66 24 -195 50 -273 109 -324 371 -571 690 -649 478
-117 958 142 1136 615 30 81 50 174 60 277 l7 77 -276 0 -276 0 -6 -37 c-29
-181 -114 -306 -252 -371 -52 -24 -70 -27 -163 -27 -99 0 -109 2 -173 33 -128
63 -214 182 -238 330 l-12 72 -273 0 -274 0 0 -47z"/>
                      </g>
                    </svg>
                    {/* <NotificationsActiveIcon
                      onClick={(e) => setShownotif(!shownotif)}
                    /> */}
                    {/* {shownotif && <Notifications />} */}
                  </Badge>
                </IconButton>
                <Link style={{ textDecoration: "none" }} to={"/rules"}>
                  <IconButton color="inherit">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                      width="20.000000px" height={'20px'} viewBox="0 0 681.000000 690.000000"
                      preserveAspectRatio="xMidYMid meet">

                      <g transform="translate(0.000000,690.000000) scale(0.100000,-0.100000)"
                        stroke="none">
                        <path d="M3160 6130 l0 -670 280 0 280 0 0 670 0 670 -280 0 -280 0 0 -670z" />
                        <path d="M1082 5867 l-192 -192 500 -500 500 -500 198 198 197 199 -500 494
c-275 271 -502 494 -505 494 -3 0 -92 -87 -198 -193z"/>
                        <path d="M3790 5148 l0 -284 73 -23 c313 -99 591 -324 768 -621 57 -97 117
-249 147 -375 23 -97 26 -131 27 -295 0 -158 -3 -200 -23 -288 -60 -269 -186
-495 -384 -689 -149 -146 -330 -257 -524 -320 l-84 -27 0 -283 c0 -159 4 -283
9 -283 5 0 60 13 123 30 494 128 918 445 1175 878 385 647 353 1462 -82 2078
-214 304 -523 547 -865 679 -104 40 -241 82 -327 100 l-33 7 0 -284z"/>
                        <path d="M100 3470 l0 -280 710 0 710 0 0 280 0 280 -710 0 -710 0 0 -280z" />
                        <path d="M1367 1872 l-497 -497 195 -195 194 -194 398 394 c219 216 445 440
503 497 l105 103 -195 195 c-107 107 -197 195 -200 195 -3 0 -229 -224 -503
-498z"/>
                        <path d="M3160 895 l0 -755 280 0 280 0 0 755 0 755 -280 0 -280 0 0 -755z" />
                      </g>
                    </svg>
                    {/* <RuleIcon /> */}
                  </IconButton>
                </Link>

                <Link to={"/user-setting"}>
                  <IconButton color="inherit">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                      width="20.000000px" height={'20px'} viewBox="0 0 677.000000 668.000000"
                      preserveAspectRatio="xMidYMid meet">

                      <g transform="translate(0.000000,668.000000) scale(0.100000,-0.100000)"
                        stroke="none">
                        <path d="M3120 6091 l0 -539 -82 -12 c-119 -17 -329 -72 -439 -115 -140 -56
-316 -148 -441 -232 l-111 -74 -387 385 c-212 212 -391 386 -396 386 -5 0 -93
-84 -196 -187 l-188 -188 391 -391 390 -390 -77 -115 c-178 -266 -306 -596
-346 -890 l-12 -89 -558 0 -558 0 0 -275 0 -275 563 0 564 0 22 -112 c54 -279
192 -593 360 -823 l51 -70 -397 -397 -398 -398 190 -190 190 -190 395 395
c217 217 398 395 401 395 4 0 58 -34 120 -76 249 -167 538 -282 837 -333 l107
-18 3 -596 2 -597 275 0 275 0 0 600 c0 330 3 600 6 600 4 0 61 11 128 25 285
58 578 184 802 346 45 32 86 59 91 59 4 0 186 -178 403 -395 l395 -395 193
193 192 192 -399 399 -398 398 75 112 c148 220 271 516 323 774 l22 112 584 0
583 0 0 275 0 275 -579 0 -578 0 -12 78 c-49 316 -165 615 -340 878 l-79 119
389 390 389 390 -190 190 -190 190 -388 -388 -389 -389 -110 76 c-179 123
-390 226 -592 288 -87 27 -270 68 -303 68 l-28 0 0 545 0 545 -275 0 -275 0 0
-539z m565 -1101 c223 -47 438 -140 620 -270 204 -144 410 -391 519 -620 374
-790 45 -1735 -740 -2128 -298 -149 -680 -203 -1004 -142 -650 123 -1154 617
-1290 1265 -27 131 -37 368 -21 501 47 377 196 680 465 949 273 272 550 407
961 469 17 2 111 3 210 1 134 -3 206 -9 280 -25z"/>
                      </g>
                    </svg>
                  </IconButton>
                </Link>

                <Link to={"/user-profile"}>
                  <IconButton color="inherit">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                      width="20.000000px" height={'20px'} viewBox="0 0 677.000000 684.000000"
                      preserveAspectRatio="xMidYMid meet">

                      <g transform="translate(0.000000,684.000000) scale(0.100000,-0.100000)"
                         stroke="none">
                        <path d="M3240 6780 c-433 -43 -853 -263 -1129 -593 -251 -301 -384 -646 -398
-1032 -11 -299 43 -556 172 -820 294 -598 933 -974 1599 -941 740 37 1371 545
1561 1258 74 278 74 598 0 876 -213 800 -981 1333 -1805 1252z m393 -571 c230
-46 420 -149 587 -318 309 -312 412 -791 257 -1203 -241 -638 -985 -927 -1591
-617 -316 161 -529 447 -607 814 -17 77 -17 332 0 410 88 416 359 734 746 874
174 63 418 79 608 40z"/>
                        <path d="M3023 2844 c-771 -84 -1468 -418 -2018 -969 -386 -386 -649 -813
-820 -1330 -48 -145 -109 -384 -117 -460 l-3 -30 270 0 270 0 13 55 c98 420
279 800 542 1140 89 115 333 361 450 454 632 503 1438 715 2230 586 943 -154
1744 -777 2135 -1659 55 -124 128 -339 156 -459 11 -48 22 -95 25 -104 5 -17
27 -18 275 -18 234 0 269 2 269 15 0 9 -11 67 -25 130 -118 545 -353 1030
-712 1462 -101 122 -347 363 -473 464 -518 415 -1128 662 -1799 729 -140 14
-519 11 -668 -6z"/>
                      </g>
                    </svg>
                    {/* <AccountCircleIcon /> */}
                  </IconButton>
                </Link>
              </Stack>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: "flex",
                alignItems: "center",
                minHeight: '60px !important',
                justifyContent: "flex-end",
                px: [1],
              }}
            >
              <Typography
                component="h1"
                variant="h6"
                color="primary"
                noWrap
                sx={{ flexGrow: 1,display:'flex' ,alignItems:'center'}}
              >
                <img width={"100%"} src={logo} alt="" srcset="" />
              </Typography>
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
              <MainListItems />
              <Divider sx={{ my: 1 }} />
              {/* <SecondaryListItems /> */}
            </List>
          </Drawer>
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "calc(100vh - 60px)",
              position: 'relative',
              top: '60px',
              right: '0',
              overflow: "auto",
              // marginTop:"60px",
            }}
          >
            {/* {<Show />} */}
            {/* {component} */}
            {
              <>
                <Routes>
                  <Route exact path="/" element={component} />
                  <Route exact path="/cards" element={<Cards />} />
                  <Route exact path="/cards/:cardname" element={<Cards />} />
                  <Route
                    exact
                    path="/user-profile"
                    element={<Settingsamit />}
                  />
                  <Route exact path="/user-setting" element={<Settings />} />
                  <Route
                    exact
                    path="/user-transaction"
                    element={<Transactions />}
                  />
                  <Route
                    exact
                    path="/user-voilation"
                    element={<Voilations />}
                  />
                  <Route exact path="/rules" element={<Rules1 />} />

                  <Route path="/worksheet" element={<Worksheet />} />
                  <Route path="/directive" element={<Directmanage />} />

                  <Route path="/roles" element={<Roletable />} />
                  <Route path="/user-calendar" element={<Fullcalender />} />
                  <Route path="/user" element={<User />} />
                </Routes>
              </>
            }
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
