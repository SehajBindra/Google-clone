import { GlobeIcon } from "@heroicons/react/outline";
import React from "react";

function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
      <div className="px-8 py-3">
        <p>India</p>
      </div>
      {/* left */}
      <div className="grid col-span-1">
        <div>
          <GlobeIcon className="h-6 w-6" />
          About
        </div>
        <div className="flex">
          <p>Advertising</p>
          <p>Business</p>
          <p>How Search Works</p>
        </div>
      </div>

      {/* right */}
      <div></div>
    </footer>
  );
}

export default Footer;
