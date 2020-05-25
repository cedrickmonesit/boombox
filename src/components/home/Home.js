import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getNewReleases, getFeaturedPlaylists } from "../../actions";

import "./home.scss";

class Home extends React.Component {
  componentDidMount() {
    this.props.getNewReleases();
    this.props.getFeaturedPlaylists();
  }

  renderAlbums = () => {
    if (this.props.newReleasesAlbums) {
      return this.props.newReleasesAlbums.items.map((album) => {
        return album.images.map((image) => {
          return (
            <Link key={album.id} to={`/browse/${album.id}`}>
              <div
                className="home-album-img"
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${image.url}) center/cover no-repeat border-box, rgb(255, 255, 255)`,
                }}
                alt={album.name}
              ></div>
            </Link>
          );
        });
      });
    }
    return "";
  };

  render() {
    return <div className="grid-container">{this.renderAlbums()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    tracks: state.playlistsTracks.items,
    featuredPlaylists: state.featuredPlaylists.playlists,
    newReleasesAlbums: state.newReleasesAlbums.playlists,
  };
};
export default connect(mapStateToProps, {
  getNewReleases,
  getFeaturedPlaylists,
})(Home);
