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
import PatientFormDialog from "./components/PatientFormDialog";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function PatientTable() {
  const classes = useStyles();
  const [patientTableRows, setPatientTableRows] = useState([]);
  useEffect(() => {
    const apiUrl = "http://localhost:8000/api/patients/";
    axios.get(apiUrl).then((repos) => {
      setPatientTableRows(repos.data);
    });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Patient ID</TableCell>
            <TableCell align="right">Patient Visitor ID</TableCell>
            <TableCell align="right">Name </TableCell>
            <TableCell align="right">Relation</TableCell>
            <TableCell align="right">Mid</TableCell>
            <TableCell align="right">Dose</TableCell>
            <TableCell align="right">n_days</TableCell>
            <TableCell align="right">m_qty</TableCell>
            <TableCell align="right">Visit Date</TableCell>
            <TableCell align="right">Doctor id</TableCell>
            <TableCell align="right">m_status</TableCell>
            <TableCell align="right">med_issued_by</TableCell>
            <TableCell align="right">med_issued_on</TableCell>
            <TableCell align="right">Visit No</TableCell>
            <TableCell align="right">Press No</TableCell>
            <TableCell align="right">Batch No</TableCell>
            <TableCell align="right">Operation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patientTableRows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>

              <TableCell align="right">{row.pat_visitor_id}</TableCell>
              <TableCell align="right">{row.pat_name}</TableCell>
              <TableCell align="right">{row.pat_prel}</TableCell>
              <TableCell align="right">{row.pat_mid}</TableCell>
              <TableCell align="right">{row.pat_dose}</TableCell>
              <TableCell align="right">{row.pat_ndays}</TableCell>
              <TableCell align="right">{row.pat_mqty}</TableCell>
              <TableCell align="right">{row.pat_visit_date}</TableCell>
              <TableCell align="right">{row.pat_doc_id}</TableCell>
              <TableCell align="right">{row.pat_m_status}</TableCell>
              <TableCell align="right">{row.pat_med_issued_by}</TableCell>
              <TableCell align="right">{row.pat_med_issued_on}</TableCell>
              <TableCell align="right">{row.pat_visit_no}</TableCell>
              <TableCell align="right">{row.pat_press_no}</TableCell>
              <TableCell align="right">{row.pat_batch_no}</TableCell>

              <TableCell align="right">
                {/* <a href="#" class="btn btn-icon btn-info">
                  <i class="fas fa-info-circle"></i>
                </a> */}
                <PatientFormDialog row={row} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
