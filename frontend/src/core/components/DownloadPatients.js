import React, { useEffect } from "react";
import ReactExport from "react-export-excel";
import axios from "axios";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
export default function DownloadPatients(props) {
  const [dataSet1, setdataSet1] = React.useState([]);

  useEffect(() => {
    const apiUrl = "http://localhost:8000/api/patients/";
    axios.get(apiUrl).then((repos) => {
      console.log("ashu" + JSON.stringify(repos.data));
      repos.data.map((each_row) => {
        dataSet1.push({
          pat_visitor_id: each_row.pat_visitor_id,
          pat_name: each_row.pat_name,
          pat_prel: each_row.pat_prel,
          pat_mid: each_row.pat_mid,
          pat_dose: each_row.pat_dose,
          pat_ndays: each_row.pat_ndays,
          pat_mqty: each_row.pat_mqty,
          pat_visit_date: each_row.pat_visit_date,
          pat_doc_id: each_row.pat_doc_id,
          pat_m_status: each_row.pat_m_status,
          pat_med_issued_by: each_row.pat_med_issued_by,
          pat_med_issued_on: each_row.pat_med_issued_on,
          pat_visit_no: each_row.pat_visit_no,
          pat_press_no: each_row.pat_press_no,
          pat_batch_no: each_row.pat_batch_no,
        });
      });
    });
  }, []);

  return (
    <ExcelFile>
      <ExcelSheet data={dataSet1} name="Patients">
        <ExcelColumn label="Visitor id" value="pat_visitor_id" />
        <ExcelColumn label="Pat name" value="pat_name" />
        <ExcelColumn label="Pat Relation" value="pat_prel" />
        <ExcelColumn label="Pat Mid" value="pat_mid" />
        <ExcelColumn label="Pat Dose" value="pat_dose" />
        <ExcelColumn label="Pat N days" value="pat_ndays" />
        <ExcelColumn label="Pat P rel" value="pat_prel" />
        <ExcelColumn label="pat mQty" value="pat_mqty" />
        <ExcelColumn label="pat visit Date" value="pat_visit_date" />
        <ExcelColumn label="Pat doc id" value="pat_doc_id" />
        <ExcelColumn label="Pat m status" value="pat_m_status" />
        <ExcelColumn label="Pat med issued by" value="pat_med_issued_by" />
        <ExcelColumn label="Pat med issued on" value="pat_med_issued_on" />
        <ExcelColumn label="Pat visit no." value="pat_visit_no" />
        <ExcelColumn label="Pat press no." value="pat_press_no" />
        <ExcelColumn label="Pat batch no." value="pat_batch_no" />
      </ExcelSheet>
    </ExcelFile>
  );
}
