import React from "react";
import { connect } from "react-redux";

import { getUserPlaylists } from "../../actions";
import "./userplaylist.scss";
import history from "../../history";

class UserPlaylists extends React.Component {
  componentDidMount() {
    this.props.getUserPlaylists();
  }

  onClickNavPlaylist = (name) => {
    history.push(`/playlist/${name}`);
  };

  getPlaylists() {
    return this.props.userPlaylists.map((playlist) => {
      return (
        <div
          className="main-user-playlists"
          onClick={() => {
            this.onClickNavPlaylist(playlist.name);
          }}
          key={playlist.id}
        >
          <img src={playlist.images[1].url} alt={playlist.name} />
          <p>{playlist.name}</p>
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
