import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  allQuotes,
  error,
  fetchQuotes,
  status,
} from "../../store/features/quotes/quoteSlice";
import Spinner from "../spinner/Spinner";
import Quote from "./quote/Quote";

const Quotes = () => {
  const dispatch = useDispatch();

  // Selector hooks to access Redux state
  const err = useSelector(error);
  const stat = useSelector(status);
  const quotes = useSelector(allQuotes);

  // Fetch quotes on component mount
  useEffect(() => {
    dispatch(fetchQuotes());
  }, [dispatch]); // Include dispatch as a dependency

  // Get a random quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  // Conditional rendering based on status
  return (
    <div>
      {stat === "loading" && <Spinner />}
      {stat === "succeeded" && <Quote quote={randomQuote} />}
      {stat === "failed" && (
        <p className="px-[2px] py-[1.5px] rounded-[50px] bg-red-400 text-white text-[.8rem]">
          {err}
        </p>
      )}
    </div>
  );
};

export default Quotes;
