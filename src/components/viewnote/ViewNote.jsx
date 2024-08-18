import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectNoteById } from "../../store/features/notes/notesSlice";
import { GoArrowLeft } from "react-icons/go";
import { motion } from "framer-motion";

const ViewNote = () => {
  const { id } = useParams();
  const [note] = useSelector((state) => selectNoteById(state, id));

  return (
    <motion.div
      className="md:py-[2rem] md:px-[2rem] px-0 h-[100vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }} // Adjust duration as needed
    >
      <div className="header flex flex-wrap items-center gap-[1rem]">
        <Link to={'/'} className="text-white">
          <GoArrowLeft className="text-[2rem]" />
        </Link>
        <h1 className="text-white text-[2.5rem]">{note.content.title}</h1>
        <span className="text-[.9rem] text-[var(--mute-color)] bg-[var(--ct-color)] px-[1rem] py-[.5rem] rounded-[50px]">
          created on {note.date}
        </span>
      </div>
      <p className="content max-w-[1000px] leading-[1.7rem] my-[1.5rem] text-white">
        {note.content.description}
      </p>
      {note.tags.map((tag, i) => (
        <motion.span
          key={i}
          className="px-[1rem] mr-[.6rem] text-[.8rem] max-w-[150px] gap-[.6rem] py-[.5rem] rounded-[50px] bg-[var(--ct-color)] text-[var(--mute-color)]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: i * 0.1 }} // Adjust duration and delay as needed
        >
          #{tag}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default ViewNote;
