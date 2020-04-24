import { GET_PLAYLIST_TRACKS } from "../../actions/types";

export default (state = [], { type, payload }) => {
  switch (type) {
    case GET_PLAYLIST_TRACKS:
      return payload;
    default:
      return state;
  }
};
