import axios from "axios";

export const setNumber = (number) => {
  return {
    type: "SET_NUMBER",
    payload: number,
  };
};

export const setQuotes = (quotes) => {
  return {
    type: "FETCH_QUOTES",
    payload: quotes,
  };
};
export const setTags = (tags) => {
  let tagList = [];
  tags.map((tag) => tagList.push(tag.name));
  return {
    type: "FETCH_TAGS",
    payload: tagList,
  };
};
export const setTag = (tag) => {
  return {
    type: "SET_TAG",
    payload: tag,
  };
};
export const setRandomQuotes = (quote) => {
  return {
    type: "FETCH_RANDOM_QUOTE",
    payload: quote,
  };
};

export const setFilteredQuotes = (quote) => {
  return {
    type: "FILTER_BY_TAG",
    payload: quote,
  };
};
export const errorQuotes = (err) => {
  return {
    type: "ERROR_QUOTES",
    payload: err,
  };
};

export const filterByTag = (number, tag) => {
  return (dispatch) => {
    axios
      .get(
        `https://goquotes-api.herokuapp.com/api/v1/random/${number}?type=tag&val=${tag}`
      )
      .then((res) => {
        console.log(res.data.quotes);
        dispatch(setFilteredQuotes(res.data.quotes));
      })
      .catch((err) => {
        dispatch(errorQuotes(err));
      });
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
export const getTags = () => {
  return (dispatch) => {
    axios
      .get("https://goquotes-api.herokuapp.com/api/v1/all/tags")
      .then((res) => {
        dispatch(setTags(res.data.tags));
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
