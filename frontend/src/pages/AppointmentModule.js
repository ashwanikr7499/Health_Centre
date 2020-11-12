import React from "react";
import PatientTable from "../core/PatientTable";
import CreatePatientDialog from "../core/components/CreatePatientDialog";
import DownloadPatients from "../core/components/Downloads/DownloadPatients";
export default function AppointmentModule(props) {
  return (
    <div>
      <h2 style={{ color: "#ffffff" }}>Appointment Module</h2>
      <CreatePatientDialog />
      <PatientTable
      // style={{ paddingLeft: "50px", boxSizing: "content-box" }}
      />
      <DownloadPatients />
    </div>
  );
}
