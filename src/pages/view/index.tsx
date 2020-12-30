import * as React from "react";
import Note from "~/src/Note";
import { useParams, Redirect, Link } from "react-router-dom";
import { formatDateTime } from "~/src/Utils";
import "./View.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

interface ViewProps {
  store: Function;
}

export default function View(props: ViewProps) {
  const { id } = useParams();
  const notes = props.store((state: any) => state.notes);
  const [note, setNote] = React.useState(notes[id]);

  const deleteNote = props.store((state: any) => state.deleteNote);

  const handleDelete = () => {
    deleteNote(note);
    setNote(undefined);
  };

  if (note === undefined) return <Redirect to="/" />;

  return (
    <div id="main-container">
      <div id="note-header">
        <div id="note-info">
          <span id="note-title">{note!.title}</span>
          <span id="note-created">
            {formatDateTime(new Date(note.createdAt))}
          </span>
        </div>
        <div id="note-actions">
          <Link to={`/edit/${note.id}`}>
            <button className="btn-default btn-icon">
              <FontAwesomeIcon icon={faPen} />
            </button>
          </Link>
          <button
            onClick={handleDelete}
            className="btn-default btn-icon btn-danger"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
      <pre id="note-body">{note!.body}</pre>
    </div>
  );
}
