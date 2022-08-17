import Head from "next/head";
import React from "react";
import Header from "../Components/Header";

function Search() {
  return (
    <div>
      <Head>
        <title>Search results</title>
      </Head>

      {/* header */}
      <Header />
    </div>
  );
}

export default Search;
