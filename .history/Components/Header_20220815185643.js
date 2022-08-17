import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div>
      <Image
        width={120}
        height={40}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
      />
    </div>
  );
}

export default Header;
