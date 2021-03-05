import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRandomQuotes, getQuotes } from "../store/actions";
import Quote from "./Quote";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const dispatch = useDispatch();
  const [generate, setGenerate] = useState(false);
  const allQuotes = useSelector((state) => state.quotes);
  const loading = useSelector((state) => state.loading);
  const number = useSelector((state) => state.numberOfQuotes);
  const randomQuotes = useSelector((state) => state.randomQuotes);

  useEffect(() => {
    dispatch(getQuotes());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getRandomQuotes(number));
    setGenerate(false);
  }, [dispatch, generate, number]);

  const handleClick = () => {
    setGenerate(true);
  };

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
