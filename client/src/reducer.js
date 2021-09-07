export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,

  //REMOVE after finish developing
  //token:
  //"BQCY2KH7ZmjP99njnzctueT62sRkhIeZdSxPRq_GswL5vA6ZEGoa-YT_Zfinhl6d_2f1UVnu9i77N1hYoXINbpn9IoF-WmVEQpA3-STgN4fjvGq43NaODm4vlmuu1NGDd9QfBkhcWpBqGKoLPkR6n9S8vMSX9NWO8OW3lkcEMMbgj-28ThfOqAryh0GLFOHJ9Bzk4A",
};

const reducer = (state, action) => {
  console.log(action);

  // Action => type, [payload]

  switch (action.type) {
    case "SET USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET__SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET__PLAYLISTS":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET__PLAYING":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET__ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
