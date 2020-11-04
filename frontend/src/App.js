import React from "react";
import "./App.css";
import NavTabs from "./pages/NavTabs";
import AppointmentModule from "./pages/AppointmentModule";
import CounterModule from "./pages/CounterModule";
import StockTransferModule from "./pages/StockTransferModule";
import { Switch, Route } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
import history from "./HistoryContainer/History";
import { Router } from "react-router-dom";

function App() {
  return (
    <Router history={history}>
      <div className="App" style={{ background: "#000000" }}>
        <NavTabs />
        <Switch>
          <Route path="/stock" exact component={StockTransferModule} />
          <Route path="/counter" exact component={CounterModule} />
          <Route path="/appointment" exact component={AppointmentModule} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
