import * as React from "react";
import { useParams, Redirect } from "react-router-dom";
import NoteEditor from "~src/components/NoteEditor";
import Note from "~src/Note";

interface EditProps {
  store: Function;
}

export default function Edit(props: EditProps) {
  const { id } = useParams();
  const [notes, editNote] = props.store((state: any) => [
    state.notes,
    state.editNote,
  ]);
  const [note, setNote] = React.useState(notes[id] as Note | undefined);

  const handleSave = (title: string, body: string) => {
    note!.title = title;
    note!.body = body;
    editNote(note);
    setNote(undefined);
  };

  if (notes === undefined || note === undefined) return <Redirect to="/" />;

  return (
    <div id="main-container">
      <NoteEditor note={note} onSave={handleSave} />
    </div>
  );
}
