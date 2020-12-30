import * as React from "react";
import NoteEditor from "~/src/components/NoteEditor";
import {Redirect} from "react-router-dom";

interface NewProps {
  store: Function;
}

export default function New(props: NewProps) {
  const createNote = props.store((state: any) => state.createNote);
  const [noteId, setNoteId] = React.useState(undefined as string | undefined);

  const handleSave = (title: string, body: string) => {
    if(title.trim() === "") return;
    createNote(title, body).then(setNoteId);
  };

  return (
    <div id="main-container">
      <NoteEditor onSave={handleSave}/>
      {noteId ? <Redirect to={`/view/${noteId}`}/> : null}
    </div>
  );
}
