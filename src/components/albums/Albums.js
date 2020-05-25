import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getMySavedAlbums } from "../../actions";

import "../home/home.scss";

//user albums
class Albums extends React.Component {
  componentDidMount() {
    this.props.getMySavedAlbums();
  }

  renderAlbums() {
    if (this.props.albums.items) {
      return this.props.albums.items.map((album) => {
        return (
          <Link key={album.album.id} to={`/album/${album.album.id}`}>
            <div
              className="home-album-img"
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${album.album.images[1].url}) center/cover no-repeat border-box, rgb(255, 255, 255)`,
              }}
              alt={album.album.name}
            ></div>
          </Link>
        );
      });
    }
    return "";
  }

  render() {
    return <div className="grid-container">{this.renderAlbums()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    albums: state.albums,
  };
};
export default connect(mapStateToProps, { getMySavedAlbums })(Albums);
