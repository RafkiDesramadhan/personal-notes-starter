import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItem({ id, title, createdAt, body, deleteNote, archiveNote }) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} createdAt={createdAt} body={body} />
      <NoteItemAction
        id={id}
        archiveNote={archiveNote}
        deleteNote={deleteNote}
      />
    </div>
  );
}

export default NoteItem;
