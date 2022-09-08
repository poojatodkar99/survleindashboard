import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
// import "../component/Dashboard.css"
import "../components/style/Worksheet.css";
import EnhancedTable from "./Table";
function createData(name, calories, fat) {
  return {
    name,
    calories,
    fat,
  };
}
const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "November Sales",
  },
  {
    id: "calories",
    numeric: true,
    disablePadding: false,
    label: "Quantity",
  },
  {
    id: "fat",
    numeric: true,
    disablePadding: false,
    label: "Total",
  },
  //   {
  //     id: 'carbs',
  //     numeric: true,
  //     disablePadding: false,
  //     label: 'Carbs (g)',
  //   },
  //   {
  //     id: 'protein',
  //     numeric: true,
  //     disablePadding: false,
  //     label: 'Protein (g)',
  //   },
];

const rows = [
  createData("Delivery Channel", "Web/Mobile App	", 1),
  createData("Product", "Others", 4),
  createData("Client Legal Type	", "Individual", 1),
  createData("Customer Type	", "Employed", 1),
  createData("Business Activity", "Taxi", 4),
  createData("Client Structure	", "Beneficial Ownership is clear	", 1),
  createData(
    "Individuals or Family Members who hold/ have held a public position",
    "Does not hold a public position	",
    1
  ),
  //   createData('position', 'Does not hold a public position	',1 ),
  createData("Registered Business address", "Australia", 1),
  createData("Country of Residence	", "Australia", 1),
  createData(
    "Country of Business interest/ Trading partner/Trading address	",
    "Australia",
    3
  ),
];
const title = "Worksheet";
const Worksheet = () => {
  const data = [
    {
      risk: "Delivery Channel",
      desc: "Web/Mobile App",
      scope: "1",
    },
    {
      risk: "Product",
      desc: "Others",
      scope: "4",
    },
    {
      risk: "Client Legal Type",
      desc: "Individual",
      scope: "1",
    },
    {
      risk: "Customer Type",
      desc: "Employed",
      scope: "1",
    },
    {
      risk: "Business Activity",
      desc: "Taxi ",
      scope: "4",
    },
    {
      risk: "Client Structure",
      desc: "Beneficial Ownership is clear",
      scope: "1",
    },
    {
      risk: "Individuals or Family Members who hold/ have held a public position",
      desc: "Does not hold a public position",
      scope: "1",
    },
    {
      risk: "Registered Business address",
      desc: "Australia",
      scope: "1",
    },
    {
      risk: "Country of Residence",
      desc: "Australia",
      scope: "1",
    },
    {
      risk: "Country of Business interest/ Trading partner/Trading address",
      desc: "Australia",
      scope: "3",
    },
  ];

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
          overflow: "auto",
          marginTop: "60px",
        }}
      >
        {/* <Container maxWidth="lg" sx={{ mt: 10, mb: 4 }}> */}
          <Grid container spacing={3} >
            {/* Chart */}
            <Grid item xs={12} md={8} lg={8}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  // height: 240,
                }}
              >
                <div className="recent-sales box">
                  <div className="name-div">
                    <div >
                      {" "}
                      <Typography> Customer Name:  <span>  Rajesh  </span> </Typography>{" "}
                      
                   
                      <Typography> Customer Number:  <span>  9970125545  </span></Typography>{" "}

                      
                    </div>
                  </div>
                  <EnhancedTable
                    rows={rows}
                    headCells={headCells}
                    title={title}
                  />

                  <table className="table-risk">
                    <tr>
                      <td>Risk Score</td>
                      <td>18</td>
                    </tr>{" "}
                    <tr>
                      <td>
                        Risk Rating to the Assigned Customer Before the Enhanced
                        Due Diligence
                      </td>
                      <td>low</td>
                    </tr>
                    <tr>
                      <td>Result</td>
                      <td>proceed</td>
                    </tr>
                  </table>

                  <table className="table-risk">
                    <tr>
                      <td>
                        Public Domain Search Done? (Including the names of all
                        the key controllers/ Beneficial Owners)
                      </td>
                      <td>
                        <span>YES</span>
                      </td>
                    </tr>
                  </table>

                  {/* </div> */}
                </div>
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={4}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  // height: 240,
                }}
              >
                <div className="top-sales box">
                  <table className="table-risk2">
                    <tr>
                      <td>KYC</td>
                      <td>
                        <input type="radio" name="choice-radio7" id="a" />
                        <label htmlFor="a" style={{ padding: "10px" }}>
                          Yes
                        </label>
                      </td>
                      <td>
                        <label style={{ padding: "10px" }}>
                          <input
                            className="radioNo"
                            type="radio"
                            name="choice-radio7"
                          />
                          No
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>Risk rating in CRM</td>
                      <td>
                        <label style={{ padding: "10px" }}>
                          <input type="radio" name="choice-radio" />
                          Yes
                        </label>
                      </td>
                      <td>
                        <label style={{ padding: "10px" }}>
                          <input type="radio" name="choice-radio" />
                          No
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Flagging in EREMIT <br />
                        (incase of Medium/High)
                      </td>
                      <td>
                        <label style={{ padding: "10px" }}>
                          <input type="radio" name="choice-radio1" />
                          Yes
                        </label>
                      </td>
                      <td>
                        <label style={{ padding: "10px" }}>
                          <input type="radio" name="choice-radio1" />
                          No
                        </label>
                      </td>
                    </tr>
                  </table>
                  <div style={{ margin: "30px 0px" }}>
                    <b>Comment</b>
                  </div>
                  <div className="commentdiv">
                    <span>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet.Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Amet minim mollit non deserunt ullamco est
                      sit aliqua dolor do amet sint. Velit officia consequat
                      duis enim velit mollit. Exercitation veniam consequat sunt
                      nostrud amet.Amet minim mollit non deserunt ullamco est
                      sit aliqua dolor do amet sint. Velit officia consequat
                      duis enim velit mollit.
                    </span>
                  </div>
                  <table className="table-risk2">
                    <tr>
                      <td>Final due Diligence</td>
                      <td>
                        <label style={{ padding: "10px" }}>
                          <input type="radio" name="choice-radio2" />
                          Yes
                        </label>
                      </td>
                      <td>
                        <label style={{ padding: "10px" }}>
                          <input type="radio" name="choice-radio2" />
                          No
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>Standard due Diligence</td>
                      <td>
                        <label style={{ padding: "10px" }}>
                          <input type="radio" name="choice-radio3" />
                          Yes
                        </label>
                      </td>
                      <td>
                        <label style={{ padding: "10px" }}>
                          <input type="radio" name="choice-radio3" />
                          No
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>Enhanced due Diligence</td>
                      <td>
                        <label style={{ padding: "10px" }}>
                          <input type="radio" name="choice-radio4" />
                          Yes
                        </label>
                      </td>
                      <td>
                        <label style={{ padding: "10px" }}>
                          <input type="radio" name="choice-radio4" />
                          No
                        </label>
                      </td>
                    </tr>
                  </table>
                </div>
              </Paper>
            </Grid>
            {/* Recent Orders */}
          </Grid>
        {/* </Container> */}
      </Box>
    </>
  );
};

export default Worksheet;
