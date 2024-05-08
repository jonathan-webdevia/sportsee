import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";

import { Dashboard } from "./pages/Dashboard/Dashboard";
import { GlobalStyle } from "./utils/style/GlobalStyle";
import reportWebVitals from "./reportWebVitals";

async function initApp() {
  ReactDOM.render(
    <React.StrictMode>
      <GlobalStyle />
      <Router>
        <Route exact path="/">
          <Redirect to="/dashboard/12" />
        </Route>
        <Route path="/dashboard/:userId">
          <Dashboard />
        </Route>
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

initApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
