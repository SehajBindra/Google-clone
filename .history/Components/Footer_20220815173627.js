import { GlobeIcon } from "@heroicons/react/outline";
import React from "react";

function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px]">
      <div className="px-8 py-3">
        <p>India</p>
      </div>
      {/* left */}
      <div>
        <div>
          <GlobeIcon className="h-6 w-6" />
          About
        </div>
      </div>

      {/* right */}
      <div></div>
    </footer>
  );
}

export default Footer;
