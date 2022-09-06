import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Organize from './Organize';
import { IconButton, Paper } from '@mui/material';
import CancelIcon from "@mui/icons-material/Cancel";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
borderRadius:"20px",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
//   p: 4,
};

export default function Modalpopup(props) {
//   const [open, setOpen] = React.useState(props.open);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

  return (
    <Paper sx={{ display:"flex",justifyContent:"space-around"}}>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
      
           < IconButton sx={{float:"right"}} onClick={props.handleClose} aria-label="delete">
                  <CancelIcon />
                </IconButton>

        {props.show}

        
        </Box>
      </Modal>
    </Paper>
  );
}
