import styled from "@emotion/styled";
import {
  alpha,
  Box,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import { useState } from "react";
import { DropzoneDialog } from "material-ui-dropzone";
import { Stack } from "@mui/system";

const CustButton = styled(Button)(({}) => ({
  backgroundColor: "rgb(47, 157, 204)",
  borderRadius: "15px",
  color: "#fff",
  maxWidth: "200px",
  fontSize:"13px",


  "&:hover": {
    backgroundColor: alpha("rgb(47, 157, 204)", 0.25),
    color: "rgb(47, 157, 204)",
  },
}));
const Addrole = (props) => {
  const [drop, setDrop] = useState();
  const handleChange = (files) => {
    setDrop({
      files: files,
    });
  };

  const [open, setOpen] = React.useState(false);
  const [file, setFiles] = useState();

  const [selectedValue, setSelectedValue] = React.useState("a");
  const [selectedValue1, setSelectedValue1] = React.useState("b");

  const [selectedValue2, setSelectedValue2] = React.useState("c");

  const [selectedValue3, setSelectedValue3] = React.useState("d");


  const handleChangeradio = (event) => {
    // const abc = selectedValue;
    setSelectedValue(event.target.value,);
  };
  const handleChangeradio1 = (event) => {
    setSelectedValue1(event.target.value);
  };
  const handleChangeradio2 = (event) => {
    setSelectedValue2(event.target.value);
  };
  const handleChangeradio3 = (event) => {
    setSelectedValue3(event.target.value);
  };


  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChangeradio,
    value: item,
    inputProps: { "aria-label": item },
  });
  const controlProps1 = (item) => ({
    checked: selectedValue1 === item,
    onChange: handleChangeradio1,
    value: item,
    inputProps: { "aria-label": item },
  });
  const controlProps2 = (item) => ({
    checked: selectedValue2 === item,
    onChange: handleChangeradio2,
    value: item,
    inputProps: { "aria-label": item },
  });
  const controlProps3 = (item) => ({
    checked: selectedValue3 === item,
    onChange: handleChangeradio3,
    value: item,
    inputProps: { "aria-label": item },
  });

  return (
    <>

      <Grid item xs={12} md={12} lg={12} sx={{ p: 2 ,display:"flex",}}>
      
        {/* <Grid sx={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}} item xs={12} md={12} lg={12}> */}
        <div className="leftdiv">
        <Typography>Sigle Entry</Typography>

        <Paper
          sx={{
            margin: "10px",
            p: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Roles </TableCell>
                <TableCell>
                  <TextField
                    id="outlined-basic"
                    label="Role name"
                    variant="outlined"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Previleges</TableCell>
                <TableCell>
                  <ul>
                    <li>
                      User Module
                      
                      <Radio    size="small" {...controlProps("a")} color="success" />
                      <Radio    size="small"
                        {...controlProps("b")}
                        sx={{
                          color: "#C21010",
                          "&.Mui-checked": {
                            color: "#C21010",
                          },
                        }}
                      />
                    </li>{" "}
                    <li>
                      Master Module{" "}
                      <Radio      size="small"{...controlProps1("c")} color="success" />
                      <Radio
                        {...controlProps1("d")}
                        sx={{
                          color: "#C21010",
                          "&.Mui-checked": {
                            color: "#C21010",
                          },
                        }}
                        size="small"
                      />
                    </li>{" "}
                    <li>
                      Risk Module{" "}
                      <Radio     size="small" {...controlProps2("e")} color="success" />
                      <Radio
                          size="small"
                        {...controlProps2("f")}
                        sx={{
                          color: "#C21010",
                          "&.Mui-checked": {
                            color: "#C21010",
                          },
                        }}
                      />
                    </li>
                    <li>
                      Transactions Module{" "}
                      
                      <Radio    size="small"
                       {...controlProps3("g")}
                       color="success" />
                      <Radio    size="small"
                        {...controlProps3("h")}
                        sx={{
                          color: "#C21010",
                          "&.Mui-checked": {
                            color: "#C21010",
                          },
                        }}
                      />
                    </li>
                  </ul>
                </TableCell>
              </TableRow>
              
              <TableRow>
                <TableCell>Status</TableCell>
                <TableCell>
               

                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="female"
                        color="success"
                        control={ <Radio     size="small" color="success" />}
                        label="Enable"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio    size="small"
                            // {...controlProps("j")}
                            sx={{
                              color: "#C21010",
                              "&.Mui-checked": {
                                color: "#C21010",
                              },
                            }}
                          />}
                        label="Disable"
                      />
                    </RadioGroup>
                  </FormControl>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Stack direction="row" spacing={2} sx={{display:"flex",justifyContent:"space-around",m:2}}>
             <CustButton>Add</CustButton>


<CustButton variant="contained" component="label">
  Clear
</CustButton>
</Stack>
        </Paper>
        </div>
    <div className="middlediv"></div>
        
       
        <div className="rightdiv">
        <Typography sx={{ p: 1 }}>Bulk Entry</Typography>
        <Paper sx={{p:3}}>

          <DropzoneDialog
            acceptedFiles={["image/*", "video/*"]}
            // acceptedFiles={["image/*"]}
            cancelButtonText={"cancel"}
            submitButtonText={"submit"}
            maxFileSize={500000}
            open={open}
            onClose={() => setOpen(false)}
            onSave={(files) => {
              console.log("Files:", files);
              setFiles(files);
              setOpen(false);
            }}
            showPreviews={true}
            showFileNamesInPreview={true}
          />
                    <Stack direction="row" spacing={2}> <CustButton onClick={() => setOpen(true)}>Browse File</CustButton>


          <CustButton style={{}} variant="contained" component="label">
            Upload
          </CustButton>
          </Stack>
          </Paper>
        </div>
       
      {/* </Grid> */}

      </Grid>
    </>
  );
};

export default Addrole;
