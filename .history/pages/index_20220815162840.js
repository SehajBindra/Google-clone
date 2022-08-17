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
      <header className="flex justify-between  w-full p-5  text-gray-700 sm:text-base">
        {/* left */}
        <div className="flex space-x-4 items-center pb-1 ">
          <p className="link">About </p>
          <p className="link"> Store</p>
        </div>

        {/* right */}
        <div className="flex space-x-4 items-center pb-1">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* Icon */}
          <ViewGridIcon className="h-10 w-10 cursor-pointer p-2 rounded-full hover:bg-gray-100" />
          {/* Avatar */}
          <img
            loading="lazy"
            className="avatar"
            src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt974d872b695b0d81/624ae84f0156b57dc6d81cd1/Ryan_Reynolds.jpg"
            alt=""
          />
        </div>
      </header>

      {/* BODY */}
      <form>
        <img
          loading="lazy"
          className="h-200 w-200"
          src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
        />
      </form>
    </div>
  );
}
