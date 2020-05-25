import React from "react";
import { connect } from "react-redux";

import { getArtistTopTracks, getArtist } from "../../actions";

import "./artist.scss";
import Playlist from "../playlists/Playlist";

class Artist extends React.Component {
  componentDidMount() {
    this.props.getArtistTopTracks(this.props.match.params.artist_id);
    this.props.getArtist(this.props.match.params.artist_id);
  }

  //converts followers number to commas 1,000,000
  renderFollowers(followers) {
    return followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  renderGenres(genres) {
    return genres.map((genre) => {
      return ` ${genre}`;
    });
  }

  //reorder artisttoptracks data to pass as a prop to Playlist component
  mapTracks() {
    if (this.props.artistTopTracks) {
      return this.props.artistTopTracks.map((track) => {
        return {
          track: {
            id: track.id,
            album: track.album,
            name: track.name,
            artists: track.artists,
            preview_url: track.preview_url,
          },
        };
      });
    }
  }

  renderArtist() {
    const artist = this.props.artist;
    if (this.props.artist.images) {
      return (
        <React.Fragment>
          <div className="artist-content">
            <img
              className="artist-profile-pic"
              src={artist.images[1].url}
              alt={artist.name}
            />
            <div className="artist-summary">
              <h2>{artist.name}</h2>
              <p>{`Career: ${artist.type}`}</p>
              <p>{`Followers: ${this.renderFollowers(
                artist.followers.total,
              )}`}</p>
              <p>{`Genres: ${this.renderGenres(artist.genres)}`}</p>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }

  renderTopTracks() {
    if (this.props.artist.images) {
      return (
        <div className="artist-top-tracks">
          <Playlist
            tracks={this.mapTracks()}
            id={() => {
              if (this.props.match.params.id) {
                return this.props.match.params.id;
              }
              return null;
            }}
          />
        </div>
      );
    }
  }

  render() {
    console.log(this.props.artistTopTracks);
    return (
      <div>
        {this.renderArtist()} {this.renderTopTracks()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    artistTopTracks: state.artistTopTracks,
    artist: state.artist,
  };
};
export default connect(mapStateToProps, { getArtistTopTracks, getArtist })(
  Artist,
);
