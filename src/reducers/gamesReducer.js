// TODO intial States

const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
  isSearching: false,
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
      };

    case "SEARCHING_GAMES":
      return {
        ...state,
        isSearching: true,
      };

    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
        isSearching: false,
      };

    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: [],
      };

    default:
      return { ...state };
  }
};

export default gamesReducer;
