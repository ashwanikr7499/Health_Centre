import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddMedicineDialog from "./AddMedicineDialog";
afterEach(cleanup);
it("renders", () => {
  const { comp1 } = render(<AddMedicineDialog />);
});
