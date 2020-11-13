import React from "react";

import StockCounterTable from "../core/StockCounterTable";
import DownloadStockMedicines from "../core/components/Downloads/DownloadStockMedicines";
import AddMedicineDialog from "../core/components/AddMedicineDialog";
export default function StockTransferModule(props) {
  return (
    <div>
      <h2 style={{ color: "#ffffff" }}>Stock Transfer Counter</h2>
      <AddMedicineDialog/>
      <StockCounterTable />
      <DownloadStockMedicines />
    </div>
  );
}
