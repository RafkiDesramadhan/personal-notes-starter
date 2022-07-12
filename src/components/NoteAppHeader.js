import React from "react";

function NoteAppHeader({ keyword, changeKeyword }) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <div className="note-search">
        <input
          type="text"
          placeholder="Search Notes..."
          value={keyword}
          onChange={changeKeyword}
        />
      </div>
    </div>
  );
}

export default NoteAppHeader;
