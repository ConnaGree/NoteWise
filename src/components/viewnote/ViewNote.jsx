import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectNoteById } from "../../store/features/notes/notesSlice";
import { GoArrowLeft } from "react-icons/go";

const ViewNote = () => {
  const { id } = useParams();
  const [note] = useSelector((state) => selectNoteById(state, id));

  return (
    <div className="py-[2rem] px-[2rem] h-[100vh]">
        <div className="header flex items-center gap-[1rem]">
            <Link to={'/'} className="text-white"><GoArrowLeft className="text-[2rem]" /></Link>
             <h1 className="text-white text-[2.5rem]">{note.content.title}</h1>
             <span className="text-[.9rem] text-[var(--mute-color)] bg-[var(--ct-color)] px-[1rem] py-[.5rem] rounded-[50px]">create on {note.date}</span>
        </div>
        <p className="content max-w-[1000px] leading-[1.7rem] my-[1.5rem] text-white">{note.content.description}</p>

        {note.tags.map((tag, i) => (
            <span key={i} className="px-[1rem] mr-[.6rem] text-[.8rem] max-w-[150px] gap-[.6rem] py-[.5rem] rounded-[50px] bg-[var(--ct-color)] text-[var(--mute-color)]">{tag}</span>
        ))}
    </div>
  );
};

export default ViewNote;
