import React from "react";
import ButtonDelete from "./ButtonDelete";
import ButtonArchive from "./ButtonArchive";

function NoteItemAction({ id, deleteNote, archiveNote }) {
  return (
    <div className="note-item__action">
      <ButtonDelete id={id} deleteNote={deleteNote} />
      <ButtonArchive id={id} archiveNote={archiveNote} />
    </div>
  );
}

export default NoteItemAction;
