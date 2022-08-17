import React from "react";

function SearchResults({ results }) {
  return (
    <div className="mx-auto px-3 w-full sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-md mb-5 mt-3">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime}) seconds
      </p>

      {results.items?.map((result) => (
        <div key={result.link} className="max-w-xl mb-8 ">
          <div>
            <a className="text-sm" href={result.link}>
              {result.formattedUrl}
            </a>
            <a href={result.link}>
              <h2 className="truncate text-xl">{result.title}</h2>
            </a>
          </div>
          <p>{result.snippet}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
