import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const NoteItems = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <button
            className="mx-3"
            onClick={() => {
              deleteNote(note._id);
            }}
          >
            Delete
          </button>
          <button
            className="mx-3"
            onClick={() => {
              updateNote(note);
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteItems;
