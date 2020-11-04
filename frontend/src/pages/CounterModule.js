import React from "react";
import MainCounterTable from "../core/MainCounterTable";
export default function CounterModule(props) {
  return (
    <div>
      <h2>Counter Module</h2>
      <div class="buttons">
       
       
        <a href="#" class="btn btn-outline-primary">
          Medicine Return
        </a>
        
      </div>
      <MainCounterTable />
    </div>
  );
}
