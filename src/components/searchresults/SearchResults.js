import React from "react";
import { connect } from "react-redux";

import { setCurrentMusicIndex } from "../../actions";
import AudioPlayer from "../AudioPlayer/Player";

class SearchResults extends React.Component {
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

  renderTracks() {
    if (this.props.tracks) {
      const tracks = this.props.tracks.items.map((track) => {
        if (track.preview_url) {
          return track;
        }
        return null;
      });
      const x = tracks.filter((track) => {
        return track != null;
      });
      return x.map((track, index) => {
        return (
          <div className="playlist-track" id={index} key={track.id}>
            <img src={track.album.images[1].url} alt={track.name} />
            <div className="playlist-track-summary">
              <p>{track.name} </p>
              <p>{this.mapArtists(track.artists)}</p>
            </div>
          </div>
        );
      });
    }
  }

  renderAudioPlayer() {
    if (this.props.tracks) {
      return <AudioPlayer tracks={this.props.tracks.items} />;
    }
  }

  //set currentmusicindex with a click this lets us play the music track that was clicked
  handlePlaylistClick = (e) => {
    if (e.target.id) {
      console.log(e.target.id);

      //set currentmusicindex in redux store
      this.props.setCurrentMusicIndex(e.target.id);
    }
  };

  render() {
    //event bubbling capture onclick event and get target id for currentmusicindex
    return (
      <React.Fragment>
        <div onClickCapture={this.handlePlaylistClick}>
          {this.renderTracks()}
        </div>
        {this.renderAudioPlayer()}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { tracks: state.searchResults.tracks };
};

export default connect(mapStateToProps, { setCurrentMusicIndex })(
  SearchResults,
);
