import React from 'react'
import { NavLink } from 'react-router-dom'
import { sideBarContent } from '../../constants'


const SideBar = () => {
  return (
    <div className='flex flex-col thin-border items-center w-[300px] shadow py-[1.5rem] px-[1rem]'>
      <h2 className="logo mb-[2rem] text-white text-center font-[900] text-[1.9rem]">NoteWise</h2>

      <ul className="options">
        {sideBarContent.map((option, i) => (
          <NavLink to={option.route}
          className={({ isActive }) =>
            `flex text-[1rem] text-[var(--mute-color)] items-center gap-[.9rem] ${i === sideBarContent.length - 1 ? '': 'mb-[1rem]'} ${isActive ? "text-white font-bold" : ""}`
          }
          key={i}>
          <span className='bg-[var(--ct-color)] p-[.5rem] rounded-md'>{option.icon}</span>
          <span>{option.label}</span>
        </NavLink>
        ))}
      </ul>
    </div>
  )
}

// `

export default SideBar