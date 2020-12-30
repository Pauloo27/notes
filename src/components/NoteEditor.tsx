import * as React from "react";
import "./NoteEditor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

interface NoteEditorProps {
  onSave: Function;
}

export default function NoteEditor(props: NoteEditorProps) {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  const handleSave = () => {
    props.onSave(title, body);
  };

  return (
    <div id="note-editor-container">
      <div>
        <input
          id="title-input"
          type="text"
          placeholder="Note title"
          className="input"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleSave} className="btn-default btn-icon m-10">
          <FontAwesomeIcon icon={faSave} />
        </button>
      </div>
      <textarea
        rows={15}
        placeholder="Note content"
        className="input"
        onChange={(e) => setBody(e.target.value)}
      />
    </div>
  );
}
