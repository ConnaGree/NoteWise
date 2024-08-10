import React from 'react'
import Nav from '../navigation/Nav'
import Filter from '../filter/Filter'
import NotesContainer from '../notescontainer/NotesContainer'

const MainField = () => {
  return (
    <div className='w-full p-[2rem]'>
        <Nav />
        <Filter />
        <NotesContainer />
    </div>
  )
}

export default MainField