import React from "react";
import { connect } from "react-redux";

import { getMyTopArtists } from "../../actions";

import "./artists.scss";

class Artists extends React.Component {
  componentDidMount() {
    this.props.getMyTopArtists();
  }

  renderArtists = () => {
    if (this.props.artists) {
      return this.props.artists.map((artist) => {
        return (
          <div className="artist-container" key={artist.id}>
            <div
              className="artist-img"
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${artist.images[1].url}) center/cover no-repeat border-box, rgb(255, 255, 255)`,
              }}
              alt={artist.name}
            ></div>
            <p>{artist.name}</p>
          </div>
        );
      });
    }
  };

  render() {
    return <div className="artists-grid-container">{this.renderArtists()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    artists: state.myTopArtists,
  };
};
export default connect(mapStateToProps, { getMyTopArtists })(Artists);
