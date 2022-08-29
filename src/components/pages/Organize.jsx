import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const Organize = () => {
  return (
    <>
    <div>

    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="parameter1" />
  <FormControlLabel  control={<Checkbox />} label="parameter2" />
  <FormControlLabel  control={<Checkbox />} label="parameter3" />
</FormGroup>
    </div>
    
    </>
  )
}

export default Organize