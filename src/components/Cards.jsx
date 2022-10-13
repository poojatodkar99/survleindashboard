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
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { agents, beneficiary, countries, currencies, customers, customer_types, exchange, id_types, income_sources, payment, professions, services, suspicious, transaction_types } from "./secondaryIcons";


const Cards = () => {
  const [active,setActive] = useState(false)
  const [PresentComp,setPresentComp] = useState(null)
  const navigate = useNavigate()
  const {cardname} = useParams()


  const switchComp = ()=>{
    if(cardname){ 
      setActive(true)
      switch(cardname){
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
      default:{
        setPresentComp(<h1>Not Found</h1>)

      }  
    }}
    
  }

  


  useEffect(switchComp,[cardname])
  
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
          height: "100%",
          // overflow: "auto",
          // marginTop: "60px",
          
        
          
        }}
      >
        {/* <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}> */}
          <Grid container >
            {/* Chart */}

            <section className={active?"home-section active":"home-section"}>
              <div class="card_wrapper wrapper-1">
                <div class="card" onClick={()=>{setActive(true); navigate("/cards/countries")}}>
                  {countries}<span className="cardName">Countries</span>
                  <div className="total">05</div>
                </div>
                <div class="card" onClick={()=>{setActive(true); navigate("/cards/currencies")}}>
                  {" "}
                  {currencies} <span className="cardName">Currencies</span>{" "}
                  <div className="total">05</div>
                </div>

                <div class="card" onClick={()=>{setActive(true); navigate("/cards/exchange branches")}}>
                  {" "}
                  {exchange} <span className="cardName">Exchange Branches</span>{" "}
                  <div className="total">05</div>
                </div>
                <div class="card" onClick={()=>{setActive(true); navigate("/cards/agent")}}>
                  {" "}
                  {agents} <span className="cardName">Agent</span>{" "}
                  <div className="total">05</div>
                </div>
              </div>
              <div class="card_wrapper wrapper-2">
                <div id="RowSecond" class="card" onClick={()=>{setActive(true); navigate("/cards/transaction types")}}>
                  {" "}
                  {transaction_types} <span className="cardName">Transaction Types</span>{" "}
                  <div className="total">05</div>
                </div>
                <div id="RowSecond" class="card" onClick={()=>{setActive(true); navigate("/cards/service types")}}>
                  {" "}
                  {services} <span className="cardName">Service Type</span>{" "}
                  <div className="total">05</div>
                </div>
                <div id="RowSecond" class="card" onClick={()=>{setActive(true); navigate("/cards/payment modes")}}>
                  {" "}
                  {payment} <span className="cardName">Payment Modes</span>{" "}
                  <div className="total">05</div>
                </div>
              </div>
              <div class="card_wrapper wrapper-3">
                <div class="card" onClick={()=>{setActive(true); navigate("/cards/suspicious words")}}>
                  {" "}
                  {suspicious} <span className="cardName">Suspicious words</span>{" "}
                  <div className="total">05</div>
                </div>
                <div class="card" onClick={()=>{setActive(true); navigate("/cards/income sources")}}>
                  {" "}
                  {income_sources} <span className="cardName">Income Sources</span>{" "}
                  <div className="total">05</div>
                </div>
                <div class="card" onClick={()=>{setActive(true); navigate("/cards/id types")}}>
                  {" "}
                  {id_types} <span className="cardName">ID Types</span>{" "}
                  <div className="total">05</div>
                </div>
              </div>
              <div class="card_wrapper wrapper-4">
                <div class="card" onClick={()=>{setActive(true); navigate("/cards/professions")}}>
                  {" "}
                  {professions} <span className="cardName">Professions</span>{" "}
                  <div className="total">05</div>
                </div>
                <div class="card" onClick={()=>{setActive(true); navigate("/cards/beneficiary")}}>
                  {" "}
                  {beneficiary} <span className="cardName">Beneficiary</span>{" "}
                  <div className="total">05</div>
                </div>
                <div class="card" onClick={()=>{setActive(true); navigate("/cards/customer types")}}>
                  {" "}
                  {customer_types} <span className="cardName">Customer Types</span>{" "}
                  <div className="total">05</div>
                </div>
                <div class="card" onClick={()=>{setActive(true); navigate("/cards/customers")}}>
                  {" "}
                  {customers} <span className="cardName">Customers</span>{" "}
                  <div className="total">05</div>
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
        {/* </Container> */}
      </Box>
    </>
  );
};

export default Cards;
