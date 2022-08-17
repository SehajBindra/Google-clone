import React from "react";

function HeaderOption({ title, src, selected }) {
  return (
    <div className={`flex`}>
      <img className="h-6 w-6 cursor-pointer" src={src} alt="" />
    </div>
  );
}

export default HeaderOption;
