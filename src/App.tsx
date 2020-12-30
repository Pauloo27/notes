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
import New from "./pages/new/index";
import "./App.css";
import { randomString } from "./Utils";

export default function App() {
  const useStore = create((set) => ({
    notes: JSON.parse(localStorage.getItem("notes") || "{}"),
    createNote: (title: string, body: string) =>
      set((state: any) => {
        let id: string;
        const newNotes = state.notes;
        do {
          id = randomString() + randomString();
        } while (id in newNotes);
        const note: Note = { title, body, id, createdAt: new Date() };
        newNotes[id] = note;
        return newNotes;
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
