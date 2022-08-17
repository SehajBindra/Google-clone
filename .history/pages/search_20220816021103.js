import { data } from "autoprefixer";
import Head from "next/head";
import React from "react";
import Header from "../Components/Header";

function Search({ results }) {
  console.log(results);
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

export async function getServerSideProps(context) {
  const useDummyData = false;

  const data = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}`
  ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}

// After the server has rendered pass the results to the client
return {
  props: {
    result: data,
  },
};
