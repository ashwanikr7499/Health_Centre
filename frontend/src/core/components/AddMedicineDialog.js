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

export default function AddMedicineFormDialog() {
  const [open, setOpen] = React.useState(false);
  const [med_name, set_med_name] = React.useState("");
  const [med_batchNo, set_med_batchNo] = React.useState("");
  const [med_qty, set_med_qty] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseAndSubmit = async () => {
    const apiUrl = "http://localhost:8000/api/stock_medicines/";
    await axios
      .post(apiUrl, {
        med_name,
        med_batchNo,
        med_qty,
      })
      .then((repos) => {});

    setOpen(false);
    window.location.reload();
  };

  return (
    <div>
      <div class="buttons">
        <a href="#" class="btn btn-outline-primary" onClick={handleClickOpen}>
          Add Medicine
        </a>
      </div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Medicine to Stock</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={med_name}
            onChange={(event) => {
              set_med_name(event.target.value);
            }}
            label="Medicine Name"
            type="text"
            fullWidth
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={med_batchNo}
            onChange={(event) => {
              set_med_batchNo(event.target.value);
            }}
            label="Medicine Batch no."
            type="text"
            fullWidth
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={med_qty}
            onChange={(event) => {
              set_med_qty(event.target.value);
            }}
            label="medicine quantity"
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
