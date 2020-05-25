import { GET_ALBUM } from "../../actions/types";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case GET_ALBUM:
      return payload;
    default:
      return state;
  }
};
