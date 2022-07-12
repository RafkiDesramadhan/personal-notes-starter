import React from "react";

function ButtonArchive({ id, archiveNote }) {
  return (
    <button
      className="note-item__archive-button"
      onClick={() => archiveNote(id)}
    >
      Pindahkan
    </button>
  );
}

export default ButtonArchive;
