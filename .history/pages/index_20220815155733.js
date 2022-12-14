import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <header className="flex justify-between items-center w-full p-5">
        {/* left */}
        <div className="flex space-x-4 items-center">
          <p>About </p>
          <p> store</p>
        </div>

        {/* right */}
        <div className="flex space-x-4 items-center">
          <p>Gmail</p>
          <p>Images</p>

          <img
            className="h-6 w-6 rounded-xl"
            src="https://lh3.googleusercontent.com/ogw/AOh-ky2pF7xSGPon1CaIvCyOfzgeDF3PWtY0xe0Dy09wwA=s32-c-mo"
            alt=""
          />
        </div>
      </header>

      <h1 className=" font-semibold text-xl">Lets build Google...</h1>
    </div>
  );
}
