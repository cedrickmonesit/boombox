import { GET_MY_TOP_ARTISTS } from "../../actions/types";

export default (state = [], { type, payload }) => {
  switch (type) {
    case GET_MY_TOP_ARTISTS:
      return payload;
    default:
      return state;
  }
};
