import React from "react";
import { connect } from "react-redux";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import { getPlaylistTracks, setCurrentMusicIndex } from "../../actions";
import "./player.scss";

class Player extends React.Component {
  //setstate before component mounts
  constructor(props) {
    super(props);

    this.state = {
      currentMusicIndex: 0,
      playlist: this.renderTracks(this.props.tracks),
    };
  }

  //if props are different from previos props reset currentmusicindex and set new playlist
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      //set currentmusicindex to 0
      //this.setState({ currentMusicIndex: 0 });

      //if there is a currentmusicindex it will set this to that index
      //this lets us click on a track in a playlist to play on the player
      //if there are new playlist of tracks reset index to 0
      this.setState({
        currentMusicIndex:
          this.props.tracks !== prevProps.tracks
            ? 0
            : parseInt(this.props.currentMusicIndex),
      });

      this.setState({ playlist: this.renderTracks(this.props.tracks) });
    }
  }

  //map through the playlist to get tracks
  //filter tracks that aren't null
  //return playlist of tracks
  renderTracks = (tracks) => {
    if (tracks) {
      const playlist = tracks.map((track) => {
        if (track.preview_url) {
          return {
            title: track.name,
            src: track.preview_url,
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
    this.setState({
      currentMusicIndex:
        this.state.currentMusicIndex !== this.state.playlist.length - 1
          ? this.state.currentMusicIndex + 1
          : this.state.currentMusicIndex,
    });
    console.log(this.state.currentMusicIndex);
  };

  //if audio source is empty return undefined
  //this stops the audioplayer from throwing an undefined error at a certain index
  renderAudioSource = () => {
    if (this.state.playlist.length > 0) {
      return this.state.playlist[this.state.currentMusicIndex].src;
    }
  };

  changeLayout = () => {
    if (window.matchMedia("(max-width: 400px)")) {
      return "horizontal";
    } else {
      return "stacked-reverse";
    }
  };

  render() {
    return (
      <div>
        <AudioPlayer
          className="audio-player"
          autoPlayAfterSrcChange={true}
          showSkipControls={this.props.showSkipControls} //true, false
          showJumpControls={this.props.showJumpControls} //true, false
          customVolumeControls={this.props.customVolumeControls} //[""]
          customAdditionalControls={this.props.customAdditionalControls} //[""]
          defaultCurrentTime={""} //""
          defaultDuration={""} //""
          src={this.renderAudioSource()}
          onClickPrevious={this.handleClickPrevious}
          onClickNext={this.handleClickNext}
          layout={this.changeLayout()} //horizontal, stacked-reverse
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // tracks: state.playlistsTracks.items,
    currentMusicIndex: state.currentMusicIndex,
  };
};

export default connect(mapStateToProps, {
  getPlaylistTracks,
  setCurrentMusicIndex,
})(Player);
