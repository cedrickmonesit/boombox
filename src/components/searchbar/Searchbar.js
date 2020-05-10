import React from "react";
import { connect } from "react-redux";
import { FaSearch } from "react-icons/fa";

import { getSearchResults } from "../../actions";

import "./searchbar.scss";

class Searchbar extends React.Component {
  onInputChange = (event) => {
    const searchTerm = event.target.value;

    this.props.getSearchResults(searchTerm, [
      "album",
      "artist",
      "playlist",
      "track",
    ]);
  };

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
    console.log(this.props.results);
    //event bubbling capture onclick event and get target id for currentmusicindex
    return (
      <form
        onSubmit={this.onFormSubmit}
        className="searchbar animated fadeInDown"
      >
        <input
          className="searchbar-input"
          onChange={this.onInputChange}
          placeholder="search..."
          type="text"
        />
        <button className="searchbar-button" type="submit">
          <FaSearch className="icon-search" />
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    results: state.searchResults,
  };
};
export default connect(mapStateToProps, { getSearchResults })(Searchbar);
