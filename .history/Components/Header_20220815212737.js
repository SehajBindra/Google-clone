import { SearchIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef } from "react";

function Header() {
  const SearchInputRef = useRef(null);
  const router = useRouter();
  return (
    <div>
      <Image
        onClick={() => router.push("/")}
        className=" cursor-pointer"
        width={120}
        height={40}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
      />

      <form className="flex border border-gray-200 max-w-3xl rounded-full px-6 py-3 ml-10 mr-5 shadow-lg items-center ">
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
          className="h-5 cursor-pointer border-l-2 border-gray-200 mr-3 pl-4 "
          src="/images/microphone.svg"
          alt=""
        />
        <SearchIcon className="h-5 ml-3 cursor-pointer text-gray-500" />
      </form>
    </div>
  );
}

export default Header;
