import React from "react";
import NotesList from "./NotesList";
import NoteInput from "./NoteInput";
import NotesEmpty from "./NotesEmpty";

function NoteAppBody({ notes, addNote, deleteNote, archiveNote, keyword }) {
  return (
    <div className="note-app__body">
      <NoteInput addNote={addNote} />
      <h2>Notes Active</h2>
      <hr />
      {notes.filter((note) => note.archived === false).length === 0 ? (
        <NotesEmpty />
      ) : (
        <NotesList
          notes={notes}
          deleteNote={deleteNote}
          archiveNote={archiveNote}
          keyword={keyword}
          isArchived={false}
        />
      )}
      <h2>Archive</h2>
      <hr />
      {notes.filter((note) => note.archived).length === 0 ? (
        <NotesEmpty />
      ) : (
        <NotesList
          notes={notes}
          deleteNote={deleteNote}
          archiveNote={archiveNote}
          keyword={keyword}
          isArchived
        />
      )}
    </div>
  );
}

export default NoteAppBody;
