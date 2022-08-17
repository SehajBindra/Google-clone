import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { SearchIcon, ViewGridIcon } from "@heroicons/react/outline";
import Footer from "../Components/Footer";
export default function Home() {
  return (
    <div className="flex flex-col justify-center h-screen">
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
      <form className=" flex flex-col items-center mt-32 flex-grow sm:mt-44 w-4/5">
        <Image
          width={300}
          height={100}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
        />
        <div className="flex w-full mt-5 hover:shadow-xl focus-within:shadow-xl max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="w-5 h-5 cursor-pointer mr-3 text-gray-500" />
          <input className="focus: outline-none flex-grow" type="text" />
          {/* MicroPhone Icon */}
          <img
            className="w-5 h-5 cursor-pointer"
            src="/images/microphone.svg"
            alt=""
          />
        </div>

        <div className="flex space-x-3 justify-center mt-8">
          <button className="btn">Google Search</button>
          <button className="btn">Feeling Lucky</button>
        </div>
      </form>

      {/* footer */}
      <Footer />
    </div>
  );
}
