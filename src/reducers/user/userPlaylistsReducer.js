import { GET_USER_PLAYLISTS } from "../../actions/types";

export default (state = [], { type, payload }) => {
  switch (type) {
    case GET_USER_PLAYLISTS:
      return payload;
    default:
      return state;
  }
};
