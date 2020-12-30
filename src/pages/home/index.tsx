import * as React from "react";
import NotePreview from "~/src/components/NotePreview";

interface HomeProps {
  store: Function;
}

export default function Home(props: HomeProps) {
  const notes = props.store((state: any) => state.notes);

  const listNotes = () => {
    const keys = Object.keys(notes);
    if (keys.length === 0) return <h3>No notes found!</h3>;

    return keys.map(key => {
      return <NotePreview key={key} note={notes[key]}/>;
    })
  }

  return (
    <div id="main-container">
      {listNotes()}
    </div>
  );
}
