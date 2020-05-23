import { GET_MY_SAVED_ALBUMS } from "../../actions/types";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case GET_MY_SAVED_ALBUMS:
      return payload;
    default:
      return state;
  }
};
