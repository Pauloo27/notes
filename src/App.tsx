import * as React from "react";
import create from "zustand";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Note from "./Note";
import Header from "./components/Header";
import Home from "./pages/home/index";
import View from "./pages/view/index";
import New from "./pages/new/index";
import Edit from "./pages/edit";
import "./App.css";
import { randomString } from "./Utils";

export default function App() {
  const useStore = create((set) => ({
    notes: JSON.parse(localStorage.getItem("notes") || "{}"),
    createNote: (title: string, body: string): Promise<string> => {
      return new Promise<string>((res) => {
        set((state: any) => {
          const newNotes = state.notes;
          let id: string;
          do {
            id = randomString() + randomString();
          } while (id in newNotes);
          const note: Note = {
            title,
            body,
            id,
            createdAt: new Date().toJSON(),
          };
          newNotes[id] = note;
          res(id);
          return newNotes;
        });
      });
    },
    editNote: (note: Note) =>
      set((state: any) => {
        const newNotes = state.notes;
        newNotes[note.id] = note;
        return { notes: newNotes };
      }),
    deleteNote: (note: Note) =>
      set((state: any) => {
        const newNotes = state.notes;
        delete newNotes[note.id];
        return { notes: newNotes };
      }),
  }));

  useStore.subscribe(
    (s: Array<any>) => localStorage.setItem("notes", JSON.stringify(s[0])),
    (state) => [state.notes]
  );

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/new" exact>
          <New store={useStore} />
        </Route>
        <Route path="/view/:id">
          <View store={useStore} />
        </Route>
        <Route path="/edit/:id">
          <Edit store={useStore} />
        </Route>
        <Route path="/" exact>
          <Home store={useStore} />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}
