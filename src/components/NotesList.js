import React from "react";
import NoteItem from "./NoteItem";

function NotesList({ notes, deleteNote, archiveNote, keyword, isArchived }) {
  return (
    <>
      <div className="notes-list">
        {notes
          .filter((note) => note.title.toLowerCase().includes(keyword))
          .filter((note) => note.archived === isArchived).length === 0 ? (
          <h4>No Search Results!</h4>
        ) : (
          notes
            .filter((note) => note.title.toLowerCase().includes(keyword))
            .filter((note) => note.archived === isArchived)
            .map((note) => (
              <NoteItem
                key={note.id}
                {...note}
                deleteNote={deleteNote}
                archiveNote={archiveNote}
              />
            ))
        )}
      </div>
    </>
  );
}

export default NotesList;
