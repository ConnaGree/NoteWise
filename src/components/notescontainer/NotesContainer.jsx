import React from 'react'
import { useSelector } from 'react-redux'
import { allNotes } from '../../store/features/notes/notesSlice'
import Note from '../note/Note'
// import Note from '../note/Note'


const NotesContainer = () => {
  const notes = useSelector(allNotes)
  console.log(notes)
  return (
    <div className='mt-[3rem] flex gap-[.7rem] flex-wrap'>
      {notes.map((note, i) => (
        <Note key={i} note={note} />
      ))}
    </div>
  )
}

export default NotesContainer