import * as React from "react";
import { useParams, Redirect } from "react-router-dom";
import NoteEditor from "~src/components/NoteEditor";

interface EditProps {
  store: Function;
}

export default function Edit(props: EditProps) {
  const { id } = useParams();
  const [notes, editNote] = props.store((state: any) => [
    state.notes,
    state.editNote,
  ]);
  const note = notes[id];

  const [saved, setSaved] = React.useState(false);

  const handleSave = (title: string, body: string) => {
    note.title = title;
    note.body = body;
    editNote(note);
    setSaved(true);
  };

  if (notes === undefined || note === undefined) return <Redirect to="/" />;

  if (saved) return <Redirect to={`/view/${note.id}`} />;

  return (
    <div id="main-container">
      <NoteEditor note={note} onSave={handleSave} />
    </div>
  );
}
