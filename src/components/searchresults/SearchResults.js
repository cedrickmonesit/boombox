import React from "react";
import { connect } from "react-redux";

import { setCurrentMusicIndex } from "../../actions";
import AudioPlayer from "../AudioPlayer/Player";

class SearchResults extends React.Component {
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
          <div id={index} key={track.id}>
            {track.name}
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
          SearchResults: {this.renderTracks()}
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
