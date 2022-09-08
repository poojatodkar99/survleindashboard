import  React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { MainListItems, SecondaryListItems } from './ListItems';
import Chart from './Chart';
import Scatterchart from './Scatterchart';
import Piechart from './Piechart';
import { Route,  BrowserRouter as Router, Routes } from "react-router-dom";
import Chart1 from './Chart1';
import Cards from './Cards';
import Worksheet from './Worksheet';
import Directive from './pages/Directive';
import Directmanage from './pages/Directmanage';
import Dropzone from 'react-dropzone-uploader'
import Roletable from './pages/Roletable';
import Fullcalender from './pages/Fullcalender';
import { Stack } from '@mui/system';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import RuleIcon from '@mui/icons-material/Rule';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

import SettingsIcon from '@mui/icons-material/Settings';
import User from './pages/user/User';



// import Deposits from './Deposits';
// import Orders from './Orders';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 180;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'sticky',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  // const [component, setComponent] = React.useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  const component = <>
  <Toolbar />
  {/* <Container maxWidth="lg" sx={{ mt: 1, mb: 2 }}> */}
    <Grid container  spacing={3}>
      {/* Chart */}
      <Grid item xs={12} md={7} lg={7}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            // height: 240,
          }}
        >
          <Piechart/>
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
            display: 'flex',
            flexDirection: 'column',
            // height: 240,
          }}
        >
          <Chart/>
          {/* <Deposits /> */}
        </Paper>
      </Grid>
      {/* Recent Orders */}
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          {/* <Orders /> */}
        </Paper>
      </Grid>
    </Grid>
    <Copyright sx={{ pt: 4 }} />
  {/* </Container> */}
</>
 
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
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <Stack direction="row" spacing={2}>

            <IconButton color="inherit">
                <HomeRepairServiceIcon />
          
            </IconButton>
            <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">

                <NotificationsActiveIcon />
                </Badge>

            </IconButton>
            <IconButton color="inherit">
                <RuleIcon />
            </IconButton>
            <IconButton color="inherit">

                <SettingsIcon />
            </IconButton>
            <IconButton color="inherit">
                <AccountCircleIcon />
            </IconButton>
            </Stack>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <MainListItems  />
            <Divider sx={{ my: 1 }} />
            {/* <SecondaryListItems /> */}
          </List>
        </Drawer>
        <Box
  component="main"
  sx={{
    backgroundColor: (theme) =>
      theme.palette.mode === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[900],
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    // marginTop:"60px",
  }}
>
        {/* {<Show />} */}
        {/* {component} */}
        {<>
          <Routes>
             <Route exact path="/" element={component } />
             <Route exact path="/cards" element={<Cards />} />
             <Route exact path="/cards/:cardname" element={<Cards />} />
           <Route path="/worksheet" element={<Worksheet/>} />
            <Route  path="/directive" element={<Directmanage/>}/>
            
            <Route path="/roles" element={<Roletable/>} />
            <Route path="/calendar" element={<Fullcalender/>} />  
            <Route path="/user" element={<User/>} />  

          </Routes>
          
          </>
    
         
    
        }
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
