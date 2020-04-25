import React from "react";
import { connect } from "react-redux";

import { getUserPlaylists, getPlaylistTracks } from "../../actions";

class playlist extends React.Component {
  componentDidMount() {
    //id of playlist
    this.props.getUserPlaylists();
    this.props.playlists.map((playlist) => {
      if (playlist.name === this.props.match.params.name) {
        this.props.getPlaylistTracks(playlist.id);
      }
    });
  }

  renderTracks = (tracks) => {
    if (tracks) {
      return tracks.map((track) => {
        if (track.track.preview_url) {
          return <div key={track.track.id}>{track.track.name}</div>;
        }
        return null;
      });
    }
    this.props.playlists.map((playlist) => {
      if (playlist.name === this.props.match.params.name) {
        this.props.getPlaylistTracks(playlist.id);
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <div>playlist: {this.renderTracks(this.props.tracks.items)}</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tracks: state.playlistsTracks,
    playlists: state.userPlaylists,
  };
};

export default connect(mapStateToProps, {
  getUserPlaylists,
  getPlaylistTracks,
})(playlist);
