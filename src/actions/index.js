import SpotifyWebApi from "spotify-web-api-js";

//import history from "../history";
import {
  GET_USER_PLAYLISTS,
  GET_PLAYLIST_TRACKS,
  SET_TOKEN_STATUS,
} from "./types";
import playlistTracksReducer from "../reducers/tracks/playlistTracksReducer";

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
//this must be async because we have to wait for response to be receive the data
export const getUserPlaylists = () => async (dispatch) => {
  const response = await spotifyApi.getUserPlaylists();

  dispatch({ type: GET_USER_PLAYLISTS, payload: response.items });
};

//action creator
export const getPlaylistTracks = (id) => async (dispatch) => {
  const response = await spotifyApi.getPlaylistTracks(id);

  //dispatch to reducer
  //must dispatch with using redux thunk middleware since we are giving the reducer a promise
  dispatch({ type: GET_PLAYLIST_TRACKS, payload: response });
};
