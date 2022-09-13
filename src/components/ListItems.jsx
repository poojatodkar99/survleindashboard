import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from '@mui/icons-material/School';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import GroupsIcon from '@mui/icons-material/Groups';
import BarChartIcon from "@mui/icons-material/BarChart";
import BalanceIcon from '@mui/icons-material/Balance';
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import {Link, Navigate} from "react-router-dom";

export const MainListItems = (props) => {
  return (
    <React.Fragment>
    
      <Link style={{textDecoration:"none"}} to='/'>
        <ListItemButton  >
          <ListItemIcon>
            <DashboardIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText secondary="Dashboard" />
        </ListItemButton>
      </Link>

      <Link style={{textDecoration:"none"}} to='/cards'>
      <ListItemButton onClick={()=>props.show('orders')}>
        <ListItemIcon>
          <SchoolIcon ontSize="small"  />
        </ListItemIcon>
        <ListItemText secondary="Master" />
      </ListItemButton>
      </Link>
      <Link style={{textDecoration:"none"}} to='/worksheet'>
      <ListItemButton onClick={()=>props.show('Worksheet')}>
        <ListItemIcon>
          <CurrencyExchangeIcon ontSize="small"  />
        </ListItemIcon>
        {/* <Link to='/user-transaction'> */}
        <ListItemText secondary="Transaction" />
        {/* </Link> */}
      </ListItemButton>
      </Link>
      <Link style={{textDecoration:"none"}} to='/user-voilation'>
      <ListItemButton onClick={()=>props.show('reports')}>
        <ListItemIcon  >
          <BalanceIcon ontSize="small"   />
        </ListItemIcon>

        <ListItemText secondary="violations" />
      </ListItemButton>
      </Link>
      <Link style={{textDecoration:"none"}} to='/roles'>
      <ListItemButton>
        <ListItemIcon>
          <GroupsIcon ontSize="small"  />
        </ListItemIcon>
        <ListItemText secondary="Management" />
      </ListItemButton>
      </Link>
      {/* <Link style={{textDecoration:"none"}} to='/calendar'>
      <ListItemButton>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText secondary="Calender" />
      </ListItemButton>
      </Link> */}
    </React.Fragment>
  );
};

export const SecondaryListItems = () => {
  return (
    <React.Fragment>
      <ListSubheader component="div" inset>
        Saved reports
      </ListSubheader>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Current month" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Last quarter" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Year-end sale" />
      </ListItemButton>
    </React.Fragment>
  );
};
