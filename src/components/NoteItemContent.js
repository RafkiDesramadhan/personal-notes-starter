import React from "react";

function NoteItemContent({ title, createdAt, body }) {
  return (
    <div className="note-item__content">
      <div className="note-item__title">{title}</div>
      <div className="note-item__date">{createdAt}</div>
      <div className="note-item__body">{body}</div>
    </div>
  );
}

export default NoteItemContent;
