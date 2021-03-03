import React from "react";

const Quote = ({ text, author, tag }) => {
  return (
    <div className="quote">
      <div className="quote-text">{text}</div>
      <div className="author">by {author}</div>
    </div>
  );
};

export default Quote;
