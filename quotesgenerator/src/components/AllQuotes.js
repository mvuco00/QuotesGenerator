import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getQuotes } from "../store/actions";
import AllQuotesQuote from "./AllQuotesQuote";

const AllQuotes = () => {
  const allQuotes = useSelector((state) => state.quotes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuotes());
  }, [dispatch]);

  console.log(allQuotes);
  return (
    <div>
      {allQuotes.map((quote) => {
        return <AllQuotesQuote quoteText={quote.text} />;
      })}
    </div>
  );
};

export default AllQuotes;
