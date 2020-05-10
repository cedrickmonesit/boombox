import React from "react";

import Searchbar from "../searchbar/Searchbar";
import SearchResults from "../searchresults/SearchResults";

const Search = () => {
  return (
    <React.Fragment>
      <Searchbar />
      <SearchResults />
    </React.Fragment>
  );
};

export default Search;
