import React from 'react'
import { FaCircle } from 'react-icons/fa'
import { HiOutlineDotsVertical } from 'react-icons/hi'

const Note = ({note}) => {
  return (
    <div className='shadow cursor-pointer flex flex-col gap-[1rem] rounded-md bg-[var(--ct-color)] p-[.8rem] max-w-[350px]'>
        <div className="header flex items-center justify-between">
            <span className="new bg-[var(--accent-color)] rounded-[50px] text-white rounded- px-[1rem] py-[.25rem]">new</span>
            <span className="tag font-[500] text-white text-[1.2rem]">{note.tag}</span>
            <button className="options"><HiOutlineDotsVertical className='text-[1.2rem] text-white' /></button>
        </div>

        <div className="date text-[.8rem] text-[var(--mute-color)]">{note.date}</div>
        
        <div className="excerpt">
            <div className="title">
                <h3 className='flex gap-[1rem] mb-[1rem] text-white items-center'><FaCircle className='text-[.7rem] text-[var(--accent-color)]' /> {note.content.title}</h3>
            </div>
            <p className="desc text-[.8rem] text-[var(--mute-color)]">
            {note.content.excerpt}
            </p>
        </div>
    </div>
  )
}

export default Note