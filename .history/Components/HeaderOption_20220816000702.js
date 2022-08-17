import React from "react";

function HeaderOption({ title, src, selected }) {
  return (
    <div className={`flex`}>
      <img className="h-4 w-4 cursor-pointer" src={src} alt="" />
    </div>
  );
}

export default HeaderOption;
