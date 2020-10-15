import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Icon from "@material-ui/core/Icon";

import EditIcon from "@material-ui/icons/Edit";
import axios from "axios";

export default function MainCounterFormDialog({ row }) {
  const [open, setOpen] = React.useState(false);
  const [textInput, setTextInput] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseAndSubmit = () => {
    const apiUrl = "http://localhost:8000/api/medicines/" + row.id;
    axios.put(apiUrl, { med_batchNo: textInput }).then((repos) => {});
    
      setOpen(false);
      window.location.reload();
  };

  return (
    <div>
      <Button
        variant="contained"
        size="small"
        color="primary"
        onClick={handleClickOpen}
        endIcon={<EditIcon>send</EditIcon>}
      >
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Batch Number</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter new Batch Number</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            onChange={(event) => {
              setTextInput(event.target.value);
              // console.log(event.target.value);
            }}
            label="Batch No."
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseAndSubmit} color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
