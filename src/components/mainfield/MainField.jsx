import React from 'react'
import { useSelector } from 'react-redux'
import { allNotes } from "../../store/features/notes/notesSlice"
import Filter from '../filter/Filter'
import Nav from '../navigation/Nav'
import NotesContainer from '../notescontainer/NotesContainer'

const MainField = () => {
  const notes = useSelector(allNotes);

  return (
    <div className="w-full h-[100vh] p-[2rem]">
      <Nav />
      <>
        <Filter />
        <NotesContainer notes={notes} />
      </>
    </div>
  );
}

export default MainField