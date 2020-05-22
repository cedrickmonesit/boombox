import React from "react";
import { connect } from "react-redux";

import {
  getUserPlaylists,
  getPlaylistTracks,
  setCurrentMusicIndex,
} from "../../actions";

import AudioPlayer from "../AudioPlayer/Player";
import "./playlist.scss";

class Playlist extends React.Component {
  componentDidMount() {
    if (this.props.match) {
      const id = this.props.match.params.id;
      const name = this.props.match.params.name;

      if (name) {
        //id of playlist
        this.props.getUserPlaylists();

        //if the name of playlist matches it will take the matched playlist id and fetch the tracks for the matched playlist
        this.props.playlists.map((playlist) => {
          if (playlist.name === this.props.match.params.name) {
            this.props.getPlaylistTracks(playlist.id);
          }
          return null;
        });
      }
      //if id exists
      //get playlist tracks
      if (id) {
        this.props.getPlaylistTracks(id);
      }
    }
  }

  //map through artists
  //to render in rendertracks method
  mapArtists(artists) {
    if (artists) {
      return artists.map((artist) => {
        if (artists.length > 1) {
          return `${artist.name} | `;
        }
        return artist.name;
      });
    }
  }

  //map through tracks and return track jsx
  renderTracks = (tracks) => {
    //map through tracks making a new array from the playlist that was fetch from api
    if (tracks) {
      const x = tracks.map((track) => {
        if (track.track.preview_url) {
          return track;
        }
        return null;
      });
      //if track is not null add it to the new array
      const y = x.filter((track) => {
        return track != null;
      });
      //map through the filtered array return track jsx
      return y.map((track, index) => {
        return (
          <div className="playlist-track" id={index} key={track.track.id}>
            <img src={track.track.album.images[1].url} alt={track.track.name} />
            <div className="playlist-track-summary">
              <p>{track.track.name} </p>
              <p>{this.mapArtists(track.track.artists)}</p>
            </div>
          </div>
        );
      });
    }
    //this will only happen if the playlist match the params name and will fetch the new playlist
    //get tracks of playlist that matches the name of the playlist selected
    this.props.playlists.map((playlist) => {
      if (playlist.name === this.props.match.params.name) {
        this.props.getPlaylistTracks(playlist.id);
      }
      return null;
    });
  };

  //set currentmusicindex with a click this lets us play the music track that was clicked
  handlePlaylistClick = (e) => {
    if (e.target.id) {
      console.log(e.target.id);

      //set currentmusicindex in redux store
      this.props.setCurrentMusicIndex(e.target.id);
    }
  };

  //make new array with tracks without track key
  maptracks = (tracks) => {
    if (tracks) {
      return tracks.map((track) => {
        console.log(track);
        return track.track;
      });
    }
  };

  render() {
    //event bubbling capture onclick event and get target id for currentmusicindex
    return (
      <React.Fragment>
        <div className="playlist" onClickCapture={this.handlePlaylistClick}>
          {this.renderTracks(this.props.tracks)}
        </div>
        <AudioPlayer tracks={this.maptracks(this.props.tracks)} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  if (!ownProps.tracks) {
    return {
      tracks: state.playlistsTracks.items,
      playlists: state.userPlaylists,
    };
  }
  return {};
};

export default connect(mapStateToProps, {
  getUserPlaylists,
  getPlaylistTracks,
  setCurrentMusicIndex,
})(Playlist);
