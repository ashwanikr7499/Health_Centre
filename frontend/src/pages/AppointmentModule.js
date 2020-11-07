import React from "react";
import PatientTable from "../core/PatientTable";
import CreatePatientDialog from "../core/components/CreatePatientDialog";
export default function AppointmentModule(props) {
  return (
    <div>
      <h2 style={{ color: "#ffffff" }}>Appointment Module</h2>
      <CreatePatientDialog />
      <PatientTable />
    </div>
  );
}
