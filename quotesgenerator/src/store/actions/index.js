import axios from "axios";

export const setQuotes = (quotes) => {
  return {
    type: "FETCH_QUOTES",
    payload: quotes,
  };
};

export const setRandomQuotes = (quote) => {
  return {
    type: "FETCH_RANDOM_QUOTE",
    payload: quote,
  };
};

export const errorQuotes = (err) => {
  return {
    type: "ERROR_QUOTES",
    payload: err,
  };
};
export const getQuotes = () => {
  return (dispatch) => {
    axios
      .get("https://goquotes-api.herokuapp.com/api/v1/all/quotes")
      .then((res) => {
        dispatch(setQuotes(res.data.quotes));
      })
      .catch((err) => {
        dispatch(errorQuotes(err));
      });
  };
};

export const getRandomQuotes = (number) => {
  return (dispatch) => {
    axios
      .get(`https://goquotes-api.herokuapp.com/api/v1/random?count=${number}`)
      .then((res) => {
        dispatch(setRandomQuotes(res.data.quotes));
      })
      .catch((err) => {
        dispatch(errorQuotes(err));
      });
  };
};
