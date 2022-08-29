import React from "react";
import PropTypes from "prop-types";
import { at } from "lodash";
import { useField } from "formik";
import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  FormHelperText
} from "@mui/material";

function SelectField(props) {
  const { label,data,value  } = props;
//   const [field, meta] = useField(props);
//   const { value: selectedValue } = field;
//   const [touched, error] = at(meta, "touched", "error");
//   const isError = touched && error && true;
//   function _renderHelperText() {
//     if (isError) {
//       return <FormHelperText>{error}</FormHelperText>;
//     }
//   }

  return (
    <FormControl  >
      <InputLabel>{label}</InputLabel>
      <Select
        // {...field}
        label={label}
        value={value}>
        {data.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      {/* {_renderHelperText()} */}
    </FormControl>
  );
}

// SelectField.defaultProps = {
//   data: []
// };

// SelectField.propTypes = {
//   data: PropTypes.array.isRequired
// };

export default SelectField;