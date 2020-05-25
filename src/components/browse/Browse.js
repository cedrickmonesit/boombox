import React from "react";
import { connect } from "react-redux";

import {
  getNewReleases,
  getFeaturedPlaylists,
  getPlaylistTracks,
} from "../../actions";

import "./browse.scss";
import Playlist from "../playlists/Playlist";

class Home extends React.Component {
  componentDidMount() {
    this.props.getNewReleases();
    this.props.getFeaturedPlaylists();
    this.props.getPlaylistTracks(this.props.match.params.id);
  }

  //reorder featuredplaylist data to pass as a prop to Playlist component
  mapTracks() {
    if (this.props.tracks) {
      return this.props.tracks.map((item) => {
        return {
          track: {
            id: item.track.id,
            album: item.track.album,
            name: item.track.name,
            artist: item.track.artists,
            preview_url: item.track.preview_url,
          },
        };
      });
    }
  }

  renderTracks() {
    if (this.props.tracks) {
      return <Playlist tracks={this.mapTracks()} id={"id"} />;
    }
  }
  render() {
    console.log(this.props.tracks);
    return <React.Fragment>{this.renderTracks()}</React.Fragment>;
  }
}

const mapStateToProps = (state) => {
  return {
    featuredPlaylists: state.featuredPlaylists.playlists.items,
    newReleasesAlbums: state.newReleasesAlbums.playlists,
    tracks: state.playlistsTracks.items,
  };
};
export default connect(mapStateToProps, {
  getNewReleases,
  getFeaturedPlaylists,
  getPlaylistTracks,
})(Home);
