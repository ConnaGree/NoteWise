import React, { useState } from "react";
import { filterTags } from "../../constants";
import { filterNoteByDate, inputFocusStatus, searchKey } from "../../store/features/notes/notesSlice";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

// Define animation variants for fading
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Filter = () => {
  const [selectedTag, setSelectedTag] = useState(null);
  const dispatch = useDispatch();
  const isInputFocused = useSelector(inputFocusStatus);

  const handleButtonClick = (tag) => {
    setSelectedTag(tag);
    dispatch(filterNoteByDate(tag));
  };
  
  const searchQuery = useSelector(searchKey)

  return (
    <motion.div
      className="flex items-center justify-between"
      initial="hidden"
      animate={isInputFocused || searchQuery !== '' ? "hidden" : "visible"}
      exit="hidden"
      variants={variants}
      transition={{ duration: 0.3 }} // Adjust duration as needed
    >
      <div className="flex items-center gap-[1rem] mt-[2rem]">
        {filterTags.map((tag, i) => (
          <button
            key={i}
            onClick={() => handleButtonClick(tag)}
            className={`tag ${
              selectedTag === tag
                ? "bg-[var(--accent-color)] text-white"
                : "text-[var(--mute-color)] bg-[var(--ct-color)]"
            } text-[.9rem] px-[.8rem] py-[.5rem] rounded-[50px] ${isInputFocused ? 'disabled': ''}`}
          >
            {tag}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default Filter;
