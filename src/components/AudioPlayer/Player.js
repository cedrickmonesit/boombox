import React from "react";
import { connect } from "react-redux";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import { getPlaylistTracks } from "../../actions";

class Player extends React.Component {
  //setstate before component mounts
  constructor(props) {
    super(props);

    this.state = {
      currentMusicIndex: 0,
      playlist: [],
    };
  }

  //if props are different from previos props reset currentmusicindex and set new playlist
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({ currentMusicIndex: 0 });
      this.setState({ currentMusicIndex: this.props.currentMusicIndex });
      this.setState({ playlist: this.renderTracks(this.props.tracks) });
    }
  }

  //map through the playlist to get tracks
  //filter tracks that aren't null
  //return playlist of tracks
  renderTracks = (tracks) => {
    if (tracks) {
      const playlist = tracks.map((track) => {
        if (track.track.preview_url) {
          return {
            title: track.track.name,
            src: track.track.preview_url,
          };
        }
        return null;
      });
      return playlist.filter((track) => {
        return track != null;
      });
    }
    return [
      {
        title: "",
        src: "",
      },
    ];
  };

  //handle previous button
  //if index is 0 return 0
  //if index is greater than 0 subtract 1
  handleClickPrevious = () => {
    this.setState({
      currentMusicIndex:
        this.state.currentMusicIndex > 0
          ? this.state.currentMusicIndex - 1
          : this.state.currentMusicIndex,
    });
  };

  //if the current index is not equal to playlist length minus 1, add 1 to curentmusicindex
  //else return currentmusicindex
  handleClickNext = () => {
    console.log(this.state.playlist.length);
    this.setState({
      currentMusicIndex:
        this.state.currentMusicIndex !== this.state.playlist.length - 1
          ? this.state.currentMusicIndex + 1
          : this.state.currentMusicIndex,
    });
  };

  //if audio source is empty return undefined
  //this stops the audioplayer from throwing an undefined error at a certain index
  renderAudioSource() {
    if (this.state.playlist.length > 0) {
      return this.state.playlist[this.state.currentMusicIndex].src;
    }
  }

  render() {
    console.log(this.props.currentMusicIndex);
    return (
      <div>
        <div>AudioPlayer</div>
        <AudioPlayer
          autoPlayAfterSrcChange={true}
          showSkipControls={true}
          showJumpControls={false}
          src={this.renderAudioSource()}
          onClickPrevious={this.handleClickPrevious}
          onClickNext={this.handleClickNext}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tracks: state.playlistsTracks.items,
    currentMusicIndex: state.currentMusicIndex,
  };
};

export default connect(mapStateToProps, {
  getPlaylistTracks,
})(Player);
