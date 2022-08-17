import { data } from "autoprefixer";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Header from "../Components/Header";
import SearchResults from "../Components/SearchResults";
import Response from "../Response";

function Search({ results }) {
  const router = useRouter();
  console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png"
        />
      </Head>

      {/* header */}
      <Header />

      {/* Search Results */}
      <SearchResults results={results} />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}

// After the server has rendered pass the results to the client
