import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import Button from "@material-ui/core/Button";
import MainCounterFormDialog from "./components/MainCounterFormDialog";
import TextField from "@material-ui/core/TextField";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function MainCounterTable() {
  const classes = useStyles();

  const [mainTableRows, setMainTableRows] = useState([]);
  const [searchedMedicineName, setSearchedMedicineName] = useState([]);
  useEffect(() => {
    const apiUrl = "http://localhost:8000/api/medicines/";
    axios.get(apiUrl, { params: { med_name: searchedMedicineName } }).then((repos) => {
      setMainTableRows(repos.data);
    });
  }, [searchedMedicineName]);
  return (
    <TableContainer component={Paper}>
      <TextField
        autoFocus
        margin="dense"
        id="name"
        value={searchedMedicineName}
        onChange={(event) => {
          setSearchedMedicineName(event.target.value);
        }}
        label="Search by Medicine NAME"
        type="text"
        fullWidth
      />
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ background: "#808080", fontSize: 18, fontWeight: "bold" }}>ID</TableCell>
            <TableCell align="right" style={{ background: "#808080", fontSize: 18, fontWeight: "bold" }}>
              Medicine Name
            </TableCell>
            <TableCell align="right" style={{ background: "#808080", fontSize: 18, fontWeight: "bold" }}>
              Medicine Batch Number
            </TableCell>
            <TableCell align="right" style={{ background: "#808080", fontSize: 18, fontWeight: "bold" }}>
              Quantity
            </TableCell>
            <TableCell align="right" style={{ background: "#808080", fontSize: 18, fontWeight: "bold" }}>
              Updated At
            </TableCell>
            <TableCell align="right" style={{ background: "#808080", fontSize: 18, fontWeight: "bold" }}>
              Operation
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mainTableRows.map((row, index) => (
            <TableRow key={row.id} style={index % 2 ? { background: "#d3d3d3" } : { background: "white" }}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.med_name}</TableCell>
              <TableCell align="right">{row.med_batchNo}</TableCell>
              <TableCell align="right">{row.med_qty}</TableCell>
              <TableCell align="right">
                {(() => {
                  var x = row.updatedAt;
                  return new Date(x).toLocaleString(undefined, {
                    timeZone: "Asia/Kolkata",
                  });
                })()}
              </TableCell>
              <TableCell align="right">
                {/* <a href="#" class="btn btn-icon icon-left btn-warning">
                  <i class="fas fa-exclamation-triangle"></i>
                </a> */}
                <MainCounterFormDialog row={row} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
