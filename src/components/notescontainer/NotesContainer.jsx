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
      className="flex md:flex-row items-start gap-4 md:gap-8"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ duration: 0.3 }} // Adjust duration as needed
    >
      <div className="w-full px-0 md:px-6">
        {notes.length === 0 ? (
          <p className="mt-8 text-center text-gray-600">No notes so far...</p>
        ) : (
          <div className="mt-8 flex flex-wrap gap-4">
            {notes.map((note, i) => (
              <Note key={i} note={note} />
            ))}
          </div>
        )}
      </div>
      {/* Optional: Add Quotes or other content here */}
    </motion.div>
  );
};

export default NotesContainer;
