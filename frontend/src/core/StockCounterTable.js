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
import StockCounterFormDialog from "./components/StockCounterFormDialog";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function StockCounterTable() {
  const classes = useStyles();

  const [stockTableRows, setStockTableRows] = useState([]);
  useEffect(() => {
    const apiUrl = "http://localhost:8000/api/stock_medicines/";
    axios.get(apiUrl).then((repos) => {
      setStockTableRows(repos.data);
    });
  }, []);
  function addToMainCounter(id) {
    console.log(id);
  }
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ background: "#808080" }}>ID</TableCell>
            <TableCell align="right" style={{ background: "#808080" }}>
              Medicine Name
            </TableCell>
            <TableCell align="right" style={{ background: "#808080" }}>
              Medicine Batch Number
            </TableCell>
            <TableCell align="right" style={{ background: "#808080" }}>
              Quantity
            </TableCell>
            <TableCell align="right" style={{ background: "#808080" }}>
              Updated At
            </TableCell>
            <TableCell align="right" style={{ background: "#808080" }}>
              Operation
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stockTableRows.map((row, index) => (
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
              <TableCell align="right" onClick={() => addToMainCounter(row.id)}>
                {/* <a href="#" class="btn btn-icon icon-left btn-warning">
                  <i class="fas fa-exclamation-triangle"></i> */}
                <StockCounterFormDialog row={row} />
                {/* </a> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
