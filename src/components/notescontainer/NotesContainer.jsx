import React from "react";
import Note from "../note/Note";

const NotesContainer = ({notes}) => {

  return (
    <div className="">
      {notes.length === 0 ? (
        <p className="mt-[3rem] text-center text-[var(--mute-color)]">
          No notes so far...
        </p>
      ) : (
        <div className="mt-[3rem] flex gap-[.7rem] flex-wrap">
          {notes.map((note, i) => (
              <Note key={i} note={note} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NotesContainer;
