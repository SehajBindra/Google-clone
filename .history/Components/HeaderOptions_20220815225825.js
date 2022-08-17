import React from "react";
import HeaderOption from "./HeaderOption";
import {
  DotsHorizontalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
} from "@heroicons/react/outline";

function HeaderOptions() {
  return (
    <div>
      {/* left */}
      <div className="flex space-x-6">
        <HeaderOption Icon={NewspaperIcon} title="News" />
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
