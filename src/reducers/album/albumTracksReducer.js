import { GET_ALBUM_TRACKS } from "../../actions/types";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case GET_ALBUM_TRACKS:
      return payload;
    default:
      return state;
  }
};
