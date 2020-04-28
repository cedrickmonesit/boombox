import React from "react";
import { connect } from "react-redux";

import { getSearchResults } from "../../actions";

class Searchbar extends React.Component {
  onFormSubmit = (event) => {
    event.preventDefault(); //Prevents page from refresh on submit of the form
    const searchTerm = document.querySelector(".searchbar-input").value;
    this.props.getSearchResults(searchTerm, [
      "album",
      "artist",
      "playlist",
      "track",
    ]);
  };

  render() {
    //event bubbling capture onclick event and get target id for currentmusicindex
    return (
      <form
        onSubmit={this.onFormSubmit}
        className="searchbar animated fadeInDown"
      >
        <input
          className="searchbar-input"
          placeholder="search..."
          type="text"
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default connect(null, { getSearchResults })(Searchbar);
