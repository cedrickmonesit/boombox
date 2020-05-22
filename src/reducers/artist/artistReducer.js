import { GET_ARTIST } from "../../actions/types";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case GET_ARTIST:
      return payload;
    default:
      return state;
  }
};
