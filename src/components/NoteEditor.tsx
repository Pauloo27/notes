import * as React from "react";
import "./NoteEditor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import Note from "~src/Note";

interface NoteEditorProps {
  onSave: Function;
  note?: Note;
}

export default function NoteEditor(props: NoteEditorProps) {
  const [title, setTitle] = React.useState(props.note ? props.note.title : "");
  const [body, setBody] = React.useState(props.note ? props.note.body : "");

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
          autoComplete="off"
          onChange={(e) => setTitle(e.target.value)}
          defaultValue={title}
        />
        <button onClick={handleSave} className="btn-default btn-icon m-10">
          <FontAwesomeIcon icon={faSave} />
        </button>
      </div>
      <textarea
        rows={15}
        placeholder="Note content"
        className="input"
        defaultValue={body}
        onChange={(e) => setBody(e.target.value)}
      />
    </div>
  );
}
