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
    <div>
      {/* left */}
      <div className="flex space-x-6">
        <HeaderOption src="/images/all.svg" title="All" selected />
        <HeaderOption icon={NewspaperIcon} title="News" />
        <HeaderOption icon={PhotographIcon} title="Images" />
        <HeaderOption icon={PlayIcon} title="Videos" />
        <HeaderOption icon={MapIcon} title="Maps" />
        <HeaderOption icon={DotsHorizontalIcon} title="More" />
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
