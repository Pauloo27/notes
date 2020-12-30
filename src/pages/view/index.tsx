import * as React from "react";
import Note from "~/src/Note";
import { useParams, Redirect } from "react-router-dom";

interface ViewProps {
  store: Function;
}

export default function View(props: ViewProps) {
  const { id } = useParams();
  const note: Note | undefined = props.store((state) => state.notes)[id];
  if (note === undefined) return <Redirect to="/" />;
  return (
    <div id="main-container">
      <h1>{note!.title}</h1>
      <p>{note!.body}</p>
    </div>
  );
}
