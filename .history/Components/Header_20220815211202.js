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

      <form className="flex border border-gray-200">
        <input
          className="flex-grow w-full focus:outline-none"
          ref={SearchInputRef}
          type="text"
        />
      </form>
    </div>
  );
}

export default Header;
