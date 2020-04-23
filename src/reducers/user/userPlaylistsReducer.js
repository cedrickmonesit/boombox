import { GET_USER_PLAYLISTS } from "../../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case GET_USER_PLAYLISTS:
      return action.payload;
    default:
      return state;
  }
};
