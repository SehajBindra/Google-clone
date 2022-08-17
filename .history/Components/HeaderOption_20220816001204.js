import React from "react";

function HeaderOption({ title, src, selected }) {
  return (
    <div
      className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-300  hover:border-blue-500 pb-3 cursor-pointer`}
    >
      <img className="h-5 w-5 cursor-pointer items-center" src={src} alt="" />
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  );
}

export default HeaderOption;
