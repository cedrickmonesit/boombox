import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getUserPlaylists } from "../../actions";

class UserPlaylists extends React.Component {
  componentDidMount() {
    this.props.getUserPlaylists();
  }

  getPlaylists() {
    return this.props.userPlaylists.map((playlist) => {
      return (
        <div key={playlist.id}>
          <Link to={`/playlist/${playlist.name}`}>{playlist.name}</Link>
        </div>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>Playlists: {this.getPlaylists()} </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userPlaylists: state.userPlaylists,
  };
};

export default connect(mapStateToProps, { getUserPlaylists })(UserPlaylists);
