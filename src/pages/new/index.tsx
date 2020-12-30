import * as React from "react";
import NoteEditor from "~/src/components/NoteEditor";

interface NewProps {
  store: Function;
}

export default function New(props: NewProps) {
  const createNote = props.store((state: any) => state.createNote);

  const handleSave = (title: string, body: string) => {
    createNote(title, body);
  };

  return (
    <div id="main-container">
      <NoteEditor onSave={handleSave}/>
    </div>
  );
}
