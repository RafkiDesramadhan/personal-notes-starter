import React from "react";

function ButtonDelete({ id, deleteNote }) {
  return (
    <button className="note-item__delete-button" onClick={() => deleteNote(id)}>
      Delete
    </button>
  );
}

export default ButtonDelete;
