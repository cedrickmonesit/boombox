import React from "react";
import { connect } from "react-redux";
import { getAlbum, getAlbumTracks } from "../../actions";

import Playlist from "../playlists/Playlist";
import "./album.scss";

class Album extends React.Component {
  componentDidMount() {
    this.props.getAlbum(this.props.match.params.id);
    this.props.getAlbumTracks(this.props.match.params.id);
  }

  mapTracks() {
    if (this.props.albumTracks.items) {
      return this.props.albumTracks.items.map((item) => {
        return {
          track: {
            id: item.id,
            name: item.name,
            artists: item.artists,
            preview_url: item.preview_url,
          },
        };
      });
    }
  }

  renderPlaylist() {
    if (this.props.albumTracks) {
      return <Playlist tracks={this.mapTracks()} />;
    }
    return null;
  }

  renderAlbumContent() {
    if (this.props.album.images) {
      return (
        <div className="album-container-content">
          <img
            className="album-container-content-image-cover"
            src={this.props.album.images[1].url}
            alt={this.props.album.name}
          />
          <div className="album-container-content-summary">
            <h2>{this.props.album.name}</h2>
            <p>Artist: {this.props.album.artists[0].name}</p>
            <p>Label: {this.props.album.label}</p>
            <p>Released: {this.props.album.release_date}</p>
          </div>
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <div className="album-container">
        {this.renderAlbumContent()}
        {this.renderPlaylist()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    album: state.album,
    albumTracks: state.albumTracks,
  };
};

export default connect(mapStateToProps, { getAlbum, getAlbumTracks })(Album);
