import React, { useState } from 'react'
import { FaRegMoon } from 'react-icons/fa'
import { LuSearch, LuSunMedium } from 'react-icons/lu'

const Nav = () => {

  const [isLight, setIsLight] = useState('false')

  return (
    <div className='flex items-center gap-[1rem] justify-between'>
        <label className='text-[var(--mute-color)] w-[80%] px-[1.3rem] py-[.9rem] shadow bg-[var(--ct-color)] rounded-[50px] text-[1rem] flex items-center justify-between' htmlFor="">
            <input placeholder='Search...' className='bg-transparent outline-none w-full' type="text" />
            <button className="search__button text-[1.5rem]">
            <LuSearch />
            </button>
        </label>

        <div className="theme__toggle">
          <button onClick={() => setIsLight(!isLight)} className='text-[var(--accent-color)] text-[1.2rem]'>
            {isLight ? <FaRegMoon /> : <LuSunMedium />}
          </button>
        </div>
    </div>
  )
}

export default Nav
