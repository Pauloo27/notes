import * as React from "react";
import "./NoteEditor.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSave} from "@fortawesome/free-solid-svg-icons";

export default function NoteEditor() {
  return (
    <div id="note-editor-container">
      <div>
        <input id="title-input" type="text" placeholder="Note title" className="input"/>
        <button className="btn-default btn-icon m-10"><FontAwesomeIcon icon={faSave} /></button>
      </div>
      <textarea rows={15} placeholder="Note content" className="input" />
    </div>
  );
}
