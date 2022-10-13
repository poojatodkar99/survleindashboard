import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import GroupsIcon from "@mui/icons-material/Groups";
import BarChartIcon from "@mui/icons-material/BarChart";
import BalanceIcon from "@mui/icons-material/Balance";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link, Navigate } from "react-router-dom";

export const MainListItems = (props) => {
  return (
    <React.Fragment>
      <Link style={{ textDecoration: "none" }} to="/">
        <ListItemButton>
          <ListItemIcon>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="20.000000px"
              viewBox="0 0 710.000000 716.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,716.000000) scale(0.100000,-0.100000)"
                fill="#666666"
                stroke="none"
              >
                <path
                  d="M180 3840 l0 -3100 270 0 270 0 0 2820 0 2820 2830 0 2830 0 0 -3090
0 -3090 285 0 285 0 0 3090 0 3090 -285 0 -285 0 0 280 0 280 -3100 0 -3100 0
0 -3100z"
                />
                <path
                  d="M2540 2655 l0 -2485 285 0 285 0 0 2485 0 2485 -285 0 -285 0 0
-2485z"
                />
                <path
                  d="M4460 2335 l0 -2135 285 0 285 0 0 2135 0 2135 -285 0 -285 0 0
-2135z"
                />
                <path d="M740 450 l0 -280 285 0 285 0 0 280 0 280 -285 0 -285 0 0 -280z" />
              </g>
            </svg>
          </ListItemIcon>
          <ListItemText secondary="Dashboard" />
        </ListItemButton>
      </Link>

      <Link style={{ textDecoration: "none" }} to="/cards">
        <ListItemButton onClick={() => props.show("orders")}>
          <ListItemIcon>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="20.000000px"
              viewBox="0 0 586.000000 721.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,721.000000) scale(0.100000,-0.100000)"
                fill="#666666"
                stroke="none"
              >
                <path
                  d="M120 5910 l0 -1200 693 -2 692 -3 3 -2017 2 -2018 1220 0 1220 0 0
625 0 625 620 0 620 0 0 -620 0 -620 -617 -2 -618 -3 -3 -292 -2 -293 915 0
915 0 0 1195 0 1195 -1200 0 -1200 0 0 -625 0 -625 -655 0 -655 0 0 1155 0
1155 935 0 935 0 0 -265 0 -265 920 0 920 0 0 1184 c0 651 -3 1191 -6 1200 -6
14 -119 16 -1185 16 l-1179 0 0 -645 0 -645 -670 0 -670 0 0 565 0 565 270 0
270 0 0 930 0 930 -1245 0 -1245 0 0 -1200z m1928 -2 l-3 -613 -682 -3 -683
-2 0 615 0 615 685 0 685 0 -2 -612z m3172 -1698 l0 -610 -625 0 -625 0 0 610
0 610 625 0 625 0 0 -610z"
                />
              </g>
            </svg>
          </ListItemIcon>
          <ListItemText secondary="Master" />
        </ListItemButton>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/worksheet">
        <ListItemButton onClick={() => props.show("Worksheet")}>
          <ListItemIcon>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="20.000000px"
              viewBox="0 0 661.000000 641.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,641.000000) scale(0.100000,-0.100000)"
                fill="#666666"
                stroke="none"
              >
                <path
                  d="M4382 6253 c41 -43 297 -307 568 -588 l492 -510 -1453 -3 -1454 -2
-1155 -1155 -1155 -1155 365 0 365 1 860 889 860 890 1370 0 1370 0 -125 -127
c-69 -71 -318 -323 -555 -560 l-430 -433 375 0 375 1 700 696 700 695 -725
719 -725 718 -350 1 -350 0 77 -77z"
                />
                <path
                  d="M4781 2599 l-905 -899 -1324 0 c-821 0 -1322 4 -1320 9 2 6 245 260
541 565 295 305 537 558 537 561 0 3 -155 5 -345 5 l-344 0 -698 -694 -698
-695 675 -675 675 -676 370 2 369 3 -538 542 -538 543 1439 0 1440 0 1109
1145 c610 630 1111 1150 1112 1155 2 6 -116 10 -325 9 l-328 0 -904 -900z"
                />
              </g>
            </svg>
          </ListItemIcon>
          <Link to="/user-transaction">
            <ListItemText secondary="Transaction" />
          </Link>
        </ListItemButton>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/user-voilation">
        <ListItemButton onClick={() => props.show("reports")}>
          <ListItemIcon>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="20.000000px"
              viewBox="0 0 863.000000 890.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,890.000000) scale(0.100000,-0.100000)"
                fill="#666666"
                stroke="none"
              >
                <path
                  d="M1977 7308 l-1457 -1433 0 -2862 0 -2863 2840 0 2840 0 0 355 0 355
-2485 0 -2485 0 2 2153 3 2152 1448 3 1447 2 0 1430 0 1430 1029 0 1028 0 7
128 c3 70 7 228 8 352 l3 225 -1386 3 -1386 2 -1456 -1432z m1453 -518 l0
-920 -915 0 c-503 0 -915 3 -915 7 0 7 1821 1833 1827 1833 2 0 3 -414 3 -920z"
                />
                <path
                  d="M6210 5875 l0 -2155 1065 0 1065 0 0 2155 0 2155 -1065 0 -1065 0 0
-2155z m1410 0 l0 -1445 -347 2 -348 3 -3 1443 -2 1442 350 0 350 0 0 -1445z"
                />
                <path
                  d="M6210 1940 l0 -1070 1058 0 1059 0 6 377 c4 207 7 688 7 1070 l0 693
-1065 0 -1065 0 0 -1070z m1410 -5 l0 -355 -350 0 -350 0 0 355 0 355 350 0
350 0 0 -355z"
                />
              </g>
            </svg>{" "}
          </ListItemIcon>

          <ListItemText secondary="violations" />
        </ListItemButton>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/roles">
        <ListItemButton>
          <ListItemIcon>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="20.000000px"
              viewBox="0 0 774.000000 653.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,653.000000) scale(0.100000,-0.100000)"
                fill="#666666"
                stroke="none"
              >
                <path
                  d="M2524 6084 c-504 -84 -901 -471 -1011 -984 -25 -117 -24 -371 1 -488
54 -251 161 -450 340 -628 182 -182 385 -291 641 -345 93 -20 373 -18 472 4
364 78 652 285 835 599 62 106 104 215 136 353 21 90 26 136 26 255 0 80 -6
179 -13 220 -17 96 -70 259 -111 341 -178 356 -523 611 -913 674 -112 18 -293
18 -403 -1z m341 -709 c213 -54 379 -233 415 -446 48 -284 -143 -564 -427
-624 -93 -20 -156 -19 -247 5 -107 27 -169 63 -252 145 -218 217 -219 557 -1
775 68 67 187 134 267 149 72 14 181 12 245 -4z"
                />
                <path
                  d="M4500 5327 l0 -754 188 -6 c205 -8 283 -20 423 -67 414 -138 730
-495 825 -931 24 -112 29 -334 10 -451 -55 -337 -234 -626 -511 -829 -73 -53
-228 -133 -319 -164 -142 -48 -259 -65 -446 -65 l-170 0 0 -765 0 -765 355 0
355 0 2 432 3 432 123 42 c139 48 310 129 426 202 l79 49 161 -166 c88 -91
223 -229 299 -306 l138 -140 116 120 c63 66 171 180 240 253 l125 132 -248
258 c-136 141 -268 278 -292 303 l-44 47 57 93 c110 183 188 371 236 572 l23
97 443 0 443 0 0 360 0 360 -442 2 -442 3 -8 30 c-66 266 -139 452 -249 633
-22 35 -39 68 -39 73 0 5 129 142 288 305 158 162 288 298 290 302 1 4 -106
115 -238 247 l-240 240 -294 -294 -294 -294 -107 68 c-142 89 -283 156 -427
202 l-117 38 -1 428 0 427 -360 0 -360 0 0 -753z"
                />
                <path
                  d="M2634 2820 c-633 -44 -1232 -323 -1661 -774 -383 -403 -614 -890
-688 -1450 -8 -64 -15 -124 -15 -132 0 -12 50 -14 344 -14 l344 0 7 68 c54
536 345 1030 783 1330 330 226 699 332 1107 319 412 -14 752 -135 1083 -385
l32 -24 0 389 0 390 -98 46 c-386 182 -824 266 -1238 237z"
                />
              </g>
            </svg>
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
