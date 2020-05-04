import { GET_FEATURED_PLAYLISTS } from "../../actions/types";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case GET_FEATURED_PLAYLISTS:
      return payload;
    default:
      return state;
  }
};
