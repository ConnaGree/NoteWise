import React from 'react'
import { sideBarContent } from '../../constants'
import { Link } from 'react-router-dom'


const SideBar = () => {
  return (
    <div className='flex flex-col thin-border items-center h-[100vh] w-[300px] shadow py-[1.5rem] px-[1rem]'>
      <h2 className="logo mb-[2rem] text-white text-center font-[700] text-[1.5rem]">NoteWise</h2>

      <ul className="options">
        {sideBarContent.map((option, i) => (
          <Link to={option.route} className={`flex text-[1rem]  text-[var(--mute-color)] items-center gap-[.9rem] ${i === sideBarContent.length - 1 ? '': 'mb-[1rem]'}`} key={i}>
          <span>{option.icon}</span>
          <span>{option.label}</span>
        </Link>
        ))}
      </ul>
    </div>
  )
}

export default SideBar