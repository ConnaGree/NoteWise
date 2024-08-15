import React from "react";
import { motion } from "framer-motion";
import Note from "../note/Note";
import Quotes from "../quotes/Quotes";

// Define animation variants for fading
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const NotesContainer = ({ notes }) => {
  return (
    <motion.div
      className="flex md:flex-col items-start gap-[4rem]"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ duration: 0.3 }} // Adjust duration as needed
    >
      <div className="pr-[1rem] w-[60%]">
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

      <Quotes />
    </motion.div>
  );
};

export default NotesContainer;
