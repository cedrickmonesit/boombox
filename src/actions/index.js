import SpotifyWebApi from "spotify-web-api-js";

//import history from "../history";
import { GET_USER_PLAYLISTS, SET_TOKEN_STATUS } from "./types";

const spotifyApi = new SpotifyWebApi();

//action creator
export const setTokenStatus = (token, status) => async (dispatch) => {
  //dispatch to reducer
  dispatch({
    type: SET_TOKEN_STATUS,
    payload: { token: token, isLoggedIn: status },
  });
  //history.push(`/list/search/results/${searchTerm}`);
};

//action creator
export const getUserPlaylists = () => async () => {
  const response = await spotifyApi.getUserPlaylists();
  console.log(response);

  //dispatch to reducer
  return { type: GET_USER_PLAYLISTS, payload: response.data };
  //history.push(`/list/search/results/${searchTerm}`);
};
