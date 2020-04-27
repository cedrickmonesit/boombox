import { GET_SEARCH_RESULTS } from "../../actions/types";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case GET_SEARCH_RESULTS:
      return payload;
    default:
      return state;
  }
};
