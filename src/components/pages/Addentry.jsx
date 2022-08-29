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
} from "@mui/material";
import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import { useState } from "react";
import { DropzoneDialog } from "material-ui-dropzone";
import InputSlider from "../FormsUI/InputSlider";

const CustButton = styled(Button)(({}) => ({
  backgroundColor: "#ea6",
  borderRadius: "15px",
  color: "#fff",
  maxWidth: "200px",

  "&:hover": {
    backgroundColor: alpha("#ea6", 0.25),
    color: "#ea6",
  },
}));
const Addentry = (props) => {
  const [drop, setDrop] = useState();
  const handleChange = (files) => {
    setDrop({
      files: files,
    });
  };

  const [open, setOpen] = React.useState(false);
  const [file, setFiles] = useState();

  return (
    <>
      <Grid item xs={12} md={12} lg={12} sx={{ p: 2 }}>
        <Grid item xs={12} md={12} lg={12}>
          <Typography>Sigle Entry</Typography>

          <Paper
            sx={{
              margin: "10px",
              p: 2,
              display: "flex",
              flexDirection: "column",
              // height: 240,
            }}
          >
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Country name</TableCell>
                  <TableCell>India</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Code</TableCell>
                  <TableCell>IND</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Risk Score</TableCell>
                  <TableCell><InputSlider/></TableCell>
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
                          control={<Radio />}
                          label="Enable"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Disable"
                        />
                      </RadioGroup>
                    </FormControl>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
          <Typography sx={{p:1}}>Bulk Entry</Typography>
          <Paper sx={{ display:"flex",justifyContent:"space-around",p:2}}>
              <CustButton onClick={() => setOpen(true)}>Browse File</CustButton>
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
              <CustButton style={{}} variant="contained" component="label">
                Upload
              </CustButton>
            </Paper>
            </Grid>
        
      </Grid>
    </>
  );
};

export default Addentry;
