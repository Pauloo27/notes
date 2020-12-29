import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home/index";
import New from "./pages/new/index";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/new" exact>
          <New />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}
