import * as React from "react";
import Note from "~/src/Note";
import { useParams, Redirect } from "react-router-dom";
import { formatDateTime } from "~/src/Utils";
import "./View.css";

interface ViewProps {
  store: Function;
}

export default function View(props: ViewProps) {
  const { id } = useParams();
  const note: Note | undefined = props.store((state: any) => state.notes)[id];
  if (note === undefined) return <Redirect to="/" />;
  return (
    <div id="main-container">
      <div id="note-header">
        <span id="note-title">{note!.title}</span>
        <span id="note-created">
          {formatDateTime(new Date(note.createdAt))}
        </span>
      </div>
      <pre id="note-body">{note!.body}</pre>
    </div>
  );
}
