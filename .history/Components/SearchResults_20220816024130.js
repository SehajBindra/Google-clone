import React from "react";

function SearchResults({ results }) {
  return (
    <div>
      <p className="text-gray-600 text-md mb-5 mt-3">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime}) seconds
      </p>
    </div>
  );
}

export default SearchResults;
