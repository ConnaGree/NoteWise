import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { GoHeart, GoTrash } from "react-icons/go";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { formatDate, removeNote } from "../../store/features/notes/notesSlice";
import { addToFav } from "../../store/features/favorites/favoritesSlice";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Define animation variants for fading
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Note = ({ note }) => {
  const [options, setOptions] = useState(false);
  const dispatch = useDispatch();

  const handleTrashNote = () => {
    dispatch(removeNote(note));
    setOptions(!options);
  };

  const handleAddToFav = () => {
    dispatch(addToFav(note));
    setOptions(!options);
  };

  const handleToggle = () => {
    setOptions(!options);
  };

  return (
    <motion.div
      className="shadow relative  cursor-pointer flex flex-col gap-[1rem] rounded-md bg-[var(--ct-color)] p-[.8rem] w-full md:w-[320px]"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ duration: 0.3 }} // Adjust duration as needed
    >
      <div className="header flex items-center justify-between">
        <span className="new text-[var(--accent-color)]">
          {note.date === formatDate(new Date()) ? "New" : ""}
        </span>
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
      <Link to={`/viewnote/${note.id}`}>
        <div className="excerpt">
          <div className="title hover:underline decoration-white">
            <h3 className="flex gap-[1rem] mb-[1rem] text-white items-center">
              <FaCircle className="text-[.7rem] text-[var(--accent-color)]" />{" "}
              {note.content.title.length > 14
                ? `${note.content.title.slice(0, 20)}...`
                : note.content.title}
            </h3>
          </div>
          <p className="desc text-[.8rem] text-[var(--mute-color)]">
            {note.content.excerpt}...
          </p>
        </div>
      </Link>
      {options && (
        <motion.div
          className="shadow z-[1000] py-[1rem] px-[.6rem] rounded-md text-white bg-[var(--accent-color)] options__container absolute top-[3rem] right-[1rem]"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
          transition={{ duration: 0.3 }} // Adjust duration as needed
        >
          <ul className="list-none">
            <li
              onClick={handleAddToFav}
              className="flex text-[1rem] mb-[1rem] items-center gap-[.4rem]"
            >
              <GoHeart /> Like
            </li>
            <li
              onClick={handleTrashNote}
              className="flex text-[1rem] items-center gap-[.4rem] cursor-pointer"
            >
              <GoTrash /> Trash
            </li>
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Note;
