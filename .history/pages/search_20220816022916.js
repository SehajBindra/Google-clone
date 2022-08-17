import { data } from "autoprefixer";
import Head from "next/head";
import React from "react";
import Header from "../Components/Header";
import Response from "../Response";

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
