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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function MainCounterTable() {
  const classes = useStyles();

  const [mainTableRows, setMainTableRows] = useState([]);
  useEffect(() => {
    const apiUrl = "http://localhost:8000/api/medicines/";
    axios.get(apiUrl).then((repos) => {
      setMainTableRows(repos.data);
    });
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Medicine Name</TableCell>
            <TableCell align="right">Medicine Batch Number</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Updated At</TableCell>
            <TableCell align="right">Operation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mainTableRows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.med_name}</TableCell>
              <TableCell align="right">{row.med_batchNo}</TableCell>
              <TableCell align="right">{row.med_qty}</TableCell>
              <TableCell align="right">{row.updatedAt}</TableCell>
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
