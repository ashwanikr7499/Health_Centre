import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Icon from "@material-ui/core/Icon";
import axios from "axios";

export default function StockCounterFormDialog({ row }) {
  const [open, setOpen] = React.useState(false);
  const [textInput, setTextInput] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseAndSubmit = async () => {
    if (parseInt(textInput) > parseInt(row.med_qty)) {
      alert("Cant transfer ");
    } else {
      var toDecrease = parseInt(row.med_qty) - parseInt(textInput);
      //decrease  from stock counter
      const api_stock_med = "http://localhost:8000/api/stock_medicines/" + row.id;
      await axios.put(api_stock_med, { med_qty: toDecrease }).then((repos) => {});

      //add to main counter
      const api_main_med = "http://localhost:8000/api/medicines/";
      var mainCounterTableData;
      await axios.get(api_main_med).then((repos) => {
        mainCounterTableData = repos.data;
        let found = 0;
       
        mainCounterTableData.map((each_row) => {
          if (each_row.med_name === row.med_name) {
            var toIncrease = parseInt(textInput) + parseInt(each_row.med_qty);

            axios.put(api_main_med + each_row.id, { med_qty: toIncrease }).then((repos) => {});
            found = 1;
          }
        });
        console.log("found=" + found);
        if (found === 0) {
          axios
            .post(api_main_med, { med_name: row.med_name, med_batchNo: row.med_batchNo, med_qty: textInput })
            .then((repos) => {});
        }
        window.location.reload();
      });
    }

    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        size="small"
        color="primary"
        onClick={handleClickOpen}
        endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Medicine Transfer</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter quantity to transfer to Main Counter</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            onChange={(event) => {
              setTextInput(event.target.value);
              // console.log(event.target.value);
            }}
            label="Quantity>0"
            type="number"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseAndSubmit} color="primary">
            Transfer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
