import React from "react";

const AllQuotesQuote = ({ quoteText, author }) => {
  return (
    <div className="allQuotesQuoteContainer">
      <div className="allQuotesQuote">{quoteText}</div>
      <div className="allQuotesAuthor">by {author}</div>
    </div>
  );
};

export default AllQuotesQuote;
