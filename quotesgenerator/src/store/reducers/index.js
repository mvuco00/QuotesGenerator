const reducer = (
  state = {
    quotes: [],
    tags: [],
    tag: "",
    randomQuotes: [
      {
        text: "Your daily quote is...",
        author: "codeGenerator",
        tag: "generator",
      },
    ],
    error: "",
    loading: true,
    numberOfQuotes: 1,
  },
  action
) => {
  switch (action.type) {
    case "FETCH_QUOTES":
      return {
        ...state,
        quotes: action.payload,
        loading: false,
      };
    case "FETCH_TAGS":
      return {
        ...state,
        tags: action.payload,
      };
    case "ERROR_QUOTES":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "FETCH_RANDOM_QUOTE":
    case "FILTER_BY_TAG":
      return {
        ...state,
        loading: false,
        randomQuotes: action.payload,
      };
    case "SET_NUMBER":
      return {
        ...state,
        numberOfQuotes: action.payload,
      };
    case "SET_TAG": {
      return {
        ...state,
        tag: action.payload,
      };
    }

    default:
      return state;
  }
};

export default reducer;
