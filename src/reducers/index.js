import { combineReducers } from "redux";

//user
import userPlaylistReducer from "./user/userPlaylistsReducer";

//token
import tokenStatus from "./tokenStatus/tokenStatusReducer";

//take reducer put it inside to combineReducers
export default combineReducers({
  userPlaylists: userPlaylistReducer,
  tokenStatus: tokenStatus,
});
