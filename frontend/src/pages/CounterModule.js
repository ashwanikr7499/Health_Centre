import React from "react";
import MainCounterTable from "../core/MainCounterTable";
import CreateMedicineDialog from "../core/components/CreateMedicineDialog";
export default function CounterModule(props) {
  return (
    <div>
      <h2 style={{ color: "#ffffff" }}>Counter Module</h2>
      <CreateMedicineDialog/>
      
      <MainCounterTable />
    </div>
  );
}
