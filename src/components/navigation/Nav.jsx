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
    <div className="flex items-center gap-[1rem] justify-between">
      <label
        className="text-[var(--mute-color)] w-[60%] px-[1.3rem] py-[.9rem] shadow bg-[var(--ct-color)] rounded-[50px] text-[1rem] flex items-center justify-between"
        htmlFor=""
      >
        <input
          value={searchKey}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleQueryChange}
          placeholder="Search note title..."
          className="bg-transparent text-white outline-none w-full"
          type="text"
        />
        <button onClick={handleSearch} className="search__button text-[1.5rem]">
          <LuSearch />
        </button>
      </label>

      <div className="theme__toggle-add_note flex items-center gap-[.7rem]">
        <Link
          to={"/EditNote"}
          onClick={handleOpenEditor}
          className="add__note flex items-center rounded-[50px] gap-[.3rem] bg-[var(--accent-color)] px-[1rem] py-[.4rem] text-[var(--title-color)]"
        >
          <IoAddSharp className="text-[1.2rem]" /> Add note
        </Link>

        <button
          onClick={() => setIsLight(!isLight)}
          className="text-[var(--accent-color)] text-[1.2rem]"
        >
          {isLight ? <FaRegMoon /> : <LuSunMedium />}
        </button>
      </div>
    </div>
  );
};

export default Nav;
