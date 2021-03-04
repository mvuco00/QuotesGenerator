import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getQuotes, getRandomQuotes } from "../store/actions";
import Quote from "./Quote";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const dispatch = useDispatch();
  const [generate, setGenerate] = useState(false);
  const quotes = useSelector((state) => state.quotes);
  const randomQuotes = useSelector((state) => state.randomQuotes);

  useEffect(() => {
    dispatch(getQuotes());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getRandomQuotes(1));
    setGenerate(false);
  }, [dispatch, generate]);

  const handleClick = () => {
    setGenerate(true);
  };
  console.log(randomQuotes);
  return (
    <div className="homepage">
      {randomQuotes.map((quote) => (
        <Quote
          key={uuidv4()}
          text={quote.text}
          tag={quote.tag}
          author={quote.author}
        />
      ))}
      <button className="myButton" onClick={handleClick}>
        GET QUOTE
      </button>
    </div>
  );
};

export default Home;
