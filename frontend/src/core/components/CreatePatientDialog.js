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

export default function CreatePatientDialog() {
  const [open, setOpen] = React.useState(false);
  const [pat_visitor_id, set_pat_visitor_id] = React.useState("");
  const [pat_name, set_pat_name] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseAndSubmit = async () => {
    const apiUrl = "http://localhost:8000/api/patients/";
    await axios
      .post(apiUrl, {
        pat_visitor_id,
        pat_name,
      })
      .then((repos) => {});

    setOpen(false);
    window.location.reload();
  };

  return (
    <div>
      <div class="buttons">
        <a href="#" class="btn btn-outline-primary" onClick={handleClickOpen}>
          New Patient
        </a>
      </div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Patient Info.</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={pat_visitor_id}
            onChange={(event) => {
              set_pat_visitor_id(event.target.value);
            }}
            label="patient Visitor id"
            type="text"
            fullWidth
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={pat_name}
            onChange={(event) => {
              set_pat_name(event.target.value);
            }}
            label="Patient NAME"
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
