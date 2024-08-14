import React from "react";
import { trashedNotes } from "../../store/features/notes/notesSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import NotesContainer from "../notescontainer/NotesContainer";

const Trash = () => {
  const notes = useSelector(trashedNotes);
  return (
    <div className="pt-[3rem] px-[2rem] w-full h-[100vh]">
      <div className="header flex items-center gap-[1rem]">
        <Link to={"/"} className="text-white">
          <GoArrowLeft className="text-[2rem]" />
        </Link>
        <h1 className="text-white text-[2.5rem]">Trash</h1>
      </div>
      <NotesContainer notes={notes} />
    </div>
  );
};

export default Trash;
