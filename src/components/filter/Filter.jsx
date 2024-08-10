import React from "react";
import { filterTags } from "../../constants";
import { IoAddSharp } from "react-icons/io5";

const Filter = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-[1rem] mt-[2rem]">
        {filterTags.map((tag, i) => (
          <button key={i} className="tag text-[var(--mute-color)] bg-[var(--ct-color)] text-[.9rem] px-[.8rem] py-[.5rem] rounded-[50px]">
            {tag}
          </button>
        ))}
      </div>

      <button className="add__note flex items-center rounded-[50px] gap-[.3rem] bg-[var(--accent-color)] px-[1rem] py-[.6rem] text-[var(--title-color)]">
      <IoAddSharp className="text-[1.2rem]" /> Add note
      </button>
    </div>
  );
};

export default Filter;
