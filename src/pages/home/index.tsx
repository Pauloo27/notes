import * as React from "react";

interface HomeProps {
  store: Function;
}

export default function Home(props: HomeProps) {
  const notes = props.store((state: any) => state.notes);

  const listNotes = () => {
    return Object.keys(notes).map(key => {
      const note = notes[key];
      return note.title;
    })
  }

  return (
    <div id="main-container">
      {listNotes()}
    </div>
  );
}
