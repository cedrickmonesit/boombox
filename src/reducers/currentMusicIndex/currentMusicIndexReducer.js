import { SET_CURRENT_MUSIC_INDEX } from "../../actions/types";

export default (state = 0, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_MUSIC_INDEX:
      return payload;
    default:
      return state;
  }
};
