import React from "react";

function HeaderOption({ title, src, selected }) {
  return (
    <div
      className={`flex items-center space-x-1 cursor-pointer ${
        selected && "text-blue-500 border-b-3 border-blue-500"
      }`}
    >
      <img className="h-5 w-5 cursor-pointer items-center" src={src} alt="" />
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  );
}

export default HeaderOption;
