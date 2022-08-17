import React from "react";

function HeaderOption({ title, src, selected }) {
  return (
    <div className={`flex`}>
      <img className="h-5 w-5 cursor-pointer" src={src} alt="" />
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  );
}

export default HeaderOption;
