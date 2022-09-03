import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import {Link, Navigate} from "react-router-dom";

export const MainListItems = (props) => {
  return (
    <React.Fragment>
      <Link style={{color:"#282c34",textDecoration:"none"}} to='/'>
        <ListItemButton >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </Link>

      <Link style={{color:"#282c34",textDecoration:"none"}} to='/cards'>
      <ListItemButton onClick={()=>props.show('orders')}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Cards" />
      </ListItemButton>
      </Link>
      <Link style={{color:"#282c34",textDecoration:"none"}} to='/worksheet'>
      <ListItemButton onClick={()=>props.show('Worksheet')}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Worksheet" />
      </ListItemButton>
      </Link>
      <Link style={{color:"#282c34",textDecoration:"none"}} to='/directive'>
      <ListItemButton onClick={()=>props.show('reports')}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>

        <ListItemText primary="Reports" />
      </ListItemButton>
      </Link>
      <ListItemButton>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItemButton>
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
