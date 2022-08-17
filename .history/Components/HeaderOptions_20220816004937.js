import React from "react";

import {
  DotsHorizontalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
} from "@heroicons/react/outline";
import HeaderOption from "./HeaderOption";

function HeaderOptions() {
  return (
    <div className="flex w-full text-gray-700  justify-evenly text-sm sm:text-base lg:justify-start lg:space-x-36 lg:pl-52 lg:pt-8">
      {/* left */}
      <div className="flex space-x-6">
        <HeaderOption src="/images/all.svg" title="All" selected />
        <HeaderOption src="/images/news.svg" title="News" />
        <HeaderOption src="/images/images.svg" title="Images" />
        <HeaderOption src="/images/videos.svg" title="Videos" />
        <HeaderOption src="/images/Dot.svg" title={" Shopping"} />
        <HeaderOption src="/images/news.svg" title="More" />
      </div>
      {/* right */}
      <div className="flex items-center space-x-4 ">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
