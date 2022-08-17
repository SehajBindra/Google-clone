import React from "react";

function HeaderOption({ title, src, selected }) {
  return (
    <div className={`flex items-center`}>
      <img className="h-5 w-5 cursor-pointer items-center" src={src} alt="" />
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  );
}

export default HeaderOption;
