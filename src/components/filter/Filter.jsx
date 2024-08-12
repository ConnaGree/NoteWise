import React, { useState } from "react";
import { filterTags } from "../../constants";

const Filter = () => {
  // State to keep track of the currently selected tag
  const [selectedTag, setSelectedTag] = useState(null);

  // Function to handle button click
  const handleButtonClick = (tag) => {
    // Set the selected tag based on the button clicked
    setSelectedTag(tag);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-[1rem] mt-[2rem]">
        {filterTags.map((tag, i) => (
          <button
            key={i}
            onClick={() => handleButtonClick(tag)}
            className={`tag ${selectedTag === tag ? 'bg-[var(--accent-color)] text-white' : 'text-[var(--mute-color)] bg-[var(--ct-color)]'} text-[.9rem] px-[.8rem] py-[.5rem] rounded-[50px]`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
