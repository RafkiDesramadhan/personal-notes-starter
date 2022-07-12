import React from "react";
import NoteAppHeader from "./NoteAppHeader";
import NoteAppBody from "./NoteAppBody";
import autoBind from "auto-bind";
import Swal from "sweetalert2";

import { getInitialData } from "../utils";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      keyword: "",
    };

    autoBind(this);
    // this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    // this.onDeleteHandler = this.onDeleteHandler.bind(this);
    // this.onArchiveHandler = this.onArchiveHandler.bind(this);
    // this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
    // this.onChangeKeywordHandler = this.onChangeKeywordHandler.bind(this);
  }

  onChangeKeywordHandler(e) {
    this.setState((prevState) => {
      return {
        ...prevState,
        keyword: e.target.value,
      };
    });
  }

  onSearchNoteHandler(keyword) {
    const dataFilter = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(keyword)
    );
    console.log(dataFilter);
  }

  onAddNoteHandler(title, body) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  onDeleteHandler(id) {
    Swal.fire({
      title: "Do you want to delete the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't delete`,
    }).then((result) => {
      if (result.isConfirmed) {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes });
        Swal.fire("Success Delete Notes!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not delete", "", "info");
      }
    });
  }

  onArchiveHandler(id) {
    Swal.fire({
      title: "Do you want to move the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Move",
      denyButtonText: `Don't Move`,
    }).then((result) => {
      if (result.isConfirmed) {
        const data = this.state.notes.filter((note) => note.id === id);
        data[0].archived = !data[0].archived;
        const newData = this.state.notes.map((note) => note);
        this.setState({ notes: newData });
        Swal.fire("Success Move Notes!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not move", "", "info");
      }
    });
  }

  render() {
    return (
      <>
        <NoteAppHeader
          keyword={this.state.keyword}
          changeKeyword={this.onChangeKeywordHandler}
        />
        <NoteAppBody
          notes={this.state.notes}
          addNote={this.onAddNoteHandler}
          deleteNote={this.onDeleteHandler}
          archiveNote={this.onArchiveHandler}
          keyword={this.state.keyword}
        />
      </>
    );
  }
}

export default NotesApp;
