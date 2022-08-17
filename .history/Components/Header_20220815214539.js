import { SearchIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef } from "react";

function Header() {
  const SearchInputRef = useRef(null);
  const router = useRouter();
  const search = (e) => {
    e.preventDefault();

    const term = SearchInputRef.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          onClick={() => router.push("/")}
          className=" cursor-pointer"
          width={120}
          height={40}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
        />

        <form className="flex border border-gray-200 max-w-3xl flex-grow rounded-full px-6 py-3 ml-10 mr-5 shadow-lg items-center ">
          <input
            className="flex-grow w-full focus:outline-none"
            ref={SearchInputRef}
            type="text"
          />
          <XIcon
            onClick={() => (SearchInputRef.current.value = "")}
            className="h-5 cursor-pointer mr-4 transition duration-100 transform hover:scale-125"
          />
          <img
            className="h-5 cursor-pointer border-l-2 border-gray-200 mr-2 pl-4 "
            src="/images/microphone.svg"
            alt=""
          />
          <SearchIcon className="h-5 ml-3 cursor-pointer  text-blue-500" />
          <button type="submit" onClick={search} hidden>
            Search
          </button>
        </form>

        {/* settings Icon */}
        <img
          className="h-6 w-6 cursor-pointer ml-auto  text-black"
          src="/images/settings.svg"
          alt=""
        />

        {/* avatar */}
        <img
          className="avatar ml-auto"
          loading="lazy"
          src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt974d872b695b0d81/624ae84f0156b57dc6d81cd1/Ryan_Reynolds.jpg"
          alt=""
        />
      </div>
    </header>
  );
}

export default Header;
