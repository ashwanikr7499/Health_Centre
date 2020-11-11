import React, { useEffect } from "react";
import ReactExport from "react-export-excel";
import axios from "axios";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
export default function DownloadCounterMedicines(props) {
  const [dataSet1, setdataSet1] = React.useState([]);

  useEffect(() => {
    const apiUrl = "http://localhost:8000/api/medicines/";
    axios.get(apiUrl).then((repos) => {
      console.log("ashu" + JSON.stringify(repos.data));
      repos.data.map((each_row) => {
        dataSet1.push({
          med_name: each_row.med_name,
          med_batchNo: each_row.med_batchNo,
          med_qty: each_row.med_qty,
        });
      });
    });
  }, []);

  return (
    <ExcelFile>
      <ExcelSheet data={dataSet1} name="Counter Medicines">
        <ExcelColumn label="Medicine name" value="med_name" />
        <ExcelColumn label="Medicine Batch NO" value="med_batchNo" />
        <ExcelColumn label="Medicine Quantity" value="med_qty" />
      </ExcelSheet>
    </ExcelFile>
  );
}
