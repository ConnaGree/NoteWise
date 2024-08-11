import React from 'react'
import Nav from '../navigation/Nav'
import Filter from '../filter/Filter'
import NotesContainer from '../notescontainer/NotesContainer'
import { editorStatus } from '../../store/features/notes/notesSlice'
import EditNote from '../editnote/EditNote'
import { useSelector } from 'react-redux'

const MainField = () => {
  const isEditorOpen = useSelector(editorStatus)

  return (
    <div className="w-full h-[100vh] p-[2rem]">
      <Nav />
      <>
        <Filter />
        <NotesContainer />
      </>
    </div>
  );
}

export default MainField