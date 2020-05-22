import { GET_ARTIST_TOP_TRACKS } from "../../actions/types";

export default (state = [], { type, payload }) => {
  switch (type) {
    case GET_ARTIST_TOP_TRACKS:
      return payload;
    default:
      return state;
  }
};
