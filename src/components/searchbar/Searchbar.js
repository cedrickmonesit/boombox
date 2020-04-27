import React from "react";
import { connect } from "react-redux";

import { getSearchResults } from "../../actions";

class Searchbar extends React.Component {
  componentDidMount() {
    this.props.getSearchResults("fuc", [
      "album",
      "artist",
      "playlist",
      "track",
    ]);
  }

  render() {
    //event bubbling capture onclick event and get target id for currentmusicindex
    return (
      <React.Fragment>
        <div>Searchbar</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { state: state };
};

export default connect(mapStateToProps, { getSearchResults })(Searchbar);
