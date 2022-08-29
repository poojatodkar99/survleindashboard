import {
  Box,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import "../style/Countries.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputSlider from "../FormsUI/InputSlider";
// import SelectField from "../FormsUI/SelectField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

const Editentry = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const CountryValues = [
    {
      value: "india",
      label: "India",
    },
    {
      value: "aust",
      label: "Australia",
    },
  ];

  const entryDiv = {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    margin: "10px",
    justifyContent: "space-around",
  };

  return (
    <>
      <Grid
        item
        xs={12}
        md={6}
        lg={6}
        sx={{ p: 2, alignItems: "center", textAlign: "center" }}
      >
        <Paper
          sx={{
            margin: "10px",
            p: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "30ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div style={entryDiv}>
              <Typography>Country</Typography>
              <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel>Age</InputLabel>
                <Select
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  // fullWidth
                >
                  {CountryValues.map((item, index) => (
                    <MenuItem key={index} value={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div style={entryDiv}>
              <Typography>Code</Typography>
              <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel>Age</InputLabel>
                <Select
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  // fullWidth
                >
                  {CountryValues.map((item, index) => (
                    <MenuItem key={index} value={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div style={entryDiv}>
              <Typography>Slider</Typography>
              <InputSlider />
            </div>
            <div style={entryDiv}>
              <Typography>Status</Typography>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="enable"
                    control={<Radio />}
                    label="Enable"
                  />
                  <FormControlLabel
                    value="disable"
                    control={<Radio />}
                    label="Disable"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default Editentry;
