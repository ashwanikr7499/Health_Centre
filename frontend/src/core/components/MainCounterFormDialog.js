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
  const [open2, setOpen2] = React.useState(false);
  const [textInput, setTextInput] = React.useState("");
  const [pat_id, set_pat_id] = React.useState("");
  const [pat_mqty, set_pat_mqty] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleCloseAndSubmit = async () => {
    const apiUrl = "http://localhost:8000/api/medicines/" + row.id;
    await axios.put(apiUrl, { med_batchNo: textInput }).then((repos) => {});

    setOpen(false);
    window.location.reload();
  };
  const handleCloseAndSubmit2 = async () => {
    var newqty = parseInt(row.med_qty) - parseInt(pat_mqty);
    if (newqty < 0) {
      alert("Medicine quantity not available");
      return;
    }
    const apiUrl = "http://localhost:8000/api/patients/" + pat_id;
    var x;
    await axios.get(apiUrl, {}).then((repos) => {
      x = repos.data.pat_batch_no;
    });
    await axios
      .put(apiUrl, { pat_batch_no: x + " " + row.med_batchNo, pat_mqty: pat_mqty })
      .then((repos) => {});

    const apiUrl2 = "http://localhost:8000/api/medicines/" + row.id;
    await axios.put(apiUrl2, { med_qty: newqty }).then((repos) => {});

    setOpen2(false);
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
      <a href="#" class="btn btn-outline-primary" onClick={handleClickOpen2}>
        Issue
      </a>
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
      <Dialog open={open2} onClose={handleClose2} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Issue Medicine ({row.med_name})</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            onChange={(event) => {
              set_pat_id(event.target.value);
            }}
            label="Patent ID"
            type="number"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            onChange={(event) => {
              set_pat_mqty(event.target.value);
            }}
            label="Med quantity"
            type="Number"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseAndSubmit2} color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
