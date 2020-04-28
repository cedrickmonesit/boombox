import React from "react";
import { connect } from "react-redux";

class SearchResults extends React.Component {
  renderTracks() {
    return this.props.tracks.items.map((track) => {
      return <div>{track.name}</div>;
    });
  }

  render() {
    //event bubbling capture onclick event and get target id for currentmusicindex
    return (
      <React.Fragment>
        <div>SearchResults: {this.renderTracks()}</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { tracks: state.searchResults.tracks };
};

export default connect(mapStateToProps)(SearchResults);
