import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";
import { getQuotes } from "../store/actions";
import AllQuotesQuote from "./AllQuotesQuote";

const AllQuotes = () => {
  const allQuotes = useSelector((state) => state.quotes);
  const [quotes, setQuotes] = useState(allQuotes.slice(0, 4000));
  const [pageNumber, setPageNumber] = useState(0);

  const dispatch = useDispatch();
  const quotesPerPage = 50;
  const pagesVisited = pageNumber * quotesPerPage;

  useEffect(() => {
    dispatch(getQuotes());
  }, [dispatch]);
  // za slice-anje json objekta kako se pomicemo po stranicama
  const displayQuotes = quotes.slice(
    pagesVisited,
    pagesVisited + quotesPerPage
  );

  // ceil->round up
  const pageCount = Math.ceil(quotes.length / quotesPerPage);
  // selected je broj stranice na koji zelimo ici, react-paginate sve rijesi
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  console.log(quotes);
  return (
    <div className="allquotescontainer">
      {displayQuotes.map((quote, index) => {
        return (
          <AllQuotesQuote
            key={index}
            quoteText={quote.text}
            author={quote.author}
          />
        );
      })}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationButtons"}
        previousLinkClassName={"previousButton"}
        nextLinkClassName={"nextButton"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default AllQuotes;
