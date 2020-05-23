import React from "react";
import { connect } from "react-redux";

import { getMySavedAlbums } from "../../actions";

import "./albums.scss";

class Albums extends React.Component {
  componentDidMount() {
    this.props.getMySavedAlbums();
  }

  render() {
    return <div>Albums</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    albums: state.albums,
  };
};
export default connect(mapStateToProps, { getMySavedAlbums })(Albums);
