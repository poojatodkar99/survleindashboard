import React, { useState } from "react";
import {
  BsGlobe2,
  BsArrowLeftRight,
  BsSearch,
  BsFillPeopleFill,
} from "react-icons/bs";

import {
  AiOutlineDollarCircle,
  AiOutlineTransaction,
  AiFillSetting,
} from "react-icons/ai";

import { CgProfile } from "react-icons/cg";
import { MdPayments, MdShoppingBag } from "react-icons/md";

import { GrResources } from "react-icons/gr";

import { ImProfile } from "react-icons/im";
import { RiShieldUserFill } from "react-icons/ri";
import { FcBusinessman } from "react-icons/fc";
import "../components/style/Cards.css";
import { Box, Container, Grid, Paper } from "@mui/material";
import EnhancedTable from "./Table";
import Countries from "./pages/Countries";

const Cards = () => {
  const [active,setActive] = useState(false)
  const [PresentComp,setPresentComp] = useState(null)

  const switchComp = (item)=>{
    
    switch(item){
      case 'countries':{
      setPresentComp(<Countries setPresentComp={setPresentComp} setActive={setActive}/>)
      break;
      }
      case 'currencies':{
        setPresentComp()
        break;
      }
      case 'exchange branches':{
        setPresentComp()
        break;
      }
      case 'agent':{
        setPresentComp()
        break;
      }
      case 'transaction types':{
        setPresentComp()
        break;
      }
      case 'service types':{
        setPresentComp()
        break;
      }
      case 'payment modes':{
        setPresentComp()
        break;
      }
      case 'suspicious words':{
        setPresentComp()
        break;
      }
      case 'income sources':{
        setPresentComp()
        break;
      }
      case 'id types':{
        setPresentComp()
        break;
      }
      case 'professions':{
        setPresentComp()
        break;
      }
      case 'beneficiary':{
        setPresentComp()
        break;
      }
      case 'customer types':{
        setPresentComp()
        break;
      }    
      case 'customers':{
        setPresentComp()
        break;
      }    
    }
    
  }
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
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container >
            {/* Chart */}

            <section className={active?"home-section active":"home-section"}>
              <div class="card_wrapper wrapper-1">
                <div class="card" onClick={()=>{setActive(true); switchComp("countries")}}>
                  <BsGlobe2 /> <span className="cardName">Countries</span>{" "}
                </div>
                <div class="card" onClick={()=>{setActive(true); switchComp("currencies")}}>
                  {" "}
                  <AiOutlineDollarCircle /> <span className="cardName">Currencies</span>{" "}
                </div>

                <div class="card" onClick={()=>{setActive(true); switchComp("exchange branches")}}>
                  {" "}
                  <BsArrowLeftRight /> <span className="cardName">Exchange Branches</span>{" "}
                </div>
                <div class="card" onClick={()=>{setActive(true); switchComp("agent")}}>
                  {" "}
                  <CgProfile /> <span className="cardName">Agent</span>{" "}
                </div>
              </div>
              <div class="card_wrapper wrapper-2">
                <div id="RowSecond" class="card" onClick={()=>{setActive(true); switchComp("transaction types")}}>
                  {" "}
                  <AiOutlineTransaction /> <span className="cardName">Transaction Types</span>{" "}
                </div>
                <div id="RowSecond" class="card" onClick={()=>{setActive(true); switchComp("service types")}}>
                  {" "}
                  <AiFillSetting /> <span className="cardName">Service Type</span>{" "}
                </div>
                <div id="RowSecond" class="card" onClick={()=>{setActive(true); switchComp("payment modes")}}>
                  {" "}
                  <MdPayments /> <span className="cardName">Payment Modes</span>{" "}
                </div>
              </div>
              <div class="card_wrapper wrapper-3">
                <div class="card" onClick={()=>{setActive(true); switchComp("suspicious words")}}>
                  {" "}
                  <BsSearch /> <span className="cardName">Suspicious words</span>{" "}
                </div>
                <div class="card" onClick={()=>{setActive(true); switchComp("income sources")}}>
                  {" "}
                  <GrResources  /> <span className="cardName">Income Sources</span>{" "}
                </div>
                <div class="card" onClick={()=>{setActive(true); switchComp("id types")}}>
                  {" "}
                  <ImProfile /> <span className="cardName">ID Types</span>{" "}
                </div>
              </div>
              <div class="card_wrapper wrapper-4">
                <div class="card" onClick={()=>{setActive(true); switchComp("professions")}}>
                  {" "}
                  <MdShoppingBag /> <span className="cardName">Professions</span>{" "}
                </div>
                <div class="card" onClick={()=>{setActive(true); switchComp("beneficiary")}}>
                  {" "}
                  <BsFillPeopleFill /> <span className="cardName">Beneficiary</span>{" "}
                </div>
                <div class="card" onClick={()=>{setActive(true); switchComp("customer types")}}>
                  {" "}
                  <RiShieldUserFill /> <span className="cardName">Customer Types</span>{" "}
                </div>
                <div class="card" onClick={()=>{setActive(true); switchComp("customers")}}>
                  {" "}
                  <FcBusinessman /> <span className="cardName">Customers</span>{" "}
                </div>
              </div>
            </section>

            {PresentComp && <Grid item xs={9} md={8} lg={9}>
              <Paper
                sx={{
                  p: 1,
                  display: "flex",
                  flexWrap:"wrap",
                  flexDirection: "column",
                  // height: 240,
                }}
              >
                {PresentComp }
              </Paper>
            </Grid>}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Cards;
