import * as React from "react";
import Note from "~src/Note";
import "./NotePreview.css";
import { Link } from "react-router-dom";
import {formatDateTime} from "~/src/Utils"

interface NotePreviewProps {
  note: Note;
}

export default function NotePreview(props: NotePreviewProps) {
  console.log(props.note);
  return (
    <Link to={`/view/${props.note.id}`} className="link">
      <div className="note-preview-container">
        <span className="note-preview-title">{props.note.title}</span>
        <span className="note-preview-created">
          {formatDateTime(new Date(props.note.createdAt))}
        </span>
      </div>
    </Link>
  );
}
