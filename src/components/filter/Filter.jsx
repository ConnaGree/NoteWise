import React from "react";
import { filterTags } from "../../constants";

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
    </div>
  );
};

export default Filter;
