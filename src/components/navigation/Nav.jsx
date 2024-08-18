import React, { useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { IoAddSharp } from "react-icons/io5";
import { LuSearch, LuSunMedium } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getSearchQuery,
  inputFocusStatus,
  openEditor,
  searchNoteByTitle,
  updateInputFocusStatus
} from "../../store/features/notes/notesSlice";

const Nav = () => {
  // Local state for theme toggle
  const [isLight, setIsLight] = useState(false);
  
  // Local state for search input
  const [searchKey, setSearchKey] = useState('');
  
  // Redux dispatch hook
  const dispatch = useDispatch();
  
  // Selector to get input focus state from Redux store
  const inputState = useSelector(inputFocusStatus);

  // Handler to open the note editor
  const handleOpenEditor = () => {
    dispatch(openEditor());
  };

  // Handler to search notes by title
  const handleSearch = () => {
    dispatch(searchNoteByTitle(searchKey));
  };

  // Update focus status on input focus
  const handleFocus = () => {
    dispatch(updateInputFocusStatus(true));
  };

  // Update focus status on input blur
  const handleBlur = () => {
    dispatch(updateInputFocusStatus(false));
  };

  // Handle search input changes
  const handleQueryChange = (e) => {
    const value = e.target.value;
    setSearchKey(value);
    dispatch(getSearchQuery(value));
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 justify-between w-full">
      <label
        className="text-[var(--mute-color)] w-full md:w-[60%] px-[2rem] py-[1rem] shadow bg-[var(--ct-color)] rounded-full text-sm flex items-center justify-between"
        htmlFor=""
      >
        <input
          value={searchKey}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleQueryChange}
          placeholder="Search by note title..."
          className="bg-transparent text-white outline-none w-full"
          type="text"
        />
        <button onClick={handleSearch} className="text-xl">
          <LuSearch />
        </button>
      </label>

      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-2">
        <Link
          to="/EditNote"
          onClick={handleOpenEditor}
          className="flex items-center rounded-full gap-2 bg-[var(--accent-color)] px-4 py-2 text-[var(--title-color)]"
        >
          <IoAddSharp className="text-xl" /> Add note
        </Link>

        <button
          onClick={() => setIsLight(!isLight)}
          className="text-[var(--accent-color)] text-xl"
        >
          {isLight ? <FaRegMoon /> : <LuSunMedium />}
        </button>
      </div>
    </div>
  );
};

export default Nav;
