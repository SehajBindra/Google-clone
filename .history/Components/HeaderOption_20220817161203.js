import React from "react";

function HeaderOption({ title, src, selected }) {
  return (
    <div
      className={` dark:bg-black flex items-center space-x-1 border-b-4 border-transparent cursor-pointer hover:text-blue-500 hover:border-blue-500  ${
        selected && "text-blue-500 border-b-4 border-blue-500"
      }`}
    >
      <img className="h-5 w-5 cursor-pointer items-center" src={src} alt="" />
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  );
}

export default HeaderOption;
