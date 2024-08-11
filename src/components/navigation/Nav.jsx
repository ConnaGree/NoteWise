import React, { useState } from 'react'
import { FaRegMoon } from 'react-icons/fa'
import { IoAddSharp } from 'react-icons/io5'
import { LuSearch, LuSunMedium } from 'react-icons/lu'
import { useDispatch, useSelector } from 'react-redux'
import { editorStatus, openEditor } from '../../store/features/notes/notesSlice'
import { Link } from 'react-router-dom'

const Nav = () => {

  const [isLight, setIsLight] = useState('false')
  const dispatch = useDispatch()

  const handleOpenEditor = () => {
    dispatch(openEditor());
  }

  console.log(useSelector(editorStatus))

  return (
    <div className="flex items-center gap-[1rem] justify-between">
      <label
        className="text-[var(--mute-color)] w-[80%] px-[1.3rem] py-[.9rem] shadow bg-[var(--ct-color)] rounded-[50px] text-[1rem] flex items-center justify-between"
        htmlFor=""
      >
        <input
          placeholder="Search..."
          className="bg-transparent outline-none w-full"
          type="text"
        />
        <button className="search__button text-[1.5rem]">
          <LuSearch />
        </button>
      </label>

      <Link
        to={"/EditNote"}
        onClick={handleOpenEditor}
        className="add__note flex items-center rounded-[50px] gap-[.3rem] bg-[var(--accent-color)] px-[1rem] py-[.6rem] text-[var(--title-color)]"
      >
        <IoAddSharp className="text-[1.2rem]" /> Add note
      </Link>
      <div className="theme__toggle">
        <button
          onClick={() => setIsLight(!isLight)}
          className="text-[var(--accent-color)] text-[1.2rem]"
        >
          {isLight ? <FaRegMoon /> : <LuSunMedium />}
        </button>
      </div>
    </div>
  );
}

export default Nav
