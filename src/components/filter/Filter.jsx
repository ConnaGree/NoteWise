import React, { useState } from "react";
import { filterTags } from "../../constants";
import {
  filterNoteByDate,
  inputFocusStatus,
  searchKey,
} from "../../store/features/notes/notesSlice";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { FaFilter } from "react-icons/fa";

// Define animation variants for fading
const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// Define animation variants for expanding
const expandVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: "auto", opacity: 1 },
};

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);
  const dispatch = useDispatch();
  const isInputFocused = useSelector(inputFocusStatus);
  const searchQuery = useSelector(searchKey);

  const handleButtonClick = (tag) => {
    setSelectedTag(tag);
    dispatch(filterNoteByDate(tag));
  };

  return (
    <motion.div
      className="relative my-[3rem] flex w-full items-center justify-between gap-[1rem]"
      initial="hidden"
      animate={isInputFocused || searchQuery !== "" ? "hidden" : "visible"}
      exit="hidden"
      variants={fadeVariants}
      transition={{ duration: 0.3 }} // Adjust duration as needed
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-[.5rem] bg-[var(--ct-color)] text-[var(--mute-color)] p-[.5rem] rounded-md"
      >
        <FaFilter className="text-[1.2rem]" />
        <span>Filter</span>
      </button>

      <motion.div
        className="absolute top-full border-[1px] border-white z-[1000] left-0 mt-[0.5rem] w-full bg-[var(--ct-color)] p-[1rem] rounded-md"
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={expandVariants}
        transition={{ duration: 0.3 }} // Adjust duration as needed
      >
        <div className="flex flex-wrap gap-[0.5rem]">
          {filterTags.map((tag, i) => (
            <button
              key={i}
              onClick={() => handleButtonClick(tag)}
              className={`tag ${
                selectedTag === tag
                  ? "bg-[var(--accent-color)] shadow-md text-white"
                  : "text-[var(--mute-color)] bg-[var(--ct-color)]"
              } text-[.9rem] px-[.8rem] py-[.5rem] rounded-[50px] ${
                isInputFocused ? "disabled" : ""
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Filter;
