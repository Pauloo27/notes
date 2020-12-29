import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <h1>Notes</h1>
      <button className="btn-default btn-icon">
        <FontAwesomeIcon icon={faPlus} color="#f8f8f2" />
      </button>
    </header>
  );
}
