import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ViewGridIcon } from "@heroicons/react/outline";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Google</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <header className="flex justify-between items-center w-full p-5  text-gray-700 sm:text-base">
        {/* left */}
        <div className="flex space-x-4 items-center pb-2">
          <p className="link">About </p>
          <p className="link"> store</p>
        </div>

        {/* right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* Icon */}
          <ViewGridIcon className="h-6 w-6" />
          {/* Avatar */}
          <img
            loading="lazy"
            className="avatar"
            src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt974d872b695b0d81/624ae84f0156b57dc6d81cd1/Ryan_Reynolds.jpg"
            alt=""
          />
        </div>
      </header>
    </div>
  );
}
