import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import Quote from "./Quote";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  quotes: [],
  loading: true,
  error: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        quotes: action.payload,
        loading: false,
        error: "",
      };
    case "ERROR":
      return {
        quotes: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [generate, setGenerate] = useState(false);

  useEffect(() => {
    generate &&
      axios
        .get("https://goquotes-api.herokuapp.com/api/v1/random?count=1")
        .then((res) => {
          dispatch({ type: "FETCH_SUCCESS", payload: res.data.quotes });
          setGenerate(false);
        })
        .catch((error) => {
          dispatch({ type: "ERROR", payload: "Problem with loading quotes" });
          setGenerate(false);
        });
  }, [generate]);

  const handleGenerate = () => {
    setGenerate(true);
  };

  return (
    <div className="homepage">
      {generate && state.loading ? (
        <div>LOADING....</div>
      ) : (
        state.quotes.map((quote) => {
          console.log(quote);
          return (
            <Quote
              key={uuidv4()}
              text={quote.text}
              author={quote.author}
              tag={quote.tag}
            />
          );
        })
      )}
      <button className="myButton" onClick={handleGenerate}>
        GET QUOTE
      </button>
    </div>
  );
};

export default Home;
