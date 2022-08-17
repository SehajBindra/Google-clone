import { SearchIcon, ViewGridIcon, CogIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import HeaderOptions from "./HeaderOptions";
import { useTheme } from "next-themes";

function Header() {
  const ThemeChanger = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;
    return (
      <div>
        The current theme is: {theme}
        <button onClick={() => setTheme("light")}>Light Mode</button>
        <button onClick={() => setTheme("dark")}>Dark Mode</button>
      </div>
    );
  };
  const SearchInputRef = useRef(null);
  const { data: session, status } = useSession();
  const router = useRouter();
  const search = (e) => {
    e.preventDefault();

    const term = SearchInputRef.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex  w-full p-4 items-center">
        <Image
          onClick={() => router.push("/")}
          className="cursor-pointer"
          width={120}
          height={40}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
        />

        <form className="flex border border-gray-200 max-w-3xl flex-grow rounded-full px-1 py-3 ml-8 mr-5 shadow-lg items-center  ">
          <input
            className="flex-grow w-full focus:outline-none ml-3 "
            ref={SearchInputRef}
            type="text"
          />
          <XIcon
            onClick={() => (SearchInputRef.current.value = "")}
            className="h-8 cursor-pointer mr-4 transition duration-100 transform hover:scale-125 sm:h-6"
          />
          <img
            className="h-6  cursor-pointer border-l-2 border-gray-200 mr-2 pl-2 "
            src="/images/microphone.svg"
            alt=""
          />
          <SearchIcon
            onClick={search}
            className="h-8 ml-2 cursor-pointer  text-blue-500 sm:h-6 hidden sm:inline-flex"
          />
          <button type="submit" onClick={search} hidden>
            Search
          </button>
        </form>

        <div className="flex ml-auto space-x-3 items-center ">
          {/* settings Icon */}

          <CogIcon
            onClick={ThemeChanger}
            className="hidden p-2   h-10 w-10  cursor-pointer rounded-full  sm:inline-flex hover:bg-gray-100"
          />

          {/* Apps Icon */}
          <ViewGridIcon className="hidden h-10 w-10 cursor-pointer p-2 rounded-full hover:bg-gray-100 sm:inline-flex" />

          {/* avatar */}
          <img
            onClick={!session ? signIn : signOut}
            className="avatar "
            loading="lazy"
            src={
              session
                ? `${session?.user.image}`
                : "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt974d872b695b0d81/624ae84f0156b57dc6d81cd1/Ryan_Reynolds.jpg"
            }
            alt=""
          />
        </div>
      </div>

      <HeaderOptions />
    </header>
  );
}

export default Header;
