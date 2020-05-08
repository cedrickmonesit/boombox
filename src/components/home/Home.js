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
            <Link key={album.id} to={`/album/${album.id}`}>
              <img
                className="home-album-img"
                src={image.url}
                alt={album.name}
              />
            </Link>
          );
        });
      });
    }
    return "";
  };

  renderFeaturedPlaylists = () => {};

  render() {
    console.log(this.props.featuredPlaylists, this.props.newReleasesAlbums);
    return <div className="grid-container">{this.renderAlbums()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    featuredPlaylists: state.featuredPlaylists.playlists,
    newReleasesAlbums: state.newReleasesAlbums.playlists,
  };
};
export default connect(mapStateToProps, {
  getNewReleases,
  getFeaturedPlaylists,
})(Home);
