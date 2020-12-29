import * as React from "react";
import { 
  BrowserRouter as Router, Switch, Route, Redirect
} from "react-router-dom";
import Home from "./pages/home/index";
import "./styles/App.css";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="*">
          <Redirect to="/"/>
        </Route>
      </Switch>
    </Router>
  );
}
