import { combineReducers } from "redux";

//user
import userPlaylistsReducer from "./user/userPlaylistsReducer";

//tracks
import playlistTracksReducer from "./tracks/playlistTracksReducer";

//token
import tokenStatus from "./tokenStatus/tokenStatusReducer";

//currentmusicindex
import setCurrentMusicIndex from "./currentMusicIndex/currentMusicIndexReducer";

//search results
import searchResultsReducer from "./searchResults.js/searchResultsReducer";

//new releases
import newReleasesReducer from "./newReleases/newReleasesReducer";

//featured playlists
import featuredPlaylistsReducer from "./featuredPlaylists/featuredPlaylistsReducer";

//album
import albumReducer from "./album/albumTracksReducer";

//mytopartists
import myTopArtistsReducer from "./myTopArtists/myTopArtistsReducer";

//artist top tracks
import artistTopTracksReducer from "./artistsTopTracks/artistTopTracksReducer";

//artist
import artistReducer from "./artist/artistReducer";

//albums
import albumsReducer from "./albums/albumsReducer";
import getAlbumReducer from "./getAlbum/getAlbumReducer";

//take reducer put it inside to combineReducers
export default combineReducers({
  userPlaylists: userPlaylistsReducer,
  playlistsTracks: playlistTracksReducer,
  tokenStatus: tokenStatus,
  currentMusicIndex: setCurrentMusicIndex,
  searchResults: searchResultsReducer,
  newReleasesAlbums: newReleasesReducer,
  featuredPlaylists: featuredPlaylistsReducer,
  albumTracks: albumReducer,
  myTopArtists: myTopArtistsReducer,
  artistTopTracks: artistTopTracksReducer,
  artist: artistReducer,
  albums: albumsReducer,
  album: getAlbumReducer,
});
