import { SET_TOKEN_STATUS } from "../../actions/types";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case SET_TOKEN_STATUS:
      return payload;
    default:
      return state;
  }
};
