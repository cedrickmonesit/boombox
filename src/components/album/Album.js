import React from "react";
import { connect } from "react-redux";

import { getPlaylistTracks } from "../../actions";

import "./album.scss";

class Album extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getPlaylistTracks(id);
  }

  render() {
    console.log(this.props.tracks);
    return <div>Album</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    tracks: state.playlistsTracks,
  };
};
export default connect(mapStateToProps, { getPlaylistTracks })(Album);
