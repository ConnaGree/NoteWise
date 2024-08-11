import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { GoHeart, GoTrash } from "react-icons/go";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { removeNote } from "../../store/features/notes/notesSlice";

const Note = ({ note }) => {
  const [options, setOptions] = useState(false);
  const dispatch = useDispatch();

  const handleTrashNote = () => {
    dispatch(removeNote(note));
  };

  const handleToggle = () => {
    setOptions(!options);
  };

  return (
    <div className="shadow relative cursor-pointer flex flex-col gap-[1rem] rounded-md bg-[var(--ct-color)] p-[.8rem] w-[320px]">
      <div className="header flex items-center justify-between">
        <span className="new text-[var(--accent-color)]">new</span>
        <span className="tag font-[500] text-white text-[1.2rem]">
          {note.tags[0]}
        </span>
        <button onClick={handleToggle} className="options">
          <HiOutlineDotsVertical className="text-[1.2rem] text-white" />
        </button>
      </div>
      <div className="date text-[.8rem] text-[var(--mute-color)]">
        {note.date}
      </div>
      <div className="excerpt">
        <div className="title">
          <h3 className="flex gap-[1rem] mb-[1rem] text-white items-center">
            <FaCircle className="text-[.7rem] text-[var(--accent-color)]" />{" "}
            {note.content.title}
          </h3>
        </div>
        <p className="desc text-[.8rem] text-[var(--mute-color)]">
          {note.content.excerpt}...
        </p>
      </div>
      {options && (
        <div className="shadow z-[1000] py-[1rem] px-[.6rem] rounded-md text-white bg-[var(--accent-color)] options__container absolute top-[3rem] right-[1rem]">
          <ul className="list-none">
            <li className="flex text-[1rem] mb-[1rem] items-center gap-[.4rem]">
              <GoHeart /> Like
            </li>
            <li
              onClick={handleTrashNote}
              className="flex text-[1rem] items-center gap-[.4rem] cursor-pointer"
            >
              <GoTrash /> Trash
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Note;
