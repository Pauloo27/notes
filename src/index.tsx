import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

if("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js")
  .then(() => console.log("Service worker registered"))
  .catch(() => console.log("Falied to load server worker"))
} else {
  console.log("Service worker not supported");
}
ReactDOM.render(<App />, document.getElementById("root"));
