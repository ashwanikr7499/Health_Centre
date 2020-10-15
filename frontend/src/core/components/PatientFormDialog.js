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

export default function PatientFormDialog({ row }) {
  const [open, setOpen] = React.useState(false);
  const [pat_visitor_id, set_pat_visitor_id] = React.useState(row.pat_visitor_id);
  const [pat_name, set_pat_name] = React.useState(row.pat_name);
  const [pat_prel, set_pat_prel] = React.useState(row.pat_prel);
  const [pat_mid, set_pat_mid] = React.useState(row.pat_mid);
  const [pat_dose, set_pat_dose] = React.useState(row.set_pat_dose);
  const [pat_ndays, set_pat_ndays] = React.useState(row.pat_ndays);
  const [pat_mqty, set_pat_mqty] = React.useState(row.pat_visit_date);
  const [pat_visit_date, set_pat_visit_date] = React.useState(row.pat_visit_date);
  const [pat_doc_id, set_pat_doc_id] = React.useState(row.pat_doc_id);
  const [pat_m_status, set_pat_m_status] = React.useState(row.pat_m_status);
  const [pat_med_issued_by, set_pat_med_issued_by] = React.useState(row.pat_med_issued_by);
  const [pat_med_issued_on, set_pat_med_issued_on] = React.useState(row.pat_med_issued_on);
  const [pat_vis_no, set_pat_visit_no] = React.useState(row.pat_visit_no);
  const [pat_press_no, set_pat_press_no] = React.useState(row.pat_press_no);
  const [pat_batch_no, set_pat_batch_no] = React.useState(row.pat_batch_no);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseAndSubmit = () => {
    const apiUrl = "http://localhost:8000/api/patients/" + row.id;
    axios
      .put(apiUrl, {
        pat_mid: pat_mid,
        pat_dose: pat_dose,
        pat_ndays: pat_ndays,
        pat_mqty: pat_mqty,
        pat_visit_date: pat_visit_date,
        pat_doc_id: pat_doc_id,
        pat_m_status: pat_m_status,
        pat_med_issued_by: pat_med_issued_by,
        pat_med_issued_on: pat_med_issued_on,
        pat_vis_no: pat_vis_no,
        pat_press_no: pat_press_no,
        pat_batch_no: pat_batch_no,
      })
      .then((repos) => {});

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
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={pat_visitor_id}
            onChange={(event) => {
              set_pat_visitor_id(event.target.value);
            }}
            label="Patient id"
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
            label="Patient name"
            type="text"
            fullWidth
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={pat_prel}
            onChange={(event) => {
              set_pat_prel(event.target.value);
            }}
            label="Patient Relation"
            type="text"
            fullWidth
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={pat_mid}
            onChange={(event) => {
              set_pat_mid(event.target.value);
            }}
            label="Patient mid"
            type="text"
            fullWidth
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={pat_dose}
            onChange={(event) => {
              set_pat_dose(event.target.value);
            }}
            label="Patient Dose"
            type="text"
            fullWidth
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={pat_ndays}
            onChange={(event) => {
              set_pat_ndays(event.target.value);
            }}
            label="Patient N days"
            type="text"
            fullWidth
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={pat_mqty}
            onChange={(event) => {
              set_pat_mqty(event.target.value);
            }}
            label="Medicine Quantity"
            type="text"
            fullWidth
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={pat_visit_date}
            onChange={(event) => {
              set_pat_visit_date(event.target.value);
            }}
            label="Enter Visit Date"
            type="text"
            fullWidth
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={pat_doc_id}
            onChange={(event) => {
              set_pat_doc_id(event.target.value);
            }}
            label="Doctor ID"
            type="text"
            fullWidth
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={pat_m_status}
            onChange={(event) => {
              set_pat_m_status(event.target.value);
            }}
            label="M Status"
            type="text"
            fullWidth
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={pat_med_issued_by}
            onChange={(event) => {
              set_pat_med_issued_by(event.target.value);
            }}
            label="Medicine Issued By"
            type="text"
            fullWidth
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={pat_med_issued_on}
            onChange={(event) => {
              set_pat_med_issued_on(event.target.value);
            }}
            label="Medicine issued on"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={pat_vis_no}
            onChange={(event) => {
              set_pat_visit_no(event.target.value);
            }}
            label="Visit Number"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={pat_press_no}
            onChange={(event) => {
              set_pat_press_no(event.target.value);
            }}
            label="Press Number"
            type="text"
            fullWidth
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={pat_batch_no}
            onChange={(event) => {
              set_pat_batch_no(event.target.value);
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
