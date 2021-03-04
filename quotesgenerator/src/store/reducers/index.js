const reducer = (
  state = {
    quotes: [],
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
    case "ERROR_QUOTES":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "FETCH_RANDOM_QUOTE":
      return {
        ...state,
        loading: false,
        randomQuotes: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
