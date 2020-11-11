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
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function PatientTable() {
  const classes = useStyles();
  const [patientTableRows, setPatientTableRows] = useState([]);
  const [searchedPatientName, setSearchedPatientName] = useState([]);
  useEffect(() => {
    const apiUrl = "http://localhost:8000/api/patients/";
    axios.get(apiUrl, { params: { pat_name: searchedPatientName } }).then((repos) => {
      setPatientTableRows(repos.data);
    });
  }, [searchedPatientName]);

  return (
    <TableContainer component={Paper}>
      <TextField
        autoFocus
        margin="dense"
        id="name"
        value={searchedPatientName}
        onChange={(event) => {
          setSearchedPatientName(event.target.value);
        }}
        label="Search by PATIENT NAME"
        type="text"
        fullWidth
      />
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right" style={{ background: "#808080", fontSize: 18, fontWeight: "bold" }}>
              Patient ID
            </TableCell>
            <TableCell align="right" style={{ background: "#808080", fontSize: 18, fontWeight: "bold" }}>
              Patient Visitor ID
            </TableCell>
            <TableCell align="right" style={{ background: "#808080", fontSize: 18, fontWeight: "bold" }}>
              Name{" "}
            </TableCell>
            <TableCell align="right" style={{ background: "#808080", fontSize: 18, fontWeight: "bold" }}>
              Relation
            </TableCell>
            <TableCell align="right" style={{ background: "#808080", fontSize: 18, fontWeight: "bold" }}>
              Mid
            </TableCell>
            <TableCell align="right" style={{ background: "#808080", fontSize: 18, fontWeight: "bold" }}>
              Dose
            </TableCell>
            <TableCell align="right" style={{ background: "#808080", fontSize: 18, fontWeight: "bold" }}>
              n_days
            </TableCell>
            <TableCell align="right" style={{ background: "#808080", fontSize: 18, fontWeight: "bold" }}>
              m_qty
            </TableCell>
            <TableCell align="right" style={{ background: "#808080", fontSize: 18, fontWeight: "bold" }}>
              Visit Date
            </TableCell>
            <TableCell align="right" style={{ background: "#808080", fontSize: 18, fontWeight: "bold" }}>
              Doctor id
            </TableCell>
            <TableCell align="right" style={{ background: "#808080", fontSize: 18, fontWeight: "bold" }}>
              m_status
            </TableCell>
            <TableCell align="right" style={{ background: "#808080", fontSize: 18, fontWeight: "bold" }}>
              med_issued_by
            </TableCell>
            <TableCell align="right" style={{ background: "#808080", fontSize: 18, fontWeight: "bold" }}>
              med_issued_on
            </TableCell>
            <TableCell align="right" style={{ background: "#808080", fontSize: 18, fontWeight: "bold" }}>
              Visit No
            </TableCell>
            <TableCell align="right" style={{ background: "#808080", fontSize: 18, fontWeight: "bold" }}>
              Press No
            </TableCell>
            <TableCell align="right" style={{ background: "#808080", fontSize: 18, fontWeight: "bold" }}>
              Batch No
            </TableCell>
            <TableCell align="right" style={{ background: "#808080", fontSize: 18, fontWeight: "bold" }}>
              Operation
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patientTableRows.map((row, index) => (
            <TableRow key={row.id} style={index % 2 ? { background: "#d3d3d3" } : { background: "white" }}>
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
