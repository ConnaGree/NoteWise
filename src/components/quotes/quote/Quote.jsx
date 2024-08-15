import React from "react";
import { BsDashLg } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";

const Quote = ({ quote }) => {
  return (
    <div>
        <h2 className="text-[2rem] text-white font-[600]">Word of The Day 😇</h2>
      <div className="quote__card bg-[var(--ct-color)] mt-[2.5rem] p-[2rem] rounded-md text-white">
        <div className="quote__container">
          <div className="quote__symbol mb-[1rem] text-[3rem] text-[var(--accent-color)]">
            <FaQuoteLeft />
          </div>
          <p className="quote mt-[1rem]">{quote.text}</p>
          <p className="author text-right text-[.8rem] flex items-center gap-[.8rem] justify-end">
            <BsDashLg /> {quote.author.split(",")[0]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
